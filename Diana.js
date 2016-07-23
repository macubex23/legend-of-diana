let tablero;
let fondo = {
    
    imagenURL: "fondo.png",
    imagenOK: false
    

};

let Diana = {
    
    x: 100,
    y: 100,
    frenteURL: "diana-frente.png",
    frenteOK: false
    
};

function iniciar()
{
    let canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");
    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;
    
    Diana.frente = new Image();
    Diana.frente.src = Diana.frenteURL;
    Diana.frente.onload = confirmarFrente;
    
    let m = document.getElementById("mover");
    m.addEventListener("click",movimiento);
    
    
    
    
}

function confirmarFondo(){
    
    fondo.imagenOk = true;
    dibujar();
}

function confirmarFrente(){
    
    Diana.frenteOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.imagenOk == true)
        {
            tablero.drawImage(fondo.imagen, 0, 0);
        }
    if(Diana.frenteOk == true)
         {
             tablero.drawImage(Diana.frente, Diana.x, Diana.y);
         }
}

function movimiento()
{
    Diana.x += 10;
    dibujar();
}