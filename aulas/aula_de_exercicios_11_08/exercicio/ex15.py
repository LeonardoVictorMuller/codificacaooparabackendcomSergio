valor = int(input("Digite um valor: "))
if valor > 100: 
    i = valor//100
    print(i , " notas de 100")
    valor = valor - 100*i
if valor > 50: 
    print("Uma nota de 50")
    valor = valor - 50
if valor > 20:
    print("Uma nota de 20")
    valor = valor - 20
if valor > 10:
    print("Uma nota de 10")
    valor = valor - 10
if valor > 5:     
    print("Uma nota de 5")
    valor = valor - 5
if valor > 2 and valor == 4: 
    print("Duas nota de 2")
    valor = valor - 4
elif valor > 2:
    print("uma nota de 2")
    valor = valor - 2
if valor > 1:
    print("Uma nota de 1")
