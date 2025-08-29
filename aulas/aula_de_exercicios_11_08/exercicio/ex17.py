pessoas = [
    {"nome": "carlos", "numero": 120},
    {"nome": "maria", "numero": 350},
    {"nome": "pessoa3", "numero": 899}
]

def add_pessoa():
    nome = input("Digite o nome: ")
    numero = input("Digite o número: ")
    pessoas.append({"nome": nome, "numero": numero})
    print(f"Pessoa {nome} adicionada com sucesso!")

def achar():
    nome = input("Digite o nome: ")
    for p in pessoas:  # usa "p" para não sobrescrever a lista
        if p['nome'].lower() == nome.lower():
            print(f"Pessoa: {p['nome']} - {p['numero']}")
            break
    else:
        print("Pessoa não encontrada.")

print("Menu:")
print("1 - Adicionar Pessoa")
print("2 - Achar Pessoa")
print("3 - Sair")

while True:
    opcao = input("Escolha uma opção: ")
    
    if opcao == '1':
        add_pessoa()
    elif opcao == '2':
        achar()
    elif opcao == '3':
        print("Saindo...")
        break
    else:
        print("Opção inválida, tente novamente.")
