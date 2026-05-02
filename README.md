# Antigravity WDK Skills

Este repositório contém **Agent Skills** e templates especializados para o ecossistema Antigravity WDK. Estas habilidades são projetadas para estender as capacidades da IA, permitindo a execução de tarefas complexas e a criação de interfaces de alto impacto de forma padronizada.

> [!IMPORTANT]
> Este repositório está em desenvolvimento ativo. Novas skills são adicionadas conforme a evolução do ecossistema.

## 🛠️ Instalação e Uso

Para utilizar estas skills em seu projeto Antigravity:

1. Adicione o repositório como referência ou clone as pastas desejadas para o diretório `.agent/skills/` do seu projeto.
2. Informe ao seu assistente Antigravity sobre a localização das novas skills.

```bash
# Exemplo de inclusão via terminal
mkdir -p .agent/skills/
git clone https://github.com/williamdevide/antigravity-wdk-skills.git temp_skills
cp -r temp_skills/criador-slidehtml .agent/skills/
rm -rf temp_skills
```

## 📚 Skills Disponíveis

| Skill | Descrição | Link |
| :--- | :--- | :--- |
| **Criador de Slides HTML** | Motor de slides fullpage com navegação interativa e design premium. | [Visualizar](criador-slidehtml/) |

## 🤝 Suporte

Se você encontrar problemas ou tiver sugestões para novas skills, abra uma issue no [GitHub Issue Tracker](https://github.com/williamdevide/antigravity-wdk-skills/issues).

## 📄 Licença

Você é livre para copiar, modificar e distribuir estas skills sob os termos da licença MIT. Veja o arquivo LICENSE para detalhes (em breve).

---
**WDK Ecosystem** | *Potencializando a Inteligência Artificial*
