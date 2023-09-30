<div align="center">
<h1>Motors Shop</h1>
<p>Motors Shop é um projeto de site de vendas de automóveis.</p>
</div>
<br/>

## Clonando o Repositório

Você pode clonar este repositório usando o seguinte comando:

```
git clone https://github.com/rodrigojsdeveloper/motors-shop.git
```

## Gerenciador de Pacotes

Este projeto utiliza o Yarn como gerenciador de pacotes. Certifique-se de tê-lo instalado antes de prosseguir. Se ainda não o possui, você pode baixá-lo <a href="https://classic.yarnpkg.com/lang/en/docs/install">aqui</a>.

### Aviso:

Embora o Yarn seja o gerenciador de pacotes recomendado, você também pode usar o NPM executando os seguintes comandos:

- Para instalar as dependências: npm install
- Para iniciar o Motors Shop: npm run dev

## Instalação das Dependências

Execute a instalação das dependências executando `yarn` nas pastas "client" e "server".

## Configuração do .env

Crie um arquivo `.env` com base no arquivo `.env.example` na pasta "server".

#### Para sistemas Linux, você pode usar o seguinte comando:

```
cp .env.example .env
```

## Iniciando o Projeto

Iniciando o Backend (Server)

No diretório "server" execute o seguinte comando:

```
yarn dev
```

Em seguida, faça uma requisição usando o Insomnia ou outra ferramenta similar.

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

Iniciando o Frontend (Client)

No diretório "client" execute o seguinte comando:

```
yarn dev
```

Em seguida, abra o projeto em seu navegador.

Acesse o projeto em:

#### Link do projeto

```
http://localhost:5173
```

## Iniciando o Projeto no Docker-Compose

Primeiro, navegue até a pasta "server" e edite o arquivo .env da seguinte forma:

```
POSTGRES_HOST=localhost

POSTGRES_HOST=postgres
```

Agora na raiz do projeto rode o comando:

### Para Windows

```
docker-compose up -d
```

### Para Linux

```
sudo docker-compose up -d
```

A flag -d executa o projeto em segundo plano, liberando o terminal para outros usos.

## Documentação

Com o projeto em execução, acesse http://localhost:3000/api/docs para visualizar a documentação.

<br/>
<p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a></p>
