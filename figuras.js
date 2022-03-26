//valida campo vacio
function emptyval(val){
    const valf = String(val) 
    return (valf.length <= 0 || valf === "undefined") ? true : false;
}

//calcula area de un cuadrado
function CaclAreaSquare() {
    const Square = document.getElementById("V-Square").value;
    return (emptyval(Square))? "campo vacio":parseFloat(Square) * parseFloat(Square);
}

//calcula perimetro cuadrado
function CaclperimeterSquare() {
    const Square = document.getElementById("V-Square").value;
    return (emptyval(Square))? "campo vacio":parseFloat(Square) * 4;
}

//calcula perimetro de un triangulo
function Caclperimetertriangle() {
    const Square1 = document.getElementById("V-Square1").value;
    const Square2 = document.getElementById("V-Square2").value;
    const Base = document.getElementById("V-Base").value;

    return (emptyval(Square1) && emptyval(Square2) && emptyval(Base))? "campo vacio":parseFloat(Square1) + parseFloat(Square2) + parseFloat(Base);
}

//calcula area de un triangulo
function CaclAreatriangle(base, altura) {
    const Height = document.getElementById("V-Height").value;
    const Base = document.getElementById("V-Base").value;

    return (emptyval(Height) && emptyval(Base))? "campo vacio":(parseFloat(Base) * parseFloat(Height)) / 2;
}

//funcion para evaluar tipo de calculo
function FnCal(type){
    let result = ""
    switch(type){
        case 1:
            result = CaclAreaSquare();
            break;
        case 2:
            result = CaclperimeterSquare();
            break;
        case 3:
            result = CaclAreatriangle();
            break;
        case 4:
            result = Caclperimetertriangle();
            break;
        default:
            result = "Tipo de calculo no definido"
            break;
    }
    
    alert(result);
};