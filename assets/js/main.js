let listaSpesa = [];
let item;
let i=0;
flag = false;
while(flag == false)
{       
        item = prompt("Inserisci un elemento alla lista della spesa")
        listaSpesa.push(item);
        flag = confirm("Premere OK per uscire dall inserimento, oppure ANNULLA per continuare ad inserire oggetti");
}

while(i<listaSpesa.length)
{
    console.log(listaSpesa[i]);
    i++;
}