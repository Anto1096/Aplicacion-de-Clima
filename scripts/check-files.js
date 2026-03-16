#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📁 Verificando archivos requeridos...');

const requiredFiles = [
    'index.html',
    'js/main.js',
    'js/form-validation.js',
    'js/animations.js',
    'js/translations.js',
    'styles/main.css',
    'styles/components.css',
    'styles/responsive.css',
    'assets/pixelcut-export.jpg'
];

const requiredDirectories = [
    'projects/ecommerce',
    'projects/dashboard',
    'projects/tasks'
];

let allFilesExist = true;

console.log('\n🔍 Verificando archivos principales:');
requiredFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - ARCHIVO NO ENCONTRADO`);
        allFilesExist = false;
    }
});

console.log('\n🔍 Verificando directorios de proyectos:');
requiredDirectories.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    
    if (fs.existsSync(dirPath)) {
        console.log(`✅ ${dir}/`);
    } else {
        console.log(`❌ ${dir}/ - DIRECTORIO NO ENCONTRADO`);
        allFilesExist = false;
    }
});

// Verificar archivos específicos en proyectos
console.log('\n🔍 Verificando archivos de proyectos:');
const projectFiles = [
    'projects/ecommerce/index.html',
    'projects/dashboard/index.html',
    'projects/tasks/index.html'
];

projectFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - ARCHIVO NO ENCONTRADO`);
        allFilesExist = false;
    }
});

// Verificar configuración de package.json
console.log('\n🔍 Verificando configuración:');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.start) {
        console.log('✅ package.json configurado correctamente');
    } else {
        console.log('❌ package.json - scripts no configurados');
        allFilesExist = false;
    }
} else {
    console.log('❌ package.json - ARCHIVO NO ENCONTRADO');
    allFilesExist = false;
}

if (allFilesExist) {
    console.log('\n✅ Todos los archivos requeridos están presentes');
    process.exit(0);
} else {
    console.log('\n❌ Faltan algunos archivos requeridos');
    process.exit(1);
}
