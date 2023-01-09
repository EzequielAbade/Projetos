from tkinter import font
from weakref import finalize
import PySimpleGUI as janelas

# Criar as janelas e estilos (layouts)
# Criar janelas iniciais
# criar um loop de leitura de eventos
# Logica que deve rodar por trás

class cadastroproduto:
    
    def _init_(self):
        
        font = ("Arial Black", 12)
        janelas.set_options(font=font)
        janelas.change_look_and_feel("DarkBrown4")

        # layout
        layout  = [
            [janelas.Text("ID",size=(6)),janelas.Input(size=(10,0),key="id"),janelas.Text("  Descrição",size=(8)), janelas.Input(size=(60,0),key="descrição")],
            [janelas.Text("Unidade",size=(6)),janelas.Input(size=(5,0),key="unidade"),janelas.Text("                 NCM",size=(12)),janelas.Input(size=(9,0),key="ncm")],
            [janelas.Text("GTIN",size=(6)),janelas.Input(size=(13,0),key="gtin"),janelas.Text("Tipo.Merc",size=(5)),janelas.Input(key=("tipomercadoria"))],
            [janelas.Text("Status")],
            [janelas.Radio("Sim","produto",size=(0),key="ativo"),janelas.Radio("Não", "produto",size=(0),key="inativo")],
            [janelas.Text("Aliquota")],
            [janelas.Radio("II","aliquota"),janelas.Radio("17","aliquota"),janelas.Radio("NN","aliquota"),janelas.Radio("FF","aliquota"),janelas.Radio("25","aliquota"),janelas.Radio("12","aliquota"),janelas.Radio("7","aliquota")],
            [janelas.Text("Qual Grupo de Aliquota?")],
            [janelas.Checkbox("ISENTO"),janelas.Checkbox("Subs.Tri"),janelas.Checkbox("Deri.Petro"),janelas.Checkbox("Fab.propria")],
            [janelas.Button("Gravar")],
            [janelas.Output(size=(30,20))],
        ]
        # Criando a Variavel da janela
        self.janela = janelas.Window("Cadastro de produto", finalize=True, auto_close=True).layout(layout)
        
        # Extraindo dados da tela.
   
def Iniciar(self):
    print(self.values)
    while True:
       self.button, self.values = self.janelas.Read()   #self é usado em classes no Python para indicar que você está referenciando alguma coisa do proprio objeto
    if self.janela == janelas.WIN_CLOSED:
        self.janela.close()
     
tela = cadastroproduto()
tela.Iniciar()


#finalize=True