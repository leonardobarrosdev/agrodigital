import mongoose from 'mongoose';

const connect = {
	mongoose.connect('mongodb+srv://leonardo:<password>@cluster0.ppniwty.mongodb.net/?retryWrites=true&w=majority')

	const connection = mongoose.connection;

	connection.on('error', () {
		console.error('Error to connection mongodb.');
	})

	connection.on('open', () {
		console.error('Connection to mongo with sucess')
	})
}

connect()

export mongoose;