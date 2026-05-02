@echo off
SETLOCAL EnableDelayedExpansion
SET NOME_PROJETO=Antigravity WDK Skills
SET DESCRICAO=CLI para instalacao de skills do ecossistema WDK
SET STACK=Node

TITLE !NOME_PROJETO! - Local Runner
color 0B

:header
cls
echo ====================================================
echo   !NOME_PROJETO!
echo   !DESCRICAO!
echo ====================================================
echo.

echo [+] Iniciando stack !STACK!...

if /i "!STACK!"=="Node" (
    echo [*] Verificando dependencias (npm install)...
    call npm install
    echo.
    echo [*] CLI pronto para uso via 'node cli.js'
    node cli.js
)

if %errorlevel% neq 0 (
    echo [ERRO] Falha ao iniciar sistema.
    pause
)
pause
