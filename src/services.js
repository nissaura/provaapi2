

export function Semaforo (cor){

    let msg ="";

    if(cor == "verde")
    {
        msg= "Passe";
    }
    
   
    return msg;
}


export function DiaSemana (dia)
{
    let msg="";

    if (dia == 0)
    {
        msg = "domingo";
    }
    else if (dia == 1)
    {
        msg = "segunda";
    }
    else if (dia == 2)
    {
        msg = "terça";
    }
    else if (dia == 3)
    {
        msg = "quarta";
    }
    else if (dia == 4)
    {
        msg = "quinta";
    }
    else if (dia == 5)
    {
        msg = "sexta";
    }
    else if (dia == 6)
    {
        msg = "sabado";
    }
    else
    {
        msg = "invalido";
    }
    return msg
}

export function Fatorial (numero)
{
    let a = 1;

    for (let i = numero; i > 1; i--) {
        
        a *= i;
    }
    return a;
}

export function sequenciaPar(limite)
    {
            let x = []
            let num = 0

            for(let i = 0; i <= limite ; i++) {
                x[i] = num * 2
                num++
            }
            return x;
    }


//Claudia Nissara n°8
//Danilo Oliveira n°9
//Vitoria Alejandra n°48