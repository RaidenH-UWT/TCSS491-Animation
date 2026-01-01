class Background {
    constructor(game, spritesheet) {
        Object.assign(this, {game, spritesheet});
    }
    
    update() {
        
    }
    
    draw(context) {
        context.drawImage(this.spritesheet, 0, 0);
    }
}