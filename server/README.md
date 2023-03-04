# API desenvolvida com TypeORM e Express

Etapas para rodar a API

## Deploy
```
npm typeorm migration:run
npm start
```
ou use Docker compose
```
docker compose up
```

## Desenvolvimento
1. Clone o diretório e instale as dependências:
```
git clone https://github.com/LBarros77/agrodigital.git
npm install
```

2. Crie .env baseado no .env.example

3. Para rodar a aplicação você deve ter o banco de dados rodando.
```
service postgresql start
```
ou use o docker
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

4. Com o banco de dados rodando agora você pode rodar a aplicação (Server e mobile/web).
```
npm typeorm migration:run
npm run dev
```
