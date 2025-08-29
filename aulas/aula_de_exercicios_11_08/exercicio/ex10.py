nome = [""] * 5
for i in range(0,5):
    nome[i] = (input("digite um nome: "))
for i in range(0, 5):
    if(len(nome[i]) > 5):
        print("o nome ", nome[i], " tem mais de 5 letras")