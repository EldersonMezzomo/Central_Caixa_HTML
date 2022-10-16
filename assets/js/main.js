/*FUNCIONOU PARA REDIRECIONAR: TESTAR ABRIR APP
<script>
        window.location.replace("caixa://home/"); setTimeout(function () {
        window.location.replace("https://play.google.com/store/apps/details?id=br.gov.caixa.tem"); }, 2000);
    </script>

    const abrirApp = document.getElementById("abrirApp");
  abrirApp.addEventListener("click", function() {window.location.replace("caixa://home/"); setTimeout(function () {window.location.replace("https://play.google.com/store/apps/details?id=br.gov.caixa.tem"); }, 2000);});

*/

/*LÓGICA PARA BOTÕES: tentar implementar a lógica:
      Função BOTOES
        Se clicar BOTÃOVOLTAR
          chamar FUNÇÃO VOLTAR ou
        Se clicar BOTÃOAPP
          chamar EXIBIRAPP ou
        Se clicar BOTÃOAPP
          chamar EXIBIRAPP;

          history.go(-1);
*/

/*BOTÃO VOLTAR
para funcionar corretamente, é necessário que hajam várias páginas.
No momento, tem apenas uma página HTML no projeto

const btn__voltar = document.getElementById("btn__voltar");
  btn__voltar.addEventListener("onclick", function() {
    document.history.back();
});

<input type='button' value='Voltar' onclick='history.go(-1)'/>

function goBack() {
    window.history.back()
}

<html>
<body>
    <form> 
        <input type="button" value="Voltar" onClick="history.go(-1)"> 
        <input type="button" value="Avançar" onCLick="history.forward()"> 
        <input type="button" value="Atualizar" onClick="history.go(0)"> 
    </form>
    </body> 
</html>
*/

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
    document.querySelector('#cabecalho__menu__secundario__procurar').classList.remove("cabecalho__menu__secundario__procurar--ativo");
    document.querySelector('#cabecalho__menu__secundario__procurar').classList.add("cabecalho__menu__secundario__procurar--inativo");
    document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.remove("cabecalho__menu__secundario__comoUsar--ativo");
    document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.add("cabecalho__menu__secundario__comoUsar--inativo");
    document.querySelector('#btn__inicio').classList.remove("btn__inicio--inativo");
    document.querySelector('#btn__inicio').classList.add("btn__inicio--ativo");
    document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
    document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");
    document.querySelector('#btn__procurar').classList.remove("btn__procurar--ativo");
    document.querySelector('#btn__procurar').classList.add("btn__procurar--inativo");
    document.querySelector('#btn__comoUsar').classList.remove("btn__comoUsar--ativo");
    document.querySelector('#btn__comoUsar').classList.add("btn__comoUsar--inativo");

    /*alterar conteúdo principal*/
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
    document.querySelector('#conteudoPrincipal__procurar').classList.remove("conteudoPrincipal__procurar--ativo");
    document.querySelector('#conteudoPrincipal__procurar').classList.add("conteudoPrincipal__procurar--inativo");
    document.querySelector('#conteudoPrincipal__comoUsar').classList.remove("conteudoPrincipal__comoUsar--ativo");
    document.querySelector('#conteudoPrincipal__comoUsar').classList.add("conteudoPrincipal__comoUsar--inativo");
        
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
    document.querySelector('#cabecalho__menu__secundario__procurar').classList.remove("cabecalho__menu__secundario__procurar--ativo");
    document.querySelector('#cabecalho__menu__secundario__procurar').classList.add("cabecalho__menu__secundario__procurar--inativo");
    document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.remove("cabecalho__menu__secundario__comoUsar--ativo");
    document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.add("cabecalho__menu__secundario__comoUsar--inativo");
    document.querySelector('#btn__inicio').classList.remove("btn__inicio--inativo");
    document.querySelector('#btn__inicio').classList.add("btn__inicio--ativo");
    document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
    document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");
    document.querySelector('#btn__procurar').classList.remove("btn__procurar--ativo");
    document.querySelector('#btn__procurar').classList.add("btn__procurar--inativo");
    document.querySelector('#btn__comoUsar').classList.remove("btn__comoUsar--ativo");
    document.querySelector('#btn__comoUsar').classList.add("btn__comoUsar--inativo");

    /*alterar conteúdo principal*/
    document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--inativo");
    document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
    document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
    document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
    document.querySelector('#conteudoPrincipal__procurar').classList.remove("conteudoPrincipal__procurar--ativo");
    document.querySelector('#conteudoPrincipal__procurar').classList.add("conteudoPrincipal__procurar--inativo");
    document.querySelector('#conteudoPrincipal__comoUsar').classList.remove("conteudoPrincipal__comoUsar--ativo");
    document.querySelector('#conteudoPrincipal__comoUsar').classList.add("conteudoPrincipal__comoUsar--inativo");
        
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
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.remove("cabecalho__menu__secundario__procurar--ativo");
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.add("cabecalho__menu__secundario__procurar--inativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.remove("cabecalho__menu__secundario__comoUsar--ativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.add("cabecalho__menu__secundario__comoUsar--inativo");
        document.querySelector('#btn__inicio').classList.remove("btn__inicio--ativo");
        document.querySelector('#btn__inicio').classList.add("btn__inicio--inativo");
        document.querySelector('#btn__perfil').classList.remove("btn__perfil--inativo");
        document.querySelector('#btn__perfil').classList.add("btn__perfil--ativo");
        document.querySelector('#btn__procurar').classList.remove("btn__procurar--ativo");
        document.querySelector('#btn__procurar').classList.add("btn__procurar--inativo");
        document.querySelector('#btn__comoUsar').classList.remove("btn__comoUsar--ativo");
        document.querySelector('#btn__comoUsar').classList.add("btn__comoUsar--inativo");
        
        /*alterar conteúdo principal*/
        document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
        document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");
        document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
        document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--ativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.remove("conteudoPrincipal__procurar--ativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.add("conteudoPrincipal__procurar--inativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.remove("conteudoPrincipal__comoUsar--ativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.add("conteudoPrincipal__comoUsar--inativo");
                
        /*adicionar ou remover botão voltar*/
        document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
        document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
      }});
      
