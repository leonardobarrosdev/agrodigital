# Agro Digital
Aplicativo e-commerce voltado para agricultura familiar
Modelo C to C

## Funcionalidades
- Autentficação com Google (Login/Logout)
- Chat


## Deploy

#### server
```
npm typeorm migration:run
npm run dev
```
#### web
```
npm start
```
#### mobile
```
npx expo start
```

## Development
Clone the directory and install dependencies:
```
git clone ...
npm install
```

Para rodar a aplicação você deve ter o banco de dados rodando.
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Crie server/.env baseado no server/.env.example e edite DATABASE_URL.
```
service postgresql start
```

## Tech stack
- React, React Native, Expo, Next, Axios e React-dom
- NodeJS e Typescript
- Postgres

