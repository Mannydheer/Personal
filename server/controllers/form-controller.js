'use strict';

//MONGODB
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mannyUser:nIeWVt6j08RG0eAU@cluster0-ni6r0.mongodb.net/test?retryWrites=true&w=majority"



const dbName = 'Website';
const collection = 'Contacts'
const assert = require('assert')


const handleInformation = async (req, res) => {


    let contactInfo = req.body
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    //connect to db
    client.connect(async (err) => {
        if (err) throw { Error: err, message: "error occured connected to DB" }
        console.log("Connected to DB in handleInformation")
        try {
            const db = client.db(dbName)
            let r = await db.collection(collection).insertOne(contactInfo)
            assert(1, r.insertedCount)
            res.status(200).json({ status: 200, message: "Thank you! I'll be in touch soon." })
        }
        catch (error) {
            console.log(error.stack, 'Catch Error in handleInformation')
            res.status(500).json({ status: 500, message: error.message })
        }
        finally {
            console.log('disconnected')
            client.close();
        }
    })
}

module.exports = { handleInformation }