#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const [,, cmd, skillName] = process.argv;

if (cmd === 'add' && skillName) {
    const targetBaseDir = path.join(process.cwd(), '.agent', 'skills');
    const targetDir = path.join(targetBaseDir, skillName);

    if (!fs.existsSync(targetBaseDir)) {
        fs.mkdirSync(targetBaseDir, { recursive: true });
    }

    console.log(`\n🚀 WDK Skills Installer`);
    console.log(`📦 Instalando: ${skillName}...\n`);

    try {
        const repoUrl = 'https://github.com/williamdevide/antigravity-wdk-skills.git';
        const tempDir = 'temp_skill_install_' + Math.random().toString(36).substring(7);
        
        // Clone minimal
        execSync(`git clone --depth 1 ${repoUrl} ${tempDir}`, { stdio: 'ignore' });
        
        const sourcePath = path.join(tempDir, skillName);
        
        if (fs.existsSync(sourcePath)) {
            if (fs.existsSync(targetDir)) {
                console.log(`⚠️  A skill '${skillName}' já existe. Sobrescrevendo...`);
                fs.rmSync(targetDir, { recursive: true, force: true });
            }
            
            fs.cpSync(sourcePath, targetDir, { recursive: true });
            console.log(`✅ Sucesso! Skill instalada em: .agent/skills/${skillName}`);
        } else {
            console.error(`❌ Erro: A skill '${skillName}' não foi encontrada no repositório.`);
        }

        // Cleanup
        fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (err) {
        console.error(`❌ Erro fatal: ${err.message}`);
    }
} else {
    console.log(`
🌟 WDK Skills - Command Line Interface
Uso: npx github:williamdevide/antigravity-wdk-skills add <nome-da-skill>

Skills disponíveis:
- criador-slidehtml
- criar-readme
- criar-bat
- criar-iniciarmd
    `);
}
