num = int(input("digite um numero: "))
somar = 0
for i in range(1, num + 1):
    if(i % 2 == 0):
        somar += i
print("a soma dos numeros pares é: ", somar)