require('dotenv/config');
const express = require('express');
const applicationsRouter = require('./Routes/applicationsRouter');
const loginRouter = require('./Routes/loginRouter');
const { connectDb } = require('./DB/connection');
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());

//Routes
app.use('/applications', applicationsRouter);
app.use('/login',loginRouter);

app.listen(PORT, async()=> {
    connectDb();
    console.log(`App is Listening on http://localhost:${PORT}`)
});


