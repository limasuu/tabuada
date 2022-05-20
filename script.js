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
                return () => vet.map(y => [`${y}+${x}`,  y+x]);
            case OPERACOES[1]: 
                return () => vet.map(y => [`${y+x}-${x}`, y]);
            case OPERACOES[2]: 
                return () => vet.map(y => [`${y}&#215;${x}`, y*x]);
            case OPERACOES[3]: 
                return () => vet.map(y => [`${y*x}&#247;${x}`, y]);
            default:
                return undefined;
        }        
    };
};

const escreverTabuada= operacao => {

    const tabuada= calcularTabuada(operacao);

    for(let i=1; i<=10; i++){

        const tabuada_i= tabuada(i)();

        const TABUADA_IDIV= document.createElement('div');
        QUADRODIV.appendChild(TABUADA_IDIV);
        TABUADA_IDIV.classList.add('tabuada-i');
        
        for(let conta of tabuada_i){
            const LINHATABUADA= document.createElement('div');
            TABUADA_IDIV.appendChild(LINHATABUADA);
            LINHATABUADA.classList.add('linha-tabuada-i');

            LINHATABUADA.innerHTML= conta[0] + "= " + conta[1];
        }
    }
};


ADICAOBUTTON.addEventListener('click', () => escreverTabuada(ADICAOBUTTON.innerText));
SUBTRACAOBUTTON.addEventListener('click', () => escreverTabuada(SUBTRACAOBUTTON.innerText));
MULTIPLICACAOBUTTON.addEventListener('click', () => escreverTabuada(MULTIPLICACAOBUTTON.innerText));
DIVISAOBUTTON.addEventListener('click', () => escreverTabuada(DIVISAOBUTTON.innerText));
