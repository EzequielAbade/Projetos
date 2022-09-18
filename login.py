
import PySimpleGUI as login

design = [
    [login.Text("Usuário")],
    [login.Input(key="Usuário")],
    [login.Text("Senha")],
    [login.Input(key="Senha")],
    [login.Button("Login")],
    [login.Text("", key="Mensagem")],
]

window = login.Window("Login", layout=design)

while True:
    event, values = window.read()
    if event == login.WIN_CLOSED:
        break
    elif event == "Login":
        usuario_correto = "ABADE"
        senha_correta = "123456"
        usuario = values["Usuário"]
        senha = values["Senha"]
        if senha == senha_correta and usuario == usuario_correto:
            window["Mensagem"].update("Login feito com sucesso")
        else: 
            window["Mensagem"].update("Senha ou Usuário incorreto")