import { palavras } from "./lib-words.js";

const button = document.querySelector('#submit');
if(button){
    button.addEventListener('click', mostrar);
}

function mostrar(){
    const texto = document.querySelector('#txt').value;
    const res = document.querySelector('#resultado'); 
    let teste = 0;
    for(let i = 0; i < palavras.length; i++){
        if(texto.toLowerCase().includes(palavras[i])){
            teste++;
        }
    }if(texto == ''){
        res.innerHTML = 'DIGITE UM TEXTO PARA SER ANALISADO!';
    }else{
        if(teste != 0){
            res.innerHTML = 'ESTE TEXTO CONTEM PALAVRAS OFENSIVAS!';
        }else{
            res.innerHTML = 'TEXTO VERIFICADO, LIVRE DE PALAVRAS OFESIVAS!';
        }
    }
}


