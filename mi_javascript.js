var div_cabecera = document.querySelector('.item1');

var parrafo_cabecera = document.querySelector('#parrafo_cabecera');

var texto_de_parrafo_cabecera;
var la_ultima_letra;

var boton_ac = document.querySelector('.item2');
var boton_dividir = document.querySelector('.item3');
var boton_7 = document.querySelector('.item4');
var boton_8 = document.querySelector('.item5');
var boton_9 = document.querySelector('.item6');
var boton_x = document.querySelector('.item7');
var boton_4 = document.querySelector('.item8');
var boton_5 = document.querySelector('.item9');
var boton_6 = document.querySelector('.item10');
var boton_menos = document.querySelector('.item11');
var boton_1 = document.querySelector('.item12');
var boton_2 = document.querySelector('.item13');
var boton_3 = document.querySelector('.item14');
var boton_mas = document.querySelector('.item15');
var boton_0 = document.querySelector('.item16');
var boton_punto = document.querySelector('.item17');
var boton_igual = document.querySelector('.item18');
var resultado=false;
var longitud_de_texto=0;


boton_ac.onclick = funcion_boton_ac;
boton_dividir.onclick = funcion_boton_dividir;
boton_7.onclick = funcion_boton_7;
boton_8.onclick = funcion_boton_8;
boton_9.onclick = funcion_boton_9;
boton_x.onclick = funcion_boton_x;
boton_4.onclick = funcion_boton_4;
boton_5.onclick = funcion_boton_5;
boton_6.onclick = funcion_boton_6;
boton_menos.onclick = funcion_boton_menos;
boton_1.onclick = funcion_boton_1;
boton_2.onclick = funcion_boton_2;
boton_3.onclick = funcion_boton_3;
boton_mas.onclick = funcion_boton_mas;
boton_0.onclick = funcion_boton_0;
boton_punto.onclick = funcion_boton_punto;
boton_igual.onclick = funcion_boton_igual;


function funcion_boton_ac()
{	
	parrafo_cabecera.innerText="";
}

function funcion_boton_dividir()
{
	texto_de_parrafo_cabecera=document.getElementById("parrafo_cabecera").innerText;

	longitud_de_texto=texto_de_parrafo_cabecera.length;

	la_ultima_letra=texto_de_parrafo_cabecera.substr(longitud_de_texto-1,1);
	
	if (longitud_de_texto<25 && longitud_de_texto!=0 && la_ultima_letra!="/"
	&& la_ultima_letra!="*" && la_ultima_letra!="+" && la_ultima_letra!="-" && la_ultima_letra!=".")
	{
		parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"/";
		if (resultado) resultado=false;		
	}
}

function funcion_boton_7()
{
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"7";	
		else
		{
			parrafo_cabecera.innerText="7";
			resultado=false;
		}	
}

function funcion_boton_8()
{
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"8";	
		else
		{
			parrafo_cabecera.innerText="8";
			resultado=false;
		}	
}

function funcion_boton_9()
{
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"9";	
		else
		{
			parrafo_cabecera.innerText="9";
			resultado=false;
		}
}

function funcion_boton_x()
{	
	texto_de_parrafo_cabecera=document.getElementById("parrafo_cabecera").innerText;

	longitud_de_texto=texto_de_parrafo_cabecera.length;

	la_ultima_letra=texto_de_parrafo_cabecera.substr(longitud_de_texto-1,1);
	
	if (longitud_de_texto<25 && longitud_de_texto!=0 && la_ultima_letra!="/"
	&& la_ultima_letra!="*" && la_ultima_letra!="+" && la_ultima_letra!="-" && la_ultima_letra!=".")
	{
		parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"*";
		if (resultado) resultado=false;		
	}	
}

function funcion_boton_4()
{	
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"4";	
		else
		{
			parrafo_cabecera.innerText="4";
			resultado=false;
		}	
}

function funcion_boton_5()
{
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"5";	
		else
		{
			parrafo_cabecera.innerText="5";
			resultado=false;
		}	
}

function funcion_boton_6()
{	
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"6";	
		else
		{
			parrafo_cabecera.innerText="6";
			resultado=false;
		}	
}

function funcion_boton_menos()
{
	texto_de_parrafo_cabecera=document.getElementById("parrafo_cabecera").innerText;

	longitud_de_texto=texto_de_parrafo_cabecera.length;

	la_ultima_letra=texto_de_parrafo_cabecera.substr(longitud_de_texto-1,1);
	
	if (longitud_de_texto<25 && longitud_de_texto!=0 && la_ultima_letra!="/"
	&& la_ultima_letra!="*" && la_ultima_letra!="+" && la_ultima_letra!="-" && la_ultima_letra!=".")
	{
		parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"-";
		if (resultado) resultado=false;		
	}		
}

function funcion_boton_1()
{	
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"1";	
		else
		{
			parrafo_cabecera.innerText="1";
			resultado=false;
		}	
}

function funcion_boton_2()
{
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"2";	
		else
		{
			parrafo_cabecera.innerText="2";
			resultado=false;
		}	
}

function funcion_boton_3()
{	
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"3";	
		else
		{
			parrafo_cabecera.innerText="3";
			resultado=false;
		}	
}

function funcion_boton_mas()
{	
	texto_de_parrafo_cabecera=document.getElementById("parrafo_cabecera").innerText;

	longitud_de_texto=texto_de_parrafo_cabecera.length;

	la_ultima_letra=texto_de_parrafo_cabecera.substr(longitud_de_texto-1,1);
	
	if (longitud_de_texto<25 && longitud_de_texto!=0 && la_ultima_letra!="/"
	&& la_ultima_letra!="*" && la_ultima_letra!="+" && la_ultima_letra!="-" && la_ultima_letra!=".")
	{
		parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"+";
		if (resultado) resultado=false;		
	}	
}

function funcion_boton_0()
{	
	if (document.getElementById("parrafo_cabecera").innerText.length<25)
		if (!resultado) parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+"0";	
		else
		{
			parrafo_cabecera.innerText="0";
			resultado=false;
		}	
}

function funcion_boton_punto()
{	
	texto_de_parrafo_cabecera=document.getElementById("parrafo_cabecera").innerText;

	longitud_de_texto=texto_de_parrafo_cabecera.length;

	la_ultima_letra=texto_de_parrafo_cabecera.substr(longitud_de_texto-1,1);
	
	if (longitud_de_texto<25 && longitud_de_texto!=0 && la_ultima_letra!="/"
	&& la_ultima_letra!="*" && la_ultima_letra!="+" && la_ultima_letra!="-" && la_ultima_letra!=".")
	{
		parrafo_cabecera.innerText=document.getElementById("parrafo_cabecera").innerText+".";
		if (resultado) resultado=false;		
	}	
}

function funcion_boton_igual()
{	
	parrafo_cabecera.innerText=eval(document.getElementById("parrafo_cabecera").innerText);
	resultado=true;
}








