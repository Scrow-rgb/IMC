function CalculateImc(){
    var alturaEntrada = document.getElementById("altura");
    var pesoEntrada = document.getElementById("peso");
    var resultDiv = document.getElementById("result")


    var altura = parseFloat(alturaEntrada.value);
    var peso = parseFloat(pesoEntrada.value);

    if(isNaN(altura) || isNaN(peso)){
        resultDiv.innerHTML = "Por favor, entre com valores de altura e peso válidos"
        return;
    }

    var imc = peso / ((altura / 100 ) ** 2);
    var categoria = "";

    if(imc < 18.5){
        categoria = "Abaixo do peso"
    }

    else if(imc < 25){
        categoria = "Peso normal"
    }

    else if(imc < 30){
        categoria = "Acima do peso"
    }

    else{
        categoria = "Obesidade"
    }

    resultDiv.innerHTML = "Seu IMC é " +imc.toFixed(2) + " (" + categoria + ")";
    

}