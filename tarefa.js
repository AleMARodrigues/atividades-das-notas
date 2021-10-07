Aluno1 = prompt("Qual o nome do Aluno 1?")
N1= prompt("Quais as três notas do Aluno 1 separadas por vírgula?")
N1= N1.split(",")
Aluno2 = prompt("Qual o nome do Aluno 2?")
N2= prompt("Quais as três notas do Aluno 2 separadas por vírgula?")
N2= N2.split(",")
Aluno3 = prompt("Qual o nome do Aluno 3?")
N3= prompt("Quais as três notas do Aluno 3 separadas por vírgula?")
N3= N3.split(",")
Aluno4 = prompt("Qual o nome do Aluno 4?")
N4= prompt("Quais as três notas do Aluno 4 separadas por vírgula?")
N4= N4.split(",")
Aluno5 = prompt("Qual o nome do Aluno 5?")
N5= prompt("Quais as três notas do Aluno 5 separadas por vírgula?")
N5= N5.split(",")
media = (parseFloat(N1[0])+parseFloat(N1[1])+parseFloat(N1[2]))/3
media = (parseFloat(N2[0])+parseFloat(N2[1])+parseFloat(N2[2]))/3
media = (parseFloat(N3[0])+parseFloat(N3[1])+parseFloat(N3[2]))/3
media = (parseFloat(N4[0])+parseFloat(N4[1])+parseFloat(N4[2]))/3
media = (parseFloat(N5[0])+parseFloat(N5[1])+parseFloat(N5[2]))/3
if(media>=5){
alert(Aluno1 + " APROVADO")
}
else{
alert(Aluno1 + " REPROVADO")
}
if(media>=5){
alert(Aluno2 + " APROVADO")
}
else{
alert(Aluno2 + " REPROVADO")
}
if(media>=5){
alert(Aluno3 + " APROVADO")
}
else{
alert(Aluno3 + " REPROVADO")
}
if(media>=5){
alert(Aluno4 + " APROVADO")
}
else{
alert(Aluno4 + " REPROVADO")
}
if(media>=5){
alert(Aluno5 + " APROVADO")
}
else{
alert(Aluno5 + " REPROVADO")
}



