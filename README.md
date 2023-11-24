# Dindin

### Linguagens e Ferramentas:
- Node.js
- Express
- bcrypt
- jsonwebtoken
- dotenv
- joi
- knex

Persistência de dados: Postgres

### Endpoints:
  - Usuário
    - GET/usuario - Detalhar usuário logado -> HTTP 200
    - POST/usuario - Cadastrar usuário -> HTTP 201 
    - PUT/usuario - Editar usuário logado -> HTTP 204
    - DELETE/usuario - Deletar usuário logado -> HTTP 204
      ![image](https://github.com/yasmimfos/Dindin/assets/139164469/10617aee-9b95-427e-889f-a60806ffe49a) 
    
      (caso informe um email que já foi cadastrado apresenta mensagem de erro HTTP 403)

  - Post
    - POST/login - efetuar login -> HTTP 200
  - Saldo
    - GET/saldo - Consultar saldo -> HTTP 200
    - POST/saldo - Cadastrar saldo -> HTTP 201
    - PUT/saldo - Editar saldo -> HTTP 200
      ![image](https://github.com/yasmimfos/Dindin/assets/139164469/04d4e590-4bbe-4873-abeb-263ec2b6fcf4) 

      (informa o novo saldo e sugere contas que possam ser pagas a partir do valor que ainda há no saldo)

  - Categoria
    - GET/categoria - Listar categorias cadastradas -> HTTP 200
    - GET/categoria{query: categoria} - Lista transações da categoria pesquisada -> HTTP 200
    - POST/categoria - Cadastrar categoria -> HTTP 200
    - PUT/categoria/{id} - Editar categoria -> HTTP 200
    - DELETE/categoria/{id} - Deletar categoria -> HTTP 200
      ![image](https://github.com/yasmimfos/Dindin/assets/139164469/a6e66a1b-d4ef-48af-8281-6655fbc33335)

  - Transações
    - GET/transacoes - Listar transações -> HTTP 200
    - GET/transacoes/{id} - Detalhar transação -> HTTP 200
    - POST/transacoes - Cadastrar transação -> HTTP 201
    - PUT/transacoes/{id} - Editar transação -> HTTP 200
    - DELETE/transacoes - Deletar transação -> HTTP 204
    - GET/transacoes/extrato - Extrato das entradas e saídas totais, pendentes e confirmadas -> HTTP 200
    ![image](https://github.com/yasmimfos/Dindin/assets/139164469/38d287b5-55e7-4fd2-9fbb-7d3d247b820f)
    - PUT/transacoes/confirmar/{id} - confirmar a previsão da transação -> HTTP 200
![image](https://github.com/yasmimfos/Dindin/assets/139164469/8fddf9a7-c142-4bc6-a69e-13222563c722)
(Caso tente confirmar uma transação que já foi confirmada, apresenta erro HTTP 403)

   
### Rodando a API
       npm run dev

### Contribuições
  Caso queira contibuir com o projeto:
  -  Realize o fork
  -  Desenvolva as contribuições
  - Realize a PR

### Autora: yasmimfos
  contato: yasmimoliveira.ad@gmail.com
