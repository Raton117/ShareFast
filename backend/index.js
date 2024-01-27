import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import connectDB from './database/db.js';
const app = express();

app.use(cors());
app.use('/', router); // add router in the Express app
const port = 5000;
connectDB();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
