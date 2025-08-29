produtos = [
    {"nome": "Mouse", "qtd": 120},
    {"nome": "Teclado", "qtd": 350},
    {"nome": "Monitor", "qtd": 899}
]


oq = input("Digite o nome do produto: ")
qtd_prod = input("Digite a quantidade do produto: ")
for produto in produtos:
    if produto['nome'].lower() == oq.lower():
        if produto['qtd'] < float(qtd_prod):
            print(f"Quantidade insuficiente para {produto['nome']}. Disponível: {produto['qtd']}")
            break
        produto['qtd'] -= float(qtd_prod)
        print(f"Quantidade atualizada: {produto['nome']} - {produto['qtd']}")
        break
