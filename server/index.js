import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();
const PORT = process.env.PORT;

// clerk webhook
app.use('/clerk-whook', clerkWebhooks);

app.get('/', (_, res) => {
    res.send("API is working ...");
});

async function initConnections() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`App listening at ${PORT}`);
        });
    }
    catch(err){
        console.log(err);
    }
}

initConnections();