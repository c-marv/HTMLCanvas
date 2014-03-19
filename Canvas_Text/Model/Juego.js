/// <reference path='Posicion.ts' />
var model;
(function (model) {
    (function (Jugador) {
        Jugador[Jugador["Jugador1"] = 0] = "Jugador1";
        Jugador[Jugador["Jugador2"] = 1] = "Jugador2";
    })(model.Jugador || (model.Jugador = {}));
    var Jugador = model.Jugador;
    var Juego = (function () {
        function Juego(jugador) {
            this.tablero = [
                [-1, -1, -1, -1, -1],
                [-1, 1, 1, 1, -1],
                [-1, 0, 0, 0, -1],
                [-1, 2, 2, 2, -1],
                [-1, -1, -1, -1, -1]
            ];
            this.jugador = jugador;
        }
        Juego.prototype.generarPosibilidades = function () {
            var posibilidades = new Array();
            for (var i = 1; i < 4; i++) {
                for (var j = 1; j < 4; j++) {
                    if (this.jugador == 0 /* Jugador1 */) {
                        if (this.tablero[i][j] == 1) {
                            if (this.tablero[i + 1][j] == 0)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j));
                            if (this.tablero[i + 1][j - 1] == 2 && this.tablero[i + 1][j - 1] != 1)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j - 1));
                            if (this.tablero[i + 1][j + 1] == 2 && this.tablero[i + 1][j + 1] != 1)
                                posibilidades.push(this.crearJugada(i, j, i + 1, j + 1));
                        }
                    } else if (this.jugador == 1 /* Jugador2 */) {
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
        };
        Juego.prototype.crearJugada = function (sourceX, sourceY, destinyX, destinyY) {
            var nuevotablero = this.clonarTablero();
            nuevotablero[destinyX][destinyY] = nuevotablero[sourceX][sourceY];
            nuevotablero[sourceX][sourceY] = 0;
            var res;
            if (this.jugador == 0 /* Jugador1 */)
                res = new Juego(1 /* Jugador2 */);
            else
                res = new Juego(1 /* Jugador2 */);
            res.tablero = nuevotablero;
            return res;
        };
        Juego.prototype.clonarTablero = function () {
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
        };
        Juego.prototype.obtenerPosiblesMovimientos = function (posicion) {
            var posiciones = new Array();
            if (this.tablero[posicion.x][posicion.y + 1] == 0)
                posiciones.push(new model.Posicion(posicion.x, posicion.y));

            return posiciones;
        };
        return Juego;
    })();
    model.Juego = Juego;
})(model || (model = {}));
//# sourceMappingURL=Juego.js.map
