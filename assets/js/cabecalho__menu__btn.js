/*BOTÃO VOLTAR*/
const btn__apps__voltar = document.getElementById("btn__voltar");

btn__apps__voltar.addEventListener("click", function() {
  if (document.querySelector('#btn__voltar').classList.contains("cabecalho__menu__btn__voltar--ativo")) {
    document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
    document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
     
  } else {}
});


/*BOTÃO APPS*/
const btn__apps__variavel = document.getElementById("btn__apps");

btn__apps__variavel.addEventListener("click", function() {
  if (document.querySelector('#btn__apps').classList.contains("cabecalho__menu__btn__apps--inativo")) {
    document.querySelector('#btn__apps').classList.remove("cabecalho__menu__btn__apps--inativo");
    document.querySelector('#btn__apps').classList.add("cabecalho__menu__btn__apps--ativo");
    document.querySelector('#btn__sites').classList.remove("cabecalho__menu__btn__sites--ativo");
    document.querySelector('#btn__sites').classList.add("cabecalho__menu__btn__sites--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
  
  } else {}
});

/*BOTÃO SITES*/
const btn__sites__variavel = document.getElementById("btn__sites");

btn__sites__variavel.addEventListener("click", function() {
  if (document.querySelector('#btn__sites').classList.contains("cabecalho__menu__btn__sites--inativo")) {
    document.querySelector('#btn__sites').classList.remove("cabecalho__menu__btn__sites--inativo");
    document.querySelector('#btn__sites').classList.add("cabecalho__menu__btn__sites--ativo");
    document.querySelector('#btn__apps').classList.remove("cabecalho__menu__btn__apps--ativo");
    document.querySelector('#btn__apps').classList.add("cabecalho__menu__btn__apps--inativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");

  } else {}
});

 /*.conteudo_principal .conteudo_principal_apps:nth-child(1) {
        grid-column: 1/2;
        grid-row: 1/2;
 }*/