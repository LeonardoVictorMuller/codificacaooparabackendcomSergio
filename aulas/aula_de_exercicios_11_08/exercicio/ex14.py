valor = float(input("digite o valor da compra: "))
if(valor > 100 and valor < 200):
    desconto = valor * 0.10
    print(valor - desconto)
if(valor >= 200 ):
    print(valor - (valor * 0.2))
else:
    print(valor)