<div align="center">
<h1>Motors Shop</h1>
<p>

Motors Shop é um projeto de site de vendas de automóveis.

</p>
</div>

---

## Instalação do Projeto

Projeto desenvolvido no backend com Node e no frontend com React.

### 1. Instalação das dependencias

Efetue a criação das dependências com `yarn` nas pastas client e server.

### 2. Configuração do .env

Crie o arquivo `.env` com base no arquivo `.env.example` na pasta server.

#### Se estiver no Linux, rode esse comando na pasta server

```
cp .env.example .env
```

### 3. Iniciando apenas client ou server do projeto no navegador ou insomnia

#### Powershell ou Bash

Acesse a pasta backend e rode o comando:

```
yarn dev
```

e rode uma requisição no insomnia

#### Exemplo de requisição - POST

```
{
  "name": "John doe",
  "email": "johndoe@org.com",
  "password": "Johndoe@123",
  "cellphone": "99 99999-9999",
  "address": {
    "state": "Califórnia",
    "city": "Mountain View",
    "district": "Amphitheatre Pkwy",
    "street": "Amphitheatre Pkwy",
    "number": 1600,
    "complement": "Googleplex",
    "zip_code": 94043
  },
  "cpf": "00000000000",
  "birthdate": "01/01/2001",
  "is_seller": true,
  "description": "Lorem Ipsum."
}
```

Acesse a pasta client e rode o comando:

```
yarn dev
```

e abra o projeto no seu navegador

#### Link do projeto

```
http://localhost:5173
```

### 3. Iniciando todo o projeto no docker-compose

Na raiz do projeto rode o comando:

### Windows

```
docker-compose up -d
```

### Linux

```
sudo docker-compose up -d
```

a flag `-d` é para rodar o projeto em 'background' deixando o terminal livre para uso

### 4. Documentação

Com o projeto rodando acesse `http://localhost:3000/api/docs` para ver a documentação

<br/>
<p align="center">Feito por <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a></p>
