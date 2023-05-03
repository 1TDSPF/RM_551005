//DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

 //Recuperando elemento butom que esta no index html
 const btn = document.getElementById("meu-btn");

 //Atrelando um evento de click ao buttom que foi recuperado
 btn.addEventListener( "click",  function(){

    //função matematica  Math
    let r,g,b;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);


    //Adicionando atributo a elemento buttom
    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);


 });



//DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de mmouse a sua escolha.
// Altere a cor de fundo e a cor do texto quando o evento ocorer.
const h2Element = document.getElementById("meu-tit");
// console.log(h2Element);

h2Element.addEventListener("click", function(){
    this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
});