
var botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener("click", calcular);

function calcular(){
    const k = 37.54;
    const densidadCorriente = 2;

    var voltajePrimario = document.getElementById("voltajePrimario").value;
    var voltajeSecundario = document.getElementById("voltajeSecundario").value;
    var medidaA = document.getElementById("medidaA").value;
    var medidaB = document.getElementById("medidaB").value;
    
    var potencia = (parseFloat(medidaA) * parseFloat(medidaB)) ** 2;
    var espirasPorVoltio = k / (parseFloat(medidaA) * parseFloat(medidaB)); 
    
    var espirasDelPrimario = espirasPorVoltio * parseFloat(voltajePrimario);
    document.getElementById("espirasPrimario"). value = String(espirasDelPrimario);
    var espirasDelSecundario = espirasPorVoltio * parseFloat(voltajeSecundario);
    document.getElementById("espirasSecundario"). value = String(espirasDelSecundario);
    
    var intensidadDelPrimario = potencia / parseFloat(voltajePrimario);
    document.getElementById("intensidadPrimario"). value = String(intensidadDelPrimario);
    var intensidadDelSecundario = potencia / parseFloat(voltajeSecundario);
    document.getElementById("intensidadSecundario"). value = String(intensidadDelSecundario);
    
    var seccionDelAlambrePrimario = intensidadDelPrimario / densidadCorriente;
    var seccionDelAlambreSecundario = intensidadDelSecundario / densidadCorriente;
    
    var diametroPrimario = Math.pow((seccionDelAlambrePrimario / 3.1416), 1/2) * 2;
    document.getElementById("diametroPrimario"). value = String(diametroPrimario);
    var diametroSecundario = Math.pow((seccionDelAlambreSecundario / 3.1416), 1/2) * 2;
    document.getElementById("diametroSecundario"). value = String(diametroSecundario);



}