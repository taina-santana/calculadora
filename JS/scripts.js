function insert(numero){  //função para add numero e simbolo na tela um após o outro
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= num + numero;
}
function limpatudo(){ //função para o botao c limpar td
    document.getElementById('resultado').innerHTML = "";
}
function apagarum(){ //função p o botao < apagar somente um caracter
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){ //função para realizar calculo ao apertar o igual
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); //eval para calcular
    }
}