num = [0] * 5
for i in range(0,5):
    num[i] = float(input("digite um numeor: "))
maior = num[1]  # Inicializa o primeiro elemento como
for i in range(0, 5):
    if(num[i] > maior):
        maior = num[i]
print("o maior numero é: ", maior)