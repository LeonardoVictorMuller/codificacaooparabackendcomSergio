nota1 = float(input("digite a nota 1 : "))
nota2 = float(input("digite a nota 2: "))
nota3 = float(input("digite a nota 3: "))

media = (nota1 + nota2 + nota3)/3
print("a media é ", media)
if(media >= 7):
    print("aprovado")
elif(media >= 5 and media < 7):
    print("recuperação")    
else:
    print("reprovado")