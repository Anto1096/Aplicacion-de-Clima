#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 EJECUTANDO SUITE DE TESTS AUTOMÁTICOS');
console.log('==========================================');

const tests = [
    {
        name: 'Verificación de Linting HTML',
        command: 'html-validate index.html',
        critical: true
    },
    {
        name: 'Verificación de Sintaxis JavaScript',
        command: 'node -c js/main.js && node -c js/form-validation.js && node -c js/animations.js && node -c js/translations.js',
        critical: true
    },
    {
        name: 'Verificación de Enlaces Internos',
        command: 'node scripts/check-links.js',
        critical: true
    },
    {
        name: 'Verificación de Archivos Requeridos',
        command: 'node scripts/check-files.js',
        critical: true
    }
];

let allTestsPassed = true;
let criticalTestsPassed = true;

tests.forEach((test, index) => {
    console.log(`\n${index + 1}. ${test.name}`);
    console.log('-'.repeat(50));
    
    try {
        execSync(test.command, { 
            stdio: 'pipe',
            cwd: path.join(__dirname, '..')
        });
        console.log(`✅ ${test.name} - PASÓ`);
    } catch (error) {
        console.log(`❌ ${test.name} - FALLÓ`);
        console.log(`Error: ${error.message}`);
        
        if (test.critical) {
            criticalTestsPassed = false;
        }
        allTestsPassed = false;
    }
});

console.log('\n' + '='.repeat(50));
console.log('📊 RESUMEN DE TESTS');

if (criticalTestsPassed) {
    console.log('✅ Todos los tests críticos pasaron');
    console.log('🚀 El proyecto está listo para deploy');
} else {
    console.log('❌ Algunos tests críticos fallaron');
    console.log('⚠️  Revisa los errores antes de continuar');
}

if (allTestsPassed) {
    console.log('🎉 ¡Todos los tests pasaron exitosamente!');
} else {
    console.log('🔧 Algunos tests fallaron, pero los críticos están OK');
}

console.log('\n💡 Comandos útiles:');
console.log('   npm run test:all    - Ejecutar todos los tests');
console.log('   npm run watch       - Modo watch (tests automáticos)');
console.log('   npm run dev         - Desarrollo con tests previos');
console.log('   npm run deploy:check - Verificación completa para deploy');

process.exit(criticalTestsPassed ? 0 : 1);
