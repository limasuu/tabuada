const QUADRODIV= document.querySelector("#quadro");
const ADICAOBUTTON= document.querySelector("#adicao");
const SUBTRACAOBUTTON= document.querySelector("#subtracao");
const MULTIPLICACAOBUTTON= document.querySelector("#multiplicacao");
const DIVISAOBUTTON= document.querySelector("#divisao");

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



ADICAOBUTTON.addEventListener('click', () => {

    const tabuadaAdicao= calcularTabuada("ADIÇÃO");

    for(let i=1; i<=10; i++){

        const tabuada_i= tabuadaAdicao(i)();

        const novaDiv= document.createElement('div');
        QUADRODIV.appendChild(novaDiv);
        novaDiv.classList.add('tabuada-i');
        

        for(let conta of tabuada_i){
            const novaLinha= document.createElement('div');
            novaDiv.appendChild(novaLinha);
            novaLinha.classList.add('linha-tabuada-i');

            novaLinha.innerHTML= conta[0] + "= " + conta[1];
        }
    }
});
