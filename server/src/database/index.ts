import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
  console.log('Data Source has been realized!')
}).catch(err => console.error(err.message));

export default AppDataSource;