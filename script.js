function calificar() 
{
    var tunota = parseInt(document.getElementById("nota").value);
    var respuesta = document.getElementById("resultado");

    if (tunota >= 0 && tunota <= 3)
    {
        respuesta.innerHTML = "Muy <strong>deficiente</strong>";
    }
    if (tunota >= 4 && tunota <=5)
    {
        respuesta.innerHTML = "Insuficiente";
    }
    if (tunota == 6)
    {
        respuesta.innerHTML = "Suficiente";
    }
    if (tunota == 7)
    {
        respuesta.innerHTML = "Bien";
    }
    if (tunota >=8 && tunota <= 9)
    {
        respuesta.innerHTML = "Notable";
    }
    if (tunota == 10)
    {
        respuesta.innerHTML = "<strong>SOBRESALIENTE !!!</strong>";
    }
    else
    {
        if (tunota > 10)
        {
        alert("Introduzca una Cantidad Validad")

        }
    }

}


var boton = document.getElementById("boton")
boton.addEventListener("click", calificar)
