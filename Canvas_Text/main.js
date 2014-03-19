/// <reference path='Model/Juego.ts' />
var Principal = (function () {
    function Principal(canvas) {
        var _this = this;
        this.juego = new model.Juego(0 /* Jugador1 */);
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        var lado = this.canvas.width / 3;
        this.canvas.addEventListener('click', function (e) {
            var x = Math.ceil((e.x - _this.canvas.offsetLeft) / lado);
            var y = Math.ceil((e.y - _this.canvas.offsetTop) / lado);
        });
        this.dibujarTablero();
    }
    Principal.prototype.dibujarTablero = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.strokeStyle = '#fff';
        this.context.lineWidth = 2;
        var lado = this.canvas.width / 3;
        var radio = lado / 2;
        var constant = 5;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.context.strokeRect(lado * i, lado * j, lado, lado);
                if (this.juego.tablero[j + 1][i + 1] == 1) {
                    this.context.fillStyle = '#fff';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                } else if (this.juego.tablero[j + 1][i + 1] == 2) {
                    this.context.fillStyle = '#000';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                }
            }
        }
    };
    return Principal;
})();
window.onload = function (e) {
    var main = new Principal(document.getElementById('canvas'));
};
//# sourceMappingURL=main.js.map
