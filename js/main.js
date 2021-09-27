var nome = "Dell Silva";
/*var idade = 39;
var frase = "Japão é o melhor time do mundo!";
alert("Bem vindo " + nome);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Bahia"));
alert(frase.replace("Japão", "Bahia"));
console.log(frase.toUpperCase());
var lista = ["Umbu", "Jambo", "Carambola"];
console.log(lista[1]);
console.log(lista);
lista.push("seriguela");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var frutas = {nome:"manga",cor:"verde"};
console.log(frutas);

var frutas = [{nome:"manga",cor:"verde"}, {nome:"goiaba",cor:"vermelha"}];
console.log(frutas);

var idade = prompt("Digite sua idade: ");
if (idade >= 18 ){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++
}

var count;
for(count=0; count <= 5; count++){
    console.log(count);
    alert(count);
}


var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getHours());

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}


function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Digite sua idade: ")
console.log(validaIdade(idade));

function clicou(){
    alert("Obrigado por clicar!");
}*/

function clicou(){
    document.getElementById("agradece").innerHTML = "<b>Obrigado</b> pela visita!";
    //console.log(document.getElementById("agradece"))
}

function redireciona(){
    //window.open("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"); //outra janela
    window.location.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"; //mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value);
}