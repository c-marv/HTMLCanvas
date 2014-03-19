/// <reference path='Posicion.ts' />

module model{
    export enum Jugador {
        Jugador1, Jugador2
    }
    export class Juego{
        tablero: number[][] = [
            [-1, -1, -1, -1, -1],
            [-1, 1, 1, 1, -1],
            [-1, 0, 0, 0, -1],
            [-1, 2, 2, 2, -1],
            [-1, -1, -1, -1, -1]
        ];
        jugador: Jugador;
        constructor(jugador: Jugador) {
            this.jugador = jugador;
        }
        generarPosibilidades(): Array<Juego> {
            var posibilidades = new Array<Juego>();
            for (var i = 1; i < 4; i++) {
                for (var j = 1; j < 4; j++) {
                    if (this.jugador == Jugador.Jugador1) {
                        if (this.tablero[i][j] == 1) {
                            if (this.tablero[i + 1][j] == 0)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j));
                            if (this.tablero[i + 1][j - 1] == 2 && this.tablero[i + 1][j - 1] != 1)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j - 1));
                            if (this.tablero[i + 1][j + 1] == 2 && this.tablero[i + 1][j + 1] != 1)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j + 1));
                        }
                    } else if (this.jugador == Jugador.Jugador2) {
                        if (this.tablero[i][j] == 2) {
                            if (this.tablero[i - 1][j] == 0)
                                posibilidades.push(this.crearJugada(i, j, i - 1, j));
                            if (this.tablero[i - 1][j - 1] == 1 && this.tablero[i - 1][j - 1] != 2)
                                posibilidades.push(this.crearJugada(i, j, i - 1, j - 1));
                            if (this.tablero[i - 1][j + 1] == 1 && this.tablero[i - 1][j + 1] != 2)
                                posibilidades.push(this.crearJugada(i, j, i - 1, j + 1));
                        }
                    }

                }
            }
            return posibilidades;
        }
        crearJugada(sourceX: number, sourceY: number, destinyX: number, destinyY: number): Juego{
            var nuevotablero = this.clonarTablero();
            nuevotablero[destinyX][destinyY] = nuevotablero[sourceX][sourceY];
            nuevotablero[sourceX][sourceY] = 0;
            var res: Juego;
            if (this.jugador == Jugador.Jugador1) res = new Juego(Jugador.Jugador2);
            else res = new Juego(Jugador.Jugador2);
            res.tablero = nuevotablero;
            return res;
        }
        clonarTablero(): number[][] {
            var nuevotablero = [
                [-1, -1, -1, -1, -1],
                [-1, 0, 0, 0, -1],
                [-1, 0, 0, 0, -1],
                [-1, 0, 0, 0, -1],
                [-1, -1, -1, -1, -1]
            ];
            for (var i = 1; i < 4; i++) {
                for (var j = 1; j < 4; j++) {
                    nuevotablero[i][j] = this.tablero[i][j];
                }
            }
            return nuevotablero;
        }
        obtenerPosiblesMovimientos(posicion: model.Posicion): Array<model.Posicion>{
            var posiciones = new Array<model.Posicion>();
            if (this.tablero[posicion.x][posicion.y + 1] == 0)
                posiciones.push(new model.Posicion(posicion.x, posicion.y));

            return posiciones;
        }
    }
}