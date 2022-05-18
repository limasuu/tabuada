
const calcularTabuada= op => {
    
    return x => {

        const OPERACOES= ["ADIÇÃO", "SUBTRAÇÃO", "MULTIPLICAÇÃO", "DIVISÃO"]; 
        
        const vet=[];
        for(let i=1; i<=10; i++)
            vet.push(i);
        
        switch(op){
            case OPERACOES[0]: 
                return () => vet.map(y => y+x);
            case OPERACOES[1]: 
                return () => vet.map(y => y-x);
            case OPERACOES[2]: 
                return () => vet.map(y => y*x);
            case OPERACOES[3]: 
                return () => vet.map(y => y/x);
            default:
                return undefined;
        }        
    };
};
