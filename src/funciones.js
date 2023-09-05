function devolverTexto(texto)
{
    return texto;
}
function devolver_una_palabra_por_posicion(texto,pos)
{
    let cont=1;
    let palabra='';
    for(let i=0;i<texto.length ;i++)
    {
        if(texto[i]==" " || texto[i]=="." || texto[i]=="," || texto[i]==";" || texto[i]=="-")
        {
            cont=cont+1;
        }
        else if(cont==pos)
        {
            palabra = palabra + texto[i];
        }
    }
    return palabra;
}
function convertir_texto_a_minusculas(texto)
{
    return texto.toLowerCase();
}
function contar_cantidad_palabars(texto)
{
    let cont=1;
    for(let i=0;i<texto.length ;i++)
    {
        if(texto[i]==" " || texto[i]=="." || texto[i]=="," || texto[i]==";" || texto[i]=="-")
        {
            cont=cont+1;
        }
    }
    return cont;
}
function contar_apariciones(texto)
{

    let Cantidad_palabras=contar_cantidad_palabars(texto);
    let auxiliar_Palabras=convertir_texto_a_minusculas(texto);
    texto=auxiliar_Palabras;
    let palabra;
    let cont;
    let cont2=0;
    while(true)
    {
        for(let i=0;i<Cantidad_palabras;i++)
        {
            cont=0;
            palabra=devolver_una_palabra_por_posicion(texto,i);
            for(let j=0;j<texto.length;j++)
            {
                if(palabra[cont2]==texto[j])
                {
                    cont2=cont2+1
                }
                else
                {
                    cont2=0;
                }
                if(cont2==palabra.length-1)
                {
                    cont=cont+1;
                }
            }
           return [palabra,cont];
        }
        
    }   
}
export {devolverTexto,devolver_una_palabra_por_posicion,convertir_texto_a_minusculas,contar_cantidad_palabars,contar_apariciones};