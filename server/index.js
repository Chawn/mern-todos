import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import cors from 'cors' 
import todosRoutes from './routes/todos.js'

const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/todos', todosRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to server');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to mongodb');
    });
});
