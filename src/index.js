import axios from "axios"
// const express = require("express")
import express from "express"
import { connectToMongoDB } from "./database.js"
const app = express()
const PORT = process.env.PORT || 3000

let mongoClient

const MONGODB_URI =
	"mongodb+srv://cchinavinijkul:VHm9CWrXn7YJrkR5@ssandc.ldmwot3.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_NAME = "interview"

// Define routes
app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/prices", async (req, res) => {
	try {
		mongoClient = await connectToMongoDB(MONGODB_URI)
		const db = mongoClient.db("interview")
		const collection = db.collection("prices")
		const result = await collection.find().toArray()
		res.send(result)
	} catch (error) {
		throw new Error(error)
	} finally {
		await mongoClient.close()
	}
})

app.get("/averagePrices", async (req, res) => {
	try {
		mongoClient = await connectToMongoDB(MONGODB_URI)
		const db = mongoClient.db("interview")
		const collection = db.collection("prices")
		const result = await collection
			.aggregate([
				{
					$group: {
						_id: "$symbol",
						averagePrice: { $avg: "$price" },
					},
				},
			])
			.toArray()

		// const enchanced = result.map(async (item) => {
		// 	const fetchedData = await axios.get(
		// 		`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${item.symbol}`
		// 	)
		// 	const currentQuote = fetchedData.data

		// 	return { ...item, currentPrice: currentQuote.regularMarketPrice }
		// })

		res.json(result)
		// res.json(enchanced)
	} catch (error) {
		throw new Error(error)
	} finally {
		await mongoClient.close()
	}
})

async function init() {
	await connectToMongoDB()
	app.listen(3000)
	console.log(`Listening on port 3000`)
}

init()

// // Start server
// app.listen(PORT, async () => {
// 	await connectToMongoDB()
// 	console.log(`Server is running on port ${PORT}`)
// })
