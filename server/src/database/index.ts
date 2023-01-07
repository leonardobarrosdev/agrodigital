import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
  console.log('Data Source has been realized!')
}).catch(err => console.error(err.message));

export const getDataSource = (delay = 3000): Promise<AppDataSource> => {
  if(AppDataSource.isInitialized)
    return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(AppDataSource.isInitialized)
        resolve(AppDataSource);
      else reject('Failed to create connection with database');
    }, delay);
  });
}