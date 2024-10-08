import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000  // default port is 8000 if env dint give port

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port: http://localhost:${PORT}`);
        })

        await connectDB()
            .then(() => {
                console.log("Database is running with server");
            })
            .catch((err) => {
                console.log("Database is failed to run with server");
            })

    } catch (error) {
        console.log("Failed to start server veriy it!");
    }
}

startServer()