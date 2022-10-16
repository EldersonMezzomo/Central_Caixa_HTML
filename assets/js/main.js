/*LÓGICA PARA BOTÕES: tentar implementar a lógica:
      Função BOTOES
        Se clicar BOTÃOVOLTAR
          chamar FUNÇÃO VOLTAR ou
        Se clicar BOTÃOAPP
          chamar EXIBIRAPP ou
        Se clicar BOTÃOAPP
          chamar EXIBIRAPP;
*/

/*BOTÃO VOLTAR*/
const btn__apps__voltar = document.getElementById("btn__voltar");
btn__apps__voltar.addEventListener("onclick", function() {
  history.go(-1);
});

/*BOTÃO APPS*/
const chamar__app = document.getElementById("btn__apps");
chamar__app.addEventListener("click", function() {
  if (document.querySelector('#btn__apps').classList.contains("cabecalho__menu__btn__apps--inativo")) {
    /*alterar cabeçalho menu secundário*/
    document.querySelector('#btn__apps').classList.remove("cabecalho__menu__btn__apps--inativo");
    document.querySelector('#btn__apps').classList.add("cabecalho__menu__btn__apps--ativo");
    document.querySelector('#btn__sites').classList.remove("cabecalho__menu__btn__sites--ativo");
    document.querySelector('#btn__sites').classList.add("cabecalho__menu__btn__sites--inativo");
    document.querySelector('#cabecalho__menu__inicio').classList.remove("cabecalho__menu__inicio--inativo");
    document.querySelector('#cabecalho__menu__inicio').classList.add("cabecalho__menu__inicio--ativo");
    document.querySelector('#cabecalho__menu__secundario__perfil').classList.remove("cabecalho__menu__secundario__perfil--ativo");
    document.querySelector('#cabecalho__menu__secundario__perfil').classList.add("cabecalho__menu__secundario__perfil--inativo");
    document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
    document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");
   
    /*alterar conteúdo principal*/
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
    
    /*adicionar ou remover botão voltar*/
    document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
    document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
  }});

/*BOTÃO SITES*/
const btn__sites__variavel = document.getElementById("btn__sites");

btn__sites__variavel.addEventListener("click", function() {
  if (document.querySelector('#btn__sites').classList.contains("cabecalho__menu__btn__sites--inativo")) {
    /*alterar cabeçalho menu secundário*/
    document.querySelector('#btn__apps').classList.remove("cabecalho__menu__btn__apps--ativo");
    document.querySelector('#btn__apps').classList.add("cabecalho__menu__btn__apps--inativo");
    document.querySelector('#btn__sites').classList.remove("cabecalho__menu__btn__sites--inativo");
    document.querySelector('#btn__sites').classList.add("cabecalho__menu__btn__sites--ativo");
    /*alterar conteúdo principal*/
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--ativo");
  }});

/*BOTÃO INICIO*/
const chamar__inicio = document.getElementById("btn__inicio");
chamar__inicio.addEventListener("click", function() {
  if (document.querySelector('#btn__inicio').classList.contains("btn__inicio--inativo")) {
    /*alterar cabeçalho menu secundário*/
    document.querySelector('#btn__apps').classList.remove("cabecalho__menu__btn__apps--inativo");
    document.querySelector('#btn__apps').classList.add("cabecalho__menu__btn__apps--ativo");
    document.querySelector('#btn__sites').classList.remove("cabecalho__menu__btn__sites--ativo");
    document.querySelector('#btn__sites').classList.add("cabecalho__menu__btn__sites--inativo");
    document.querySelector('#cabecalho__menu__inicio').classList.remove("cabecalho__menu__inicio--inativo");
    document.querySelector('#cabecalho__menu__inicio').classList.add("cabecalho__menu__inicio--ativo");
    document.querySelector('#cabecalho__menu__secundario__perfil').classList.remove("cabecalho__menu__secundario__perfil--ativo");
    document.querySelector('#cabecalho__menu__secundario__perfil').classList.add("cabecalho__menu__secundario__perfil--inativo");
    document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
    document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");

    /*alterar conteúdo principal*/
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
        
    /*adicionar ou remover botão voltar*/
    document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
    document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
  }});

/*BOTÃO PERFIL*/
const chamar__perfil = document.getElementById("btn__perfil");
chamar__perfil.addEventListener("click", function () {
  if (document.querySelector('#btn__perfil').classList.contains("btn__perfil--inativo")) {
        /*alterar cabeçalho menu secundário e menuDeNavegacao*/
        document.querySelector('#cabecalho__menu__inicio').classList.remove("cabecalho__menu__inicio--ativo");
        document.querySelector('#cabecalho__menu__inicio').classList.add("cabecalho__menu__inicio--inativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.remove("cabecalho__menu__secundario__perfil--inativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.add("cabecalho__menu__secundario__perfil--ativo");
        document.querySelector('#btn__perfil').classList.remove("btn__perfil--inativo");
        document.querySelector('#btn__perfil').classList.add("btn__perfil--ativo");
        
        /*alterar conteúdo principal*/
        document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
        document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");
        document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
        document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--ativo");
        
        /*adicionar ou remover botão voltar*/
        document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--inativo");
        document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--ativo");
      }});
      
    

/*BOTÃO PROCURAR*/

const btn__nav__procurar = document.getElementById("btn__procurar");

btn__nav__procurar.addEventListener("click", function() {
  if (document.querySelector('#btn__procurar').classList.contains("cabecalho__menu__btn__voltar--ativo")) {
    document.querySelector('#btn__procurar').classList.remove("cabecalho__menu__btn__voltar--ativo");
    document.querySelector('#btn__procurar').classList.add("cabecalho__menu__btn__voltar--inativo");
     
  } else {}
});

/*BOTÃO COMO USAR*/

const btn__nav__comoUsar = document.getElementById("btn__comoUsar");

btn__nav__comoUsar.addEventListener("click", function() {
  if (document.querySelector('#btn__comoUsar').classList.contains("cabecalho__menu__btn__voltar--ativo")) {
    document.querySelector('#btn__comoUsar').classList.remove("cabecalho__menu__btn__voltar--ativo");
    document.querySelector('#btn__comoUsar').classList.add("cabecalho__menu__btn__voltar--inativo");
     
  } else {}
});