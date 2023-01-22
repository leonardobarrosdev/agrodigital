# API instruções

Etapas para rodar a API

## Deploy
```
npm start
```
ou use Docker compose
```
docker compose up
```

## Desenvolvimento
1. Clone o diretório e instale as dependências.
```
git clone https://github.com/LBarros77/agrodigital.git
npm install
```

2. Crie .env baseado no .env.example

3. Para rodar a aplicação você deve ter o banco de dados rodando.
```
service postgresql start
```
ou use Docker
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```