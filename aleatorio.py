import PySimpleGUI as pg


def CabeçaChave():
        pg.theme("Reddit")
        formato = [
        [pg.Text("Time 1", size=(15,0)), pg.Input(size=(15,0), key="time1")],
        [pg.Text("Time 2",size=(15,0)), pg.Input(size=(15,0), key="time2")],
        [pg.Button("duas ameba")]
       ]

        return pg.Window("Montagem de times FML ZOTA", layout=formato, finalize = True)

        self.button, self.values = self.tela.Read()
    
def outra_janela():
        pg.theme("Reddit")
        formato =[ [pg.Text("Jogadores", size=(15,0)),pg.Input(size=(15,0), key="jogadores")],
        [pg.Button("volta")],
        [pg.Button("feito")]
        ]

        return pg.Window("Adicione os horriveis", layout=formato, finalize = True)

janela1, janela2 = CabeçaChave(), None
while True:
    window, event, values = pg.read_all_windows()
    if window ==  janela1 and event == pg.WIN_CLOSED:
        break
    
    if window == janela1 and event == "duas ameba":
        janela2 = outra_janela()
        janela1.hide()
    if window == janela2 and event == "volta":
        janela2.hide
        janela1.un_hide()


