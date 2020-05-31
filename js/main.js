// var name =" Karina Teixeira";
// var idade = 20;
// var idade2 = 10;
// var frase = "São Paulo  e o melhor time do mundo";
// //tipagem dinamica, nao precisa declarar string

// // alert (name + " tem " + idade + " anos ");
// // // aparece a variavel  name"karina" tem mais a var "idade" anos 
// alert(idade+idade2);
// //adicona
// // se eu colocar aspas no numero ele entende como uma String
// console.log(name);
// console.log(idade + idade2);
// console.log(frase.replace("São Paulo", "Palmeiras"));
// alert(frase.replace("São Paulo", "Palmeiras"));
// //trocando São Paulo por Palmeiras
// console.log(frase.toUpperCase());
// // Coloca todas as letras em Maiusculo
// console.log(frase.toLowerCase());
// //coloca todas as letras em 
//var lista = ["maça", "pera", "laranja"];
//declarando um array
//lista.push("uva");
// push colocar um elemento
//lista.pop()
//push retira
//alert(lista[1]);
//aparece o primeiro elemento do array
//console.log(lista.length);
//aparece quantos elementos existem
//console.log(lista.reverse());
//aparece o ultimo elemento do array primeiro
//console.log(lista);
//console.log(lista.toString());
//aparece o primeiro elemeto se colocado 0 dentro[]
//aparece a priemira letra se colocado  a dentr[]
//console.log(lista.join("-"));
//aparece - ao inves de virgulas
 // ****** DICIONARIO ******
 //var fruta = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor:"roxa"}];
 //console.log(fruta);
 //alert(fruta[1].nome);
//  var fruta = {nome:"maça", cor: "vermelha"}
//  console.log(fruta.nome);
//  alert(fruta.cor);
// 

//CONDICIONAIS//

//var d = new Date();
//alert(d.getMonth()+1);
//mes começa do 0 por isso acrescenta 1
//get.day
//get.hours

//mostra o dia
// var count ;
// for (count = 0; count <=5; count ++){
//     alert(count);
 //mostra de 0 a 5
// }


// var count = 0;
// while (count <= 5 ){
// console.log (count);
// count++;
// };
// mostra de 0 a 5

/*
var idade = prompt("qual a sua idade ???");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert ("menor de idade");
};
*/
// function soma(n1,n2){

//     return n1+n2;
// }

// function validaIdade (idade){
//     var valida  ;
//     if(idade>=18){
//        valida = true ;
// } else {
//     valida = false;
// }
// return valida; 
// }
// var idade = prompt ("qual sua idade??");
// console.log(validaIdade(idade));

function clikou(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar bobinho";
   // console.log(document.getElementById("agradecimento"));

//alert("obrigado por clicar bobinho");

}
function redirecionar (){
    window.open("https://digitalinnovation.one/sign-in");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse bobinho";
  //  alert("trocar texto");
}
