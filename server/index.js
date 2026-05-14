import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT;

// clerk webhook
app.post('/clerk-whook', express.raw({ type: 'application/json' }), clerkWebhooks);

app.use(cors());
app.use(express.json());

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
    catch (err) {
        console.log(err);
    }
}

initConnections();