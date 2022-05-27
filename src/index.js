import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import endpoints from './endpoints.js'


const server = express();

server.use(cors());

server.use(express.json());

server.use(endpoints);


server.listen(process.env.PORT, 
                () => console.log(` API ONLINE NA PORTA ${process.env.PORT}`));

//Claudia Nissara n°8
//Danilo Oliveira n°9
//Vitoria Alejandra n°48