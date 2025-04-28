import express from 'express';
import visitorRoutes from '../src/routes/visitor.routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({ 
    origin: "http://localhost:3000" ,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', visitorRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));