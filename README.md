
# Sistema de Autenticação com JWT

Este é um sistema simples de autenticação baseado em **JSON Web Tokens (JWT)**, utilizando **Node.js**, **Express**, **Sequelize** com **SQLite** e **Tailwind CSS** no front-end.

## Funcionalidades

- Registro de novos usuários
- Login com validação e geração de token JWT
- Páginas protegidas acessíveis apenas com token válido
- Logout com remoção de token

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript para o back-end
- **Express**: Framework minimalista para o back-end
- **Sequelize**: ORM para banco de dados relacional (SQLite)
- **JWT (jsonwebtoken)**: Geração e verificação de tokens JWT
- **SQLite**: Banco de dados leve utilizado para persistência de dados
- **Tailwind CSS**: Framework CSS utilitário para estilização simples e rápida

## Instalação

Siga os passos abaixo para rodar a aplicação localmente.

### Pré-requisitos

- **Node.js** instalado na sua máquina
- **npm** (Node Package Manager)

### Passo a passo

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até o diretório da aplicação:

    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências necessárias:

    ```bash
    npm install
    ```

4. Inicie o servidor:

    ```bash
    npm start
    ```

O servidor estará rodando na porta `3000`. Acesse a aplicação no seu navegador:

```
http://localhost:3000
```

## Estrutura do Projeto

A aplicação é composta pelos seguintes arquivos:

```bash
.
├── public/
│   ├── index.html        # Página inicial
│   ├── register.html     # Página de registro de usuários
│   ├── login.html        # Página de login
│   ├── protected.html    # Página protegida, acessível apenas por usuários autenticados
├── database.sqlite       # Banco de dados SQLite criado pelo Sequelize
├── server.js             # Código principal do servidor
├── package.json          # Configuração do projeto e dependências
└── README.md             # Documentação do projeto
```

## Funcionalidades do Sistema

### 1. Registro de Usuário

- Acesse `http://localhost:3000/register.html`.
- Insira um nome de usuário e senha.
- O usuário será registrado no banco de dados SQLite.

### 2. Login

- Acesse `http://localhost:3000/login.html`.
- Insira o nome de usuário e a senha registrados.
- Após o login bem-sucedido, um token JWT será gerado e armazenado no `localStorage`.

### 3. Acesso a Página Protegida

- Ao tentar acessar `http://localhost:3000/protected.html`, o sistema verificará se o token JWT é válido.
- Se o token for válido, a página será exibida.
- Caso contrário, o usuário será redirecionado para a página de login.

### 4. Logout

- Na página protegida, ao clicar em "Logout", o token será removido e o usuário será redirecionado para a página de login.

## Dependências

- [express](https://www.npmjs.com/package/express): Framework web minimalista para Node.js.
- [sequelize](https://www.npmjs.com/package/sequelize): ORM para Node.js.
- [sqlite3](https://www.npmjs.com/package/sqlite3): Driver para SQLite.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Pacote para gerar e verificar tokens JWT.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware para processar requisições JSON.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch com a feature/fix que deseja adicionar (`git checkout -b minha-nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin minha-nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo `LICENSE` para mais informações.
