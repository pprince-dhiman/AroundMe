import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import cors from "cors"
import { clerkMiddleware } from "@clerk/express"
import userRouter from "./routes/user.routes.js";
import orgRouter from "./routes/organization.route.js";
import hackathonRouter from "./routes/hackathon.route.js";
import workshopRouter from "./routes/workshop.route.js";
import culturalEventRouter from "./routes/culturalEvent.route.js";
import eventRouter from "./routes/event.route.js";

const app = express();
const PORT = process.env.PORT;

// clerk webhook (needs raw data)
app.post('/clerk-whook', express.raw({ type: 'application/json' }), clerkWebhooks);

app.use(cors());
app.use(express.json());

// attaches auth to req.
app.use(clerkMiddleware());

app.get('/', (_, res) => {
    res.send("API is working ...");
});

// all routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/orgs', orgRouter);
app.use('/api/v1/orgs/:orgId/hackathons', hackathonRouter);
app.use('/api/v1/orgs/:orgId/workshops', workshopRouter);
app.use('/api/v1/orgs/:orgId/culturalEvents', culturalEventRouter);

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