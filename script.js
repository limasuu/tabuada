const QUADRODIV= document.querySelector("#quadro");
const BOTOES= document.querySelectorAll("button");

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

BOTOES.forEach( botao => botao.addEventListener('click', () => {

    QUADRODIV.innerHTML= "";
    
    Array.from(BOTOES).filter(
        b1 => b1.classList.contains('clicado')
        ).forEach( 
            b2 => b2.classList.remove('clicado')
    );

    escreverTabuada(botao.innerText);
    botao.classList.add('clicado');
}));