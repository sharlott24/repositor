document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
const opçoesDeAcessibilidade=document.getElementById('opçoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click',function(){
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opçoesDeAcessibilidade.classList.toggle('apresenta-lista');


const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado);

})

const aumentFonteBotao=document.getElementById('aumentar-fonte');
const diminuiFonteBotao=document.getElementById('diminuir-fonte');

const alternaContraste=document.getElementById('alterna-contraste')

let tamanhoAtualFonte=1;

aumentFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte+=0.1;
document.body.style.fontSize='${tamanhoAtualFonte}rem'

})

diminuiFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte-=0.1;
document.body.style.fontSize='$(tamanhoAtualFonte)rem'

})

alternaContraste.addEventListener('click',function(){

    document.body.classList.toggle('alto-contraste')
})

}) 


ScrollReveal().reveal('#inicio',{delay:500});
ScrollReveal().reveal('#tropicalia',{delay:500});
ScrollReveal().reveal('#galeria',{delay:500});
ScrollReveal().reveal('#contato',{delau:500});