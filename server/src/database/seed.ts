import { User } from "../models/User"
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(async () => {
    const user = new User()
    
    user.firstName = "Leonardo"
    user.lastName = "Barros"
    user.email = "demo@company.com"
    user.password = 'password'
    
    await AppDataSource.manager.save(user)
    
    console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...")
    
    const users = await AppDataSource.manager.find(User)
    
    console.log("Loaded users: ", users)
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(err => console.error(err.message))
