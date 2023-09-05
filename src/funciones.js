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
export {devolverTexto,devolver_una_palabra_por_posicion,convertir_texto_a_minusculas};