from token import OP
import pygame 
from pygame.locals import *
from OpenGL.GL import *

largura_janela = 640
altura_janela = 480

xdabola = 0
ydabola = 0
tamanhodabola = 20
velocidadedabolaemX = 3
velocidadedabolaemY = 3

ydojogador1 = 0
ydojogardor = 0

def xdojogaro1():
    return -largura_janela/ 2 + larguradosjogadores() / 2
def xdojogador2():
    return -largura_janela/ 2 - larguradosjogadores() / 2
def larguradosjogadores():
    return tamanhodabola
def alturadosjogadores():
    return 3 * tamanhodabola

def atualizar():

    global xdabola, ydabola, velocidadedabolaemX, velocidadedabolaemY, ydojogador1, ydojogardor
    xdabola = xdabola + velocidadedabolaemX
    ydabola = ydabola + velocidadedabolaemY

    if(xdabola + tamanhodabola / 2 > xdojogador2() - larguradosjogadores()/2
    and ydabola - tamanhodabola /2 < ydojogardor + alturadosjogadores() / 2
    and ydabola + tamanhodabola / 2 > ydojogardor - alturadosjogadores() / 2):
            velocidadedabolaemX = -velocidadedabolaemX

    if(xdabola - tamanhodabola / 2 < xdojogaro1() + larguradosjogadores() / 2
    and ydabola - tamanhodabola / 2 < ydojogador1 + alturadosjogadores() / 2
    and ydabola  + tamanhodabola / 2 > ydojogador1 - alturadosjogadores() / 2):
        velocidadedabolaemX = -velocidadedabolaemX

    if ydabola + tamanhodabola / 2 > altura_janela / 2:
        velocidadedabolaemY = -velocidadedabolaemX

    if ydabola - tamanhodabola / 2.< -altura_janela /2:
        velocidadedabolaemY = -velocidadedabolaemY

    if xdabola < -largura_janela / 2 or xdabola > largura_janela / 2:
        xdabola = 0
        ydabola = 0

    keys = pygame.key.get_pressed()

    if keys [K_w] :
        ydojogador1 = ydojogador1 + 5
    if keys [K_s] :
        ydojogador1 = ydojogador1 - 5
    if keys [K_UP] : 
        ydojogardor = ydojogardor + 5
    if keys [K_DOWN] :
        ydojogardor = ydojogardor - 5

def desenharretangulo(x, y, largura, altura, r, g, b):
    glColor3f(r, g, b)
    
    glBegin(GL_QUADS)
    glVertex2f(-0.5 * largura + x, -0.5 * altura + y)
    glVertex2f(0.5 * largura + x, -0.5 * altura + y)
    glVertex2f(0.5 * largura + x, 0.5 * altura + y)
    glVertex2f(-0.5 * largura + x, 0.5 * altura + y)
    glEnd()

def desenhar():
    glViewport(0, 0, largura_janela, altura_janela)
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    glOrtho(-largura_janela/2, largura_janela/2, -altura_janela/2, altura_janela /2, 0, 1)
    glClear(GL_COLOR_BUFFER_BIT)

    desenharretangulo(xdabola, ydabola, tamanhodabola, tamanhodabola, 1, 1, 0)
    desenharretangulo(xdojogaro1(), ydojogador1, larguradosjogadores(), alturadosjogadores(), 1, 0, 0)
    desenharretangulo(xdojogador2, ydojogardor, larguradosjogadores(), alturadosjogadores(), 0, 0, 1)
    pygame.display.flip()

pygame.init()
pygame.display.set_mode((640, 480), DOUBLEBUF | OPENGL)

while True:
    atualizar()
    desenhar()
    pygame.event.pump