produtos = [
    {"nome": "Mouse Gamer", "preco": 120.50},
    {"nome": "Teclado Mecânico", "preco": 350.00},
    {"nome": "Monitor 24''", "preco": 899.99}
]

print("Lista de Produtos:")
for produto in produtos:
    print(produto['nome'] , " R$ " , produto['preco'])
