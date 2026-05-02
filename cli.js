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
        const sourceBaseDir = __dirname;
        const availableSkills = ['criar-html', 'criar-readme', 'criar-bat', 'criar-iniciar'];
        const skillsToInstall = skillName === 'all' ? availableSkills : [skillName];

        for (const sName of skillsToInstall) {
            const sourcePath = path.join(sourceBaseDir, sName);
            const sTargetDir = path.join(targetBaseDir, sName);

            if (fs.existsSync(sourcePath)) {
                if (fs.existsSync(sTargetDir)) {
                    console.log(`⚠️  A skill '${sName}' já existe. Sobrescrevendo...`);
                    fs.rmSync(sTargetDir, { recursive: true, force: true });
                }
                
                fs.cpSync(sourcePath, sTargetDir, { recursive: true });
                console.log(`✅ Sucesso! Skill instalada em: .agent/skills/${sName}`);
            } else if (skillName !== 'all') {
                console.error(`❌ Erro: A skill '${sName}' não foi encontrada.`);
            }
        }
    } catch (err) {
        console.error(`❌ Erro fatal: ${err.message}`);
    }
} else {
    console.log(`
🌟 WDK Skills - Command Line Interface
Uso: npx github:williamdevide/antigravity-wdk-skills add <nome-da-skill>

Skills disponíveis:
- all (instala todas as skills abaixo)
- criar-html
- criar-readme
- criar-bat
- criar-iniciar
    `);
}