/*BOTÃO PROCURAR*/
const chamar__procurar = document.getElementById("btn__procurar");
chamar__procurar.addEventListener("click", function () {
  if (document.querySelector('#btn__procurar').classList.contains("btn__procurar--inativo")) {
        /*alterar cabeçalho menu secundário e menuDeNavegacao*/
        document.querySelector('#cabecalho__menu__inicio').classList.remove("cabecalho__menu__inicio--ativo");
        document.querySelector('#cabecalho__menu__inicio').classList.add("cabecalho__menu__inicio--inativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.remove("cabecalho__menu__secundario__perfil--ativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.add("cabecalho__menu__secundario__perfil--inativo");
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.remove("cabecalho__menu__secundario__procurar--inativo");
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.add("cabecalho__menu__secundario__procurar--ativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.remove("cabecalho__menu__secundario__comoUsar--ativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.add("cabecalho__menu__secundario__comoUsar--inativo");
        document.querySelector('#btn__inicio').classList.remove("btn__inicio--ativo");
        document.querySelector('#btn__inicio').classList.add("btn__inicio--inativo");
        document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
        document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");
        document.querySelector('#btn__procurar').classList.remove("btn__procurar--inativo");
        document.querySelector('#btn__procurar').classList.add("btn__procurar--ativo");
        document.querySelector('#btn__comoUsar').classList.remove("btn__comoUsar--ativo");
        document.querySelector('#btn__comoUsar').classList.add("btn__comoUsar--inativo");
        
        /*alterar conteúdo principal*/
        document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
        document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");
        document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
        document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.remove("conteudoPrincipal__procurar--inativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.add("conteudoPrincipal__procurar--ativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.remove("conteudoPrincipal__comoUsar--ativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.add("conteudoPrincipal__comoUsar--inativo");
        
        /*adicionar ou remover botão voltar*/
        document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
        document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
      }});


/*BOTÃO COMO USAR*/
const chamar__comoUsar = document.getElementById("btn__comoUsar");
chamar__comoUsar.addEventListener("click", function () {
  if (document.querySelector('#btn__comoUsar').classList.contains("btn__comoUsar--inativo")) {
        /*alterar cabeçalho menu secundário e menuDeNavegacao*/
        document.querySelector('#cabecalho__menu__inicio').classList.remove("cabecalho__menu__inicio--ativo");
        document.querySelector('#cabecalho__menu__inicio').classList.add("cabecalho__menu__inicio--inativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.remove("cabecalho__menu__secundario__perfil--ativo");
        document.querySelector('#cabecalho__menu__secundario__perfil').classList.add("cabecalho__menu__secundario__perfil--inativo");
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.remove("cabecalho__menu__secundario__procurar--ativo");
        document.querySelector('#cabecalho__menu__secundario__procurar').classList.add("cabecalho__menu__secundario__procurar--inativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.remove("cabecalho__menu__secundario__comoUsar--inativo");
        document.querySelector('#cabecalho__menu__secundario__comoUsar').classList.add("cabecalho__menu__secundario__comoUsar--ativo");
        document.querySelector('#btn__inicio').classList.remove("btn__inicio--ativo");
        document.querySelector('#btn__inicio').classList.add("btn__inicio--inativo");
        document.querySelector('#btn__perfil').classList.remove("btn__perfil--ativo");
        document.querySelector('#btn__perfil').classList.add("btn__perfil--inativo");
        document.querySelector('#btn__procurar').classList.remove("btn__procurar--ativo");
        document.querySelector('#btn__procurar').classList.add("btn__procurar--inativo");
        document.querySelector('#btn__comoUsar').classList.remove("btn__comoUsar--inativo");
        document.querySelector('#btn__comoUsar').classList.add("btn__comoUsar--ativo");
        
        /*alterar conteúdo principal*/
        document.querySelector('#conteudoPrincipal__apps').classList.remove("conteudoPrincipal__apps--ativo");
        document.querySelector('#conteudoPrincipal__apps').classList.add("conteudoPrincipal__apps--inativo");
        document.querySelector('#conteudoPrincipal__sites').classList.remove("conteudoPrincipal__sites--ativo");
        document.querySelector('#conteudoPrincipal__sites').classList.add("conteudoPrincipal__sites--inativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.remove("conteudoPrincipal__perfil--ativo");
        document.querySelector('#conteudoPrincipal__perfil').classList.add("conteudoPrincipal__perfil--inativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.remove("conteudoPrincipal__procurar--ativo");
        document.querySelector('#conteudoPrincipal__procurar').classList.add("conteudoPrincipal__procurar--inativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.remove("conteudoPrincipal__comoUsar--inativo");
        document.querySelector('#conteudoPrincipal__comoUsar').classList.add("conteudoPrincipal__comoUsar--ativo");
        
        /*adicionar ou remover botão voltar*/
        document.querySelector('#btn__voltar').classList.remove("cabecalho__menu__btn__voltar--ativo");
        document.querySelector('#btn__voltar').classList.add("cabecalho__menu__btn__voltar--inativo");
      }});

