


function encriptar()
{
	
     var cadena = document.getElementById("input-text").value;
	document.getElementById("msg").value = cadena.replace(/e/g,"enter").replace(/o/g,"ober").replace(/i/g,"imes").replace(/a/g,"ai").replace(/u/g,"ufat");
	// la letra g quiere decir global, que afecte a todas las palabras i para mayusculas :v   
	
}

function desencriptar()
{
  //var cadena = "enterl enter pimestober";  

   var cadena = document.getElementById("input-text").value; 
  document.getElementById("msg").value = cadena.replace(/enter/g,"e").replace(/ober/g,"o").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ufat/g,"u");
  // la letra g quiere decir global, que afecte a todas las palabras 
  return cadena;
}

function copiarTexto()
{
	var texto = document.getElementById("msg");
	texto.select();
	document.execCommand("copy");
}

function validar(e) 
{
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
    {
        return true;
    }
    patron = /[a-z ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}



/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



