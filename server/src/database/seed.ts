import { AppDataSource } from "./data-source"
import { User } from "../models/User"

AppDataSource.initialize().then(async () => {
    const user = new User()
    
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.email = "demo@company.com"
    
    await AppDataSource.manager.save(user)
    
    console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...")
    
    const users = await AppDataSource.manager.find(User)
    
    console.log("Loaded users: ", users)
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))