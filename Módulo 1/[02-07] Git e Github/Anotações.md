# Comandos Git Essenciais

- `git init` - Inicializa um novo repositório Git no diretório atual.
- `git status` - Mostra o estado dos arquivos no diretório de trabalho e na área de stage (arquivos modificados, preparados para commit, etc.).
- `git add <arquivo>` - Adiciona as alterações de um arquivo para a área de stage, preparando-o para ser incluído no próximo commit. Use `git add .` para adicionar todos os arquivos modificados.
- `git commit` - Salva as alterações preparadas (stage) no repositório. Cada commit é um ponto na história do seu projeto e precisa de uma mensagem descritiva. Use `git commit -m "Sua mensagem"`.
- `git log` - Mostra o histórico de commits do repositório. Use `git log --oneline` para uma visualização mais concisa.
- `git remote -v` - Mostra os repositórios remotos configurados.
- `git config --list` - Lista todas as configurações do Git.
- `git push -u origin main` - Envia as alterações para o repositório remoto.
- `git pull origin main` - Puxa as alterações do repositório remoto.
- `git branch` - Lista os branches locais.
- `git checkout -b <nome-do-branch>` - Cria e muda para um novo branch.
- `git merge <nome-do-branch>` - Mescla um branch ao branch atual.
- `git rm <arquivo>` - Remove um arquivo do repositório.

# Uso do arquivo .gitignore

- `.gitignore` - Arquivo usado para ignorar arquivos/pastas sensíveis ou desnecessários no repositório.
  Exemplo de uso:

```gitignore
.env
node_modules/
*.log
```
