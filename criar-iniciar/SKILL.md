---
name: criar-iniciar
description: Generates a detailed and professional technical 'iniciar.md' guide. Focused on streamlining developer onboarding with clear setup instructions and troubleshooting.
---

# SKILL: CriarIniciar (Technical Guide Pro)

Esta skill gera o arquivo `iniciar.md`, que serve como o mapa de execução técnica do projeto. Diferente do README, este arquivo é estritamente focado em comandos, ambiente e resolução de problemas.

## 🎯 Objetivo
Eliminar a fricção no primeiro contato de um desenvolvedor com o código, garantindo que o setup inicial seja feito em menos de 2 minutos.

## 🚀 Estrutura do Guia
1. **Ambiente**: Especifica versões recomendadas de runtime.
2. **Setup**: Comandos de instalação limpos e comentados.
3. **Execução**: Como subir o ambiente de desenvolvimento e produção.
4. **Resolução de Problemas**: Dicas rápidas para erros comuns de instalação.

## 🛠️ Instruções de Geração
O Agente deve:
- Detectar automaticamente se o projeto usa `npm`, `yarn`, `pnpm` ou `pip`.
- Listar variáveis de ambiente necessárias (ex: `.env.example`).
- Incluir dicas de performance para o ambiente local.

## 📝 Template de Referência

```markdown
# 🚀 Guia de Inicialização - {{NOME}}

Este guia contém as instruções técnicas para configurar e executar o projeto em seu ambiente local.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Runtime**: {{STACK_VERSION}} (ex: Node.js 20+ ou Python 3.11+)
- **Gerenciador**: {{MANAGER}} (ex: npm, yarn, pip)
- **Git**: Para clonagem e controle de versão.

## 🛠️ Passo a Passo

### 1. Preparação do Ambiente
```bash
# Clone o repositório (se ainda não o fez)
git clone <url-do-repo>

# Entre na pasta
cd {{FOLDER_NAME}}
```

### 2. Instalação de Dependências
```bash
{{INSTALL_COMMAND}}
```

### 3. Configuração de Variáveis (Opcional)
Se houver um arquivo `.env.example`, crie sua cópia:
```bash
cp .env.example .env
# Edite as chaves conforme necessário
```

### 4. Execução
```bash
{{RUN_COMMAND}}
```

## 🔍 Troubleshooting (FAQ)

- **Erro de Versão**: Certifique-se de que o runtime instalado é compatível com o listado nos pré-requisitos.
- **Porta Ocupada**: O sistema tenta usar a porta padrão. Se falhar, use o script `iniciarSistema.bat` para resolução automática.
- **Permissão de Script**: No Windows, se o script não rodar, tente: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.

---
*Gerado automaticamente pelo Agente CriarIniciar.*
```

---
**WDK Professional Series** | *Documentação Técnica*
