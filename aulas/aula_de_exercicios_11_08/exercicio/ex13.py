import re

def validacao(senha):

    if (len(senha) < 8):
        return 'senha pequena'
    padrao = r"[0-9]"  # Define um padrão para caracteres não alfanuméricos
    if (not(bool(re.search(padrao, senha)))):
        return 'senha sem numeros'
    padrao2 = r"[A-Z]"
    if (not(bool(re.search(padrao2, senha)))):
        return 'senha sem caracteres maiúsculos'
print(validacao('leonardoo'))