class Myclass {
    constructor(voltiosPrimario, voltiosSecundario, medidaA, medidaB){
        // Cálculo para el primario
        let potencia1 = (medidaA * medidaB) ** 2;
        let intensidadPrimario = potencia1 / voltiosPrimario;
        this.potencia = potencia1;
        this.espirasPrimario = (37.54 / (medidaA * medidaB)) * voltiosPrimario;
        this.intensidadPrimario = intensidadPrimario;
        this.seccionPrimario = intensidadPrimario / 4;
        //Cálculo para el secundario
        let intensidadSecundario = potencia1 / voltiosSecundario;
        this.espirasSecundario = (37.54 / (medidaA * medidaB)) * voltiosSecundario;
        this.intensidadSecundario = intensidadSecundario;
        this.seccionSecundario = intensidadSecundario / 4;
    }   
    
}

let calculo = new Myclass(220, 12, 3, 3);

console.log("CALCULO PARA EL PRIMARIO");
console.log(`Potencia   = ${calculo.potencia} Vatios`);
console.log(`Espiras    = ${calculo.espirasPrimario}`);
console.log(`Intensidad = ${calculo.intensidadPrimario} Amperios`);
console.log(`Seccion    = ${calculo.seccionPrimario} cm2`);
console.log("CALCULO PARA EL SECUNDARIO");
console.log(`Potencia   = ${calculo.potencia} Vatios`);
console.log(`Espiras    = ${calculo.espirasSecundario}`);
console.log(`Intensidad = ${calculo.intensidadSecundario} Amperios`);
console.log(`Seccion    = ${calculo.seccionSecundario} cm2`);

