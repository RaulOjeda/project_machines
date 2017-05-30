var maquina=[];
var mecanicos=[];

maquina.push(303);
maquina.push(208);
maquina.push(190);





mecanicos.push("Juan");
mecanicos.push("Carlos");
mecanicos.push("Raul");




function esVacia(arreglo)
//tomo un arreglo como parametro de entrada.
//devuelve si el arreglo es vacio (true) o no (false)

{
         return (arreglo.length==0)
	}




function asignar()

{
	var nromaquina=maquina.shift();
    var nombremecanicos=mecanicos.pop();
    document.write(nromaquina+"-"+nombremecanicos);
    document.write("<br>");
}

while(!esVacia(maquina) && !esVacia(mecanicos))
	{
asignar();
}