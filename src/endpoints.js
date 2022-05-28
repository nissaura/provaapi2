import { Semaforo, DiaSemana, Fatorial, sequenciaPar} from './services.js'
 

import { Router } from 'express';


const server = Router();



server.get('/Semaforo/:cor', (req, resp) => {
    try{
        let cor = req.params.cor
        let s = Semaforo(cor) 
        resp.send ({
            Semaforo: s
        })
    }
    catch(err)
    {
        resp.send({
            erro: err.message
        })
    }      
})

server.get('/DiaSemana/:dia', (req, resp) => {
    try{
        let dia = req.params.dia
        let d = DiaSemana(dia)
        resp.send({
            DiaSemana: d
        })
    }
    catch(err)
    {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/Fatorial', (req, resp) => {
    try{
        let numero = req.body.numero
        let f = Fatorial (numero)
        resp.send({
            Fatorial: f
        })
    }
    catch(err)
    {
        resp.send({
            erro: err.message
        })
    }    
})

server.post('/sequenciaPar', (req, resp) =>{
    try{
        const a = req.body.a
        const x = sequenciaPar(a)
        resp.send ({
            sequencia : x
        })
    }
    catch(err)
    {
        resp.send({
            erro: err.message
        })
    }    
} )

























export default server;

//Claudia Nissara n°8
//Danilo Oliveira n°9
//Vitoria Alejandra n°48