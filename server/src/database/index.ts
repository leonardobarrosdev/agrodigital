import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log('Sucess Full connection realized.!')
}).catch(err => console.error(err.message));