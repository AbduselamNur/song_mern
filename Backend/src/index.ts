import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import songRoutes from './routes/songs';
import statsRoutes from './routes/stats';

const app = express();

app.use(cors({
    credentials: true,
})); 
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(3000, () => console.log('Server running on port 3000'));

const MONGO_URL = 'mongodb+srv://song:song@cluster0.1rtek1r.mongodb.net/'
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error) );
mongoose.connection.on('open', () => console.log('Connected to MongoDB') );

app.use('/api', songRoutes);
app.use('/api', statsRoutes);