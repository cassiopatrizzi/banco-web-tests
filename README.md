# Banco Web Tests

Este projeto contém testes automatizados end-to-end utilizando Cypress e JavaScript para a aplicação Banco Web.

## Componentes do Projeto

- **Cypress**: Framework de testes E2E utilizado para automação dos fluxos da aplicação web.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes, organizados em arquivos na pasta `cypress/support/commands`.
- **Relatórios**: Geração de relatórios detalhados dos testes com o `cypress-mochawesome-reporter`.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de teste automatizados.
  - `cypress/support/commands/`: Custom Commands para login, transferência, comandos comuns, etc.
  - `cypress/fixtures/`: Dados de apoio para os testes (ex: credenciais).
  - `cypress/screenshots/`: Prints automáticos de falhas (ignorado no git).

## Pré-requisitos

- Node.js instalado
- Clonar este repositório
- Ter as APIs `banco-api` e `banco-web` em execução localmente

## Instalação

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. (Opcional) Configure variáveis de ambiente se necessário, seguindo o exemplo do `.env.example`.

## Execução dos Testes

- Para abrir o Cypress em modo interativo:
  ```bash
  npm run cy:open
  ```
- Para rodar os testes em modo headless e gerar relatório:
  ```bash
  npm run cy:run
  ```
- O relatório será gerado automaticamente na pasta `cypress/reports`.

## Documentação dos Testes

### Testes implementados
- **Login**: Testa login com credenciais válidas e inválidas, exibindo mensagens apropriadas.
- **Transferência**: Testa o fluxo de transferência entre contas, validando seleção de contas, valor e mensagem de sucesso.

### Custom Commands
Os comandos customizados ficam em `cypress/support/commands/`:

- `loginCredenciaisValidas()`: Realiza login com usuário e senha válidos do fixture `credenciais.json`.
- `loginCredenciaisInvalidas()`: Realiza login com dados inválidos do fixture.
- `verificarMsgToast(mensagem)`: Valida se o toast exibido contém o texto esperado.
- `adicionaOpcaoSelectContas(labelDoCampo, opcao)`: Seleciona uma opção em um campo de conta a partir do label e do nome da opção.

## Observações
- Certifique-se de que as APIs estejam rodando antes de executar os testes.
- Prints de falhas e relatórios são gerados automaticamente e ignorados pelo git.

---

Para dúvidas ou sugestões, abra uma issue neste repositório.
