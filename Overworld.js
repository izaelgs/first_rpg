class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map
    }

    startGameLoop() {
        const step = () => {

            //Limpa o Canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Desenha A Camada inferior do Mapa
            this.map.drawLowerImage(this.ctx);

            // Desenha os Objetos do Jogo
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
                object.sprite.draw(this.ctx);
            })

            // Desenha A Camada superior do Mapa
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            });
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();

    }
}