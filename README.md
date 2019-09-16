# T-Shirts

## Descrição

Trabalho para disciplina de DSO2 (Desenvolvimento de Sistemas Orientado a Objetos 2), UFSC.

O trabalho consiste em um sistema WEB para venda de produtos.

Para fazer este sistema foram usadas as seguintes técnologias: NodeJs, VueJs e MongoDB, juntamente com algumas bibliotecas como: express, mongoose, bcrypt, jwt, entre outras. 

## Requisitos

Os requisitos solicitados pelo cliente(professor) foram estes:

Identifique uma categoria de produtos que você considera útil criar um sistema de vendas (ex: materiais esportivos, informática, livros, etc).

Em sua página inicial, o sistema deve permitir buscar produtos, especificando a descrição do mesmo. Também será possível, a partir da página inicial, acessar a página de login no sistema e a página de cadastramento de um novo usuário. Devem ser usados e-mail e senha para acesso ao sistema.

Os usuários deverão cadastrar-se no sistema, especificando os dados para contato (e-mail, telefone, etc.), dentre outras informações que você considere necessárias. 

Os usuários cadastrados poderão cadastrar produtos para venda e também vender produtos.


## Instalando dependências

Após o clone do repositório, executar o comando abaixo para carregar os modulos.

```
npm install
```

### Subindo o servidor e montando a aplicação para desenvolvimento

Dentro da pasta T-shirts, execute os dois comandos abaixo para subir o servidor na porta 5000 e iniciar a aplicação na porta 8080.

```
npm run serve
```

```
npm run server
```

### Produção

Após o desenvolvimento, executar o seguinte comando para enviar o software otimizado e minificado para produção.

```
npm run build
```

