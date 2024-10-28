let hora = parseInt(prompt("ingrese una hora"))

if(hora<12){
    document.write("buenos dias")
}  else if (hora<18){
    document.write("buenas tardes")
} else {
    document.write("buenas noches")
}