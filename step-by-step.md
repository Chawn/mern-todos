create folder client
create folder server

cd client
npx create-react-app 

cd server
npm install cors express mongoose nodemon dotenv

create server/index.js
```javascript
import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import cors from 'cors' 
const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
```

server/package.json add..
```json
"type": "module"
```