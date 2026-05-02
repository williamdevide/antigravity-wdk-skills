---
name: criar-bat
description: Generates a robust and professional 'iniciarSistema.bat' script for local project execution. Includes port conflict resolution, automatic dependency installation, and enhanced terminal UI.
---

# SKILL: CriarBat (Local Runner Pro)

Esta skill automatiza a criação do arquivo `iniciarSistema.bat` na raiz do projeto, transformando o processo de "rodar localmente" em uma experiência premium e sem erros.

## 🎯 Objetivo
Prover um ponto de entrada único e robusto para qualquer desenvolvedor ou usuário que precise executar o sistema localmente, garantindo que o ambiente esteja pronto (Node/Python) e as portas estejam livres.

## 🚀 Fluxo de Trabalho (Workflow)
1. **Auditoria de Stack**: Analisa `package.json` ou `requirements.txt`.
2. **Extração de Metadados**: Coleta nome e descrição do projeto para o branding do terminal.
3. **Geração Dinâmica**: Injeta a lógica de verificação de porta e comandos de execução no template.

## 🛠️ Padrões de Código (Code Standards)
- **Branding**: O script deve exibir um header visual no terminal.
- **Resiliência**: Deve verificar se a porta padrão (3000, 8000, etc.) está ocupada e oferecer opções (Matar processo ou Mudar porta).
- **Automação**: Deve rodar `npm install` ou `pip install` se necessário.

## 📝 Template Profissional

```batch
@echo off
SETLOCAL EnableDelayedExpansion
:: --- CONFIGURAÇÃO ---
SET NOME_PROJETO={{NOME}}
SET DESCRICAO={{DESC}}
SET STACK={{STACK}}
SET PORT=3000

TITLE !NOME_PROJETO! - Local Runner
mode con: cols=100 lines=30
color 0B

:header
cls
echo.
echo   ######################################################################
echo   #                                                                    #
echo   #   !NOME_PROJETO!
echo   #   !DESCRICAO!
echo   #                                                                    #
echo   ######################################################################
echo.

:check_port
netstat -ano | findstr :!PORT! > nul
if %errorlevel% equ 0 (
    echo [!] ALERTA: A porta !PORT! ja esta em uso.
    echo.
    echo [S] Encerrar processo ocupante (TaskKill)
    echo [P] Tentar proxima porta (+1)
    echo [N] Cancelar e Sair
    echo.
    set /p CHOICE="Escolha uma opcao: "
    if /i "!CHOICE!"=="S" (
        for /f "tokens=5" %%a in ('netstat -aon ^| findstr :!PORT!') do taskkill /F /PID %%a
        timeout /t 2 > nul
        goto check_port
    )
    if /i "!CHOICE!"=="P" (
        set /a PORT+=1
        goto check_port
    )
    exit
)

echo [+] Porta !PORT! validada. Iniciando stack !STACK!...
echo.

if /i "!STACK!"=="Node" (
    echo [*] Verificando node_modules...
    if not exist node_modules (
        echo [!] Dependencias nao encontradas. Instalando...
        call npm install
    )
    echo [*] Abrindo navegador em http://localhost:!PORT!...
    start http://localhost:!PORT!
    npm run dev -- --port !PORT!
)

if /i "!STACK!"=="Python" (
    if not exist venv (
        echo [*] Criando ambiente virtual (venv)...
        python -m venv venv
    )
    call venv\Scripts\activate
    echo [*] Instalando/Atualizando requisitos...
    pip install -r requirements.txt
    echo [*] Abrindo navegador em http://localhost:!PORT!...
    start http://localhost:!PORT!
    python main.py
)

if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Ocorreu um problema ao iniciar o sistema.
    pause
)
```

---
**WDK Professional Series** | *Criado por William Devide*
