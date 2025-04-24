document.addEventListener('DOMContentLoadedDOM' , function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
    
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 })

       const  aumentafontbotao =  document.getElementById('aumentar-fonte');
       const  diminuifontebotao = document.getElementById('diminui-fonte');
   
       const alternaConstraste = document.getElementById ('alterna-contraste')

       let tamanhoatualfonte = 1;

aumentafontebotao.addEventListener('click', function(){
    tamanhoatualfonte += 0.1;
    document.body.style.fontSize = '${tamanhoatualfonte}rem'
})
diminuifontebotao.addEventListener('click', function(){
    tamanhoatualfonte -= 0.1;
    document.body.style.fontSize = '${tamanhoatualfonte}rem'

})



alternaConstraste.addEventListener('click', function(){
    document.body.classList.toggle ('alto-contraste')
})

})