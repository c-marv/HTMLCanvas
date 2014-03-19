enum Turno {
    Jugador1, Jugador2
}
class Juego {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    tablero: number[][];
    // Ficha Seleccionada
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        var lado = this.canvas.width / 3;
        this.canvas.addEventListener('click', (e: MouseEvent) =>{
            var x = Math.ceil((e.x - this.canvas.offsetLeft) / lado);
            var y = Math.ceil((e.y - this.canvas.offsetTop) / lado);

        });
//        setInterval(() => {
//
//        }, 1000);
        this.nuevoJuego();
        this.dibujarTablero();
    }
    mostrarPosibilidades(jugador: Turno): void {

    }
    nuevoJuego():void {
        this.tablero = [
            [-1, -1, -1, -1, -1],
            [-1, 1, 1, 1, -1],
            [-1, 0, 0, 0, -1],
            [-1, 2, 2, 2, -1],
            [-1, -1, -1, -1, -1]
        ];
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
                if(this.tablero[j + 1][i + 1] == 1) {
                    this.context.fillStyle = '#fff';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                }else if (this.tablero[j + 1][i + 1] == 2) {
                    this.context.fillStyle = '#000';
                    this.context.beginPath();
                    this.context.arc((i * lado) + radio, (j * lado) + radio, radio - constant, 0, Math.PI * 2, true);
                    this.context.closePath();
                    this.context.fill();
                }
            }
        }
    }
};
window.onload = (e: Event) =>{
    var juego = new Juego(<HTMLCanvasElement>document.getElementById('canvas'));
};