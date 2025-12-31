class Spyro {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y});
        
        // 0 = idle, 1 = run, 2 = jump, 3 = fall, 4 = land, 5 = glide
        this.state = 0;
        
        this.animation = new Animator(spritesheet, 0, 0, 35, 28, 22, 0.5, 0, false, true);
        
        this.loadAnimations(spritesheet);
    };
    
    loadAnimations(spritesheet) {
        this.idleAnim = [];
        
    }
    
    update() {
        
    }
    
    draw(context) {
        this.animation.drawFrame(this.game.clockTick, context, this.x, this.y, 10);
    }
}