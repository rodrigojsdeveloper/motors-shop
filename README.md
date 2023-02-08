<p align="center">
<img src="https://img.shields.io/badge/react-18.2.0-blue">
<img src="https://img.shields.io/badge/node-18.11.17-blue">
</p>

# Motors Shop

A Motors shop é um site de vendas de carros, motos e de leilões por tempo limitado.

#### Links da aplicação:

Front-end: 
```
https://motors-shop-beta.vercel.app/
```

Back-end:
```
https://motors-shop-cx41.onrender.com/
```

--- 

## Instalação do Projeto

Projeto desenvolvido no backend com Node e no frontend com React.

### 1. Instalação das dependencias

Efetue a criação das dependências com `yarn` ou `npm install` nas pastas client e server.

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

ou

```
npm run dev
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
    "country": "United State",
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

ou

```
npm run dev
```

e abra o projeto no seu navegador

#### Link do projeto

```
http://localhost:5173
```

### 3. Iniciando todo o projeto no docker-compose

Na raiz do projeto rode o comando:

## Windows

```
docker-compose up -d
```

## Linux

```
sudo docker-compose up -d
```

a flag `-d` é para rodar o projeto em 'background' deixando o terminal livre para uso

### 4. Documentação

Com o projeto rodando acesse `http://localhost:3000/docs` ou `https://motors-shop-cx41.onrender.com/docs` para ver a documentação do projeto no swagger

## Desenvolvedor

<a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva">
  <img src="client/src/assets/icons8-linkedin-48.png" />
</a>
