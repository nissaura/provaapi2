import { Semaforo, DiaSemana} from './services.js'
 

import { Router } from 'express';


const server = Router();



server.get('/Semaforo/:cor', (req, resp) => {
   let cor = req.params.cor
   let s = Semaforo(cor) 
    resp.send ({
        Semaforo: s
    })  
})

server.get('/DiaSemana/:dia', (req, resp) => {
    let dia = req.params.dia
    let d = DiaSemana(dia)
    resp.send({
        DiaSemana: d
    })
})





























export default server;

//Claudia Nissara n°8
//Danilo Oliveira n°9
//Vitoria Alejandra n°48