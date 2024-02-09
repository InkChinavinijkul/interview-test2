import { Db, MongoClient } from "mongodb"
// import { quotes } from "./quotes"

const MONGODB_URI =
	"mongodb+srv://cchinavinijkul:VHm9CWrXn7YJrkR5@ssandc.ldmwot3.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_NAME = "interview"

export let database
// : {
// 	dbClient: MongoClient,
// 	dbHandle: Db,
// }

export async function connectToMongoDB() {
	try {
		database = new MongoClient(MONGODB_URI)

		// const dbClient = await MongoClient.connect(MONGODB_URI)
		console.log("Successfully connected to server " + MONGODB_URI)
		// database = {
		// 	dbClient,
		// 	dbHandle: dbClient.db(DATABASE_NAME),
		// }

		// return this to access the connection
		// probably really bad since you have to connect to it
		// during every api call
		// when do you close it????
		return await database.connect()

		// create database and collection from quotes.ts
		// i got an E11000 duplicate key error collection from running this...
		// so i just create the database once and left it like that
		// const db = database.dbHandle
		// const pricesCollection = db.collection("prices")
		// await createCollection(pricesCollection, quotes)
	} catch (error) {
		console.log("Error creating database connection: " + error)
		throw error
	}
}

export async function createCollection(collection, data) {
	await collection.insertMany(data)
}

// ran into import module import issues so i just placed it here
const quotes = [
	{
		symbol: "SSNC",
		companyName: "SS&C Technologies Holdings Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 56.15,
		priceDate: "2018-08-20T00:00:00.000Z",
	},
	{
		symbol: "AAPL",
		companyName: "Apple Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 215.46,
		priceDate: "2018-08-20T00:00:00.000Z",
	},
	{
		symbol: "GOOGL",
		companyName: "Alphabet Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 1221.95,
		priceDate: "2018-08-20T00:00:00.000Z",
	},
	{
		symbol: "MSFT",
		companyName: "Microsoft Corporation",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 106.87,
		priceDate: "2018-08-20T00:00:00.000Z",
	},
	{
		symbol: "SSNC",
		companyName: "SS&C Technologies Holdings Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 55.85,
		priceDate: "2018-08-21T00:00:00.000Z",
	},
	{
		symbol: "AAPL",
		companyName: "Apple Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 214.16,
		priceDate: "2018-08-21T00:00:00.000Z",
	},
	{
		symbol: "GOOGL",
		companyName: "Alphabet Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 1220.07,
		priceDate: "2018-08-21T00:00:00.000Z",
	},
	{
		symbol: "MSFT",
		companyName: "Microsoft Corporation",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 107.99,
		priceDate: "2018-08-21T00:00:00.000Z",
	},
	{
		symbol: "SSNC",
		companyName: "SS&C Technologies Holdings Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 57.84,
		priceDate: "2018-08-22T00:00:00.000Z",
	},
	{
		symbol: "AAPL",
		companyName: "Apple Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 216.64,
		priceDate: "2018-08-22T00:00:00.000Z",
	},
	{
		symbol: "GOOGL",
		companyName: "Alphabet Inc.",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 1220.63,
		priceDate: "2018-08-22T00:00:00.000Z",
	},
	{
		symbol: "MSFT",
		companyName: "Microsoft Corporation",
		primaryExchange: "Nasdaq Global Select",
		sector: "Technology",
		price: 108.71,
		priceDate: "2018-08-22T00:00:00.000Z",
	},
]
