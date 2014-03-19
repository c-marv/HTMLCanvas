/// <reference path='Model/Juego.ts' />
class Principal {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    juego: model.Juego;
    constructor(canvas: HTMLCanvasElement) {
        this.juego = new model.Juego(model.Jugador.Jugador1);
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        var lado = this.canvas.width / 3;
        this.canvas.addEventListener('click', (e: MouseEvent) =>{
            var x = Math.ceil((e.x - this.canvas.offsetLeft) / lado);
            var y = Math.ceil((e.y - this.canvas.offsetTop) / lado);

        });
        this.dibujarTablero();
    }
    dibujarTablero(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.strokeStyle = '#fff';
        this.context.lineWidth = 2;
        var lado = this.canvas.width / 3;
        var radio = lado / 2;
        var constant = 5;
        for (var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                this.context.strokeRect(lado * i, lado * j, lado, lado);
                if(this.juego.tablero[j + 1][i + 1] == 1) {
                    this.context.fillStyle = '#fff';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                }else if (this.juego.tablero[j + 1][i + 1] == 2) {
                    this.context.fillStyle = '#000';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                }
            }
        }
    }
}
window.onload = (e: Event) =>{
    var main = new Principal(<HTMLCanvasElement>document.getElementById('canvas'));
};