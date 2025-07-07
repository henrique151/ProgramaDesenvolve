# Surge.sh - Deploy de Sites Estáticos

## O que é o Surge?

O Surge é uma ferramenta de linha de comando (CLI) que permite a publicação de sites estáticos na web de forma simples e rápida. É uma ótima opção para desenvolvedores front-end que desejam hospedar projetos como portfólios, landing pages, ou qualquer site que não necessite de um backend (servidor).

## Vantagens

- **Gratuito:** O plano básico é gratuito e atende a maioria das necessidades.
- **Fácil de usar:** Com poucos comandos, seu site está no ar.
- **Rápido:** O deploy é feito em segundos.
- **Domínio customizado:** Permite configurar um domínio próprio.

## Passo a Passo para fazer o deploy

### 1. Instalação do Node.js

O Surge é um pacote do Node.js, então o primeiro passo é garantir que você tenha o Node.js e o npm (gerenciador de pacotes do Node) instalados em sua máquina.

Você pode baixar o Node.js em: [https://nodejs.org/](https://nodejs.org/)

Para verificar se a instalação foi bem-sucedida, abra seu terminal e digite:

```bash
node -v
npm -v
```

Esses comandos devem retornar as versões instaladas.

### 2. Instalação do Surge

Com o Node.js instalado, instale o Surge globalmente em sua máquina usando o npm. A instalação global (com a flag `-g`) permite que você use o comando `surge` de qualquer diretório no seu terminal.

```bash
npm install --global surge
```

### 3. Preparando seu projeto

Navegue até a pasta do seu projeto (o diretório que contém o `index.html` e outros arquivos do seu site).

```bash
cd caminho/para/seu/projeto
```

### 4. Fazendo o Deploy

Dentro da pasta do seu projeto, execute o comando:

```bash
surge
```

Ao executar o comando pela primeira vez, o Surge irá pedir para você criar uma conta. É um processo rápido, precisando apenas de um email e uma senha.

Depois de logado, o Surge irá:

1.  **Confirmar o diretório do projeto:** Ele mostrará o caminho da pasta que será publicada. Pressione `Enter` para confirmar.
2.  **Sugerir um domínio:** Ele irá gerar um subdomínio aleatório (ex: `random-words.surge.sh`). Você pode aceitar pressionando `Enter` ou digitar um subdomínio de sua preferência e depois pressionar `Enter`.

Após esses passos, seu site será publicado e o link de acesso será exibido no terminal!

### 5. Atualizando o site

Para atualizar seu site, basta ir até a pasta do projeto e rodar o comando `surge` novamente. Ele lembrará do domínio que você usou e substituirá os arquivos antigos pelos novos.

### 6. Desfazendo o deploy (Tear Down)

Se você quiser remover o site do ar, use o comando `teardown` seguido do domínio.

```bash
surge teardown seudominio.surge.sh
```
