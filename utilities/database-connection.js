const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

var connectToMongo = async function ()
{
    try 
    {
        if (mongoose.connection.readyState !== 1) 
        {
            console.log("Connecting to database")
            await mongoose.connect('mongodb+srv://aakriti-koul:TPeqC9ecM2QMIQEY@regression.gqhtt.mongodb.net/workflowregression?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, tlsInsecure: true });

            console.log("Connected to database");

        }

    }
    catch (error)
    {
        console.log('error in db connection', error);
    }
}; module.exports = connectToMongo;