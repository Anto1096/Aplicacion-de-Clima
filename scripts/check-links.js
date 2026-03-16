#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando enlaces internos...');

// Leer el archivo HTML
const htmlContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Buscar todos los enlaces
const linkRegex = /href=["']([^"']+)["']/g;
const srcRegex = /src=["']([^"']+)["']/g;

let links = [];
let match;

// Extraer enlaces href
while ((match = linkRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
}

// Extraer enlaces src
while ((match = srcRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
}

// Filtrar enlaces internos (que no sean externos)
const internalLinks = links.filter(link => 
    !link.startsWith('http') && 
    !link.startsWith('mailto:') && 
    !link.startsWith('tel:') &&
    !link.startsWith('#') &&
    link !== ''
);

console.log(`📊 Encontrados ${internalLinks.length} enlaces internos:`);

let allLinksExist = true;

internalLinks.forEach(link => {
    const filePath = path.join(__dirname, '..', link);
    
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${link}`);
    } else {
        console.log(`❌ ${link} - ARCHIVO NO ENCONTRADO`);
        allLinksExist = false;
    }
});

if (allLinksExist) {
    console.log('✅ Todos los enlaces internos funcionan correctamente');
    process.exit(0);
} else {
    console.log('❌ Algunos enlaces internos están rotos');
    process.exit(1);
}
