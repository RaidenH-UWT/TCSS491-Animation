const ANIMATION_SPEED = 0.2;
const SPRITE_SCALE = 10;

class Spyro {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y});

        // 0 = idle, 1 = run, 2 = jump, 3 = fall, 4 = land, 5 = glide
        this.state = 0;
        // store the previous state so we can fully finish our animation before jumping to the next
        this.prevState = 0;
        
        this.idleAnim = new Animator(spritesheet, 0, 0, 35, 28, 22, ANIMATION_SPEED, 0, false, true, 0, 22);
        this.runAnim = new Animator(spritesheet, 0, 34, 41, 33, 6, ANIMATION_SPEED, 0, false, true, 0, 6);
        this.jumpAnim = new Animator(spritesheet, 0, 68, 34, 48, 4, ANIMATION_SPEED, 0, false, false);
        this.fallAnim = new Animator(spritesheet, 0, 117, 35, 32, 1, ANIMATION_SPEED, 0, false, true, 0, 1);
        this.landAnim = new Animator(spritesheet, 0, 153, 39, 29, 4, ANIMATION_SPEED, 0, false, false);
        this.glideAnim = new Animator(spritesheet, 0, 185, 37, 38, 12, ANIMATION_SPEED, 0, false, true, 1, 12);
    };
    
    clickInRegion(x, y, width, height) {
        if (this.game.click == null) return false;
        return (this.game.click.x > x) && (this.game.click.x < (x + width)) && (this.game.click.y > y) && (this.game.click.y < (y + height));
    }
    
    update() {
        this.prevState = this.state;
        
        // swap state based on previous state
        if (this.prevState == 2 && this.jumpAnim.isDone()) { // jump
            console.log("jump done!");
            // this.jumpAnim.reset();
            this.state = 4;
        } else if (this.prevState == 4 && this.landAnim.isDone()) { // land
            console.log("land done!");
            // this.landAnim.reset();
            this.state = 0;
        }
        
        // swap state based on click
        if (this.clickInRegion(63, 639, 130, 66)) { // run button
            console.log("run click");
            // enable run if not running, if running go to idle
            this.runAnim.reset();
            if (this.state == 1) {
                this.state = 0;
            } else {
                this.state = 1;
            }
        } else if (this.clickInRegion(255, 639, 130, 66)) { // jump button
            console.log("jump click");
            this.jumpAnim.reset();
            this.landAnim.reset();
            this.state = 2;
        } else if (this.clickInRegion(639, 639, 130, 66)) { // fly button
            console.log("fly click");
            this.glideAnim.reset();
            this.landAnim.reset();
            if (this.state == 5) {
                this.state = 4;
            } else {
                this.state = 5;
            }
        } else if (this.clickInRegion(831, 639, 130, 66)) { // land button
            console.log("land click");
            this.landAnim.reset();
            this.state = 4;
        }
        
        // reset click to hold no value (don't trigger actions several times from 1 click)
        this.game.click = null;
    }
    
    draw(context) {
        switch (this.state) {
            case 0: // idle
                this.idleAnim.drawFrame(this.game.clockTick, context, this.x, this.y, SPRITE_SCALE);
                break;
            case 1: // run
                this.runAnim.drawFrame(this.game.clockTick, context, this.x, this.y - 4 * SPRITE_SCALE, SPRITE_SCALE);
                break;
            case 2: // jump
                this.jumpAnim.drawFrame(this.game.clockTick, context, this.x, this.y - 14 * SPRITE_SCALE, SPRITE_SCALE);
                break;
            case 3: // fall
                this.fallAnim.drawFrame(this.game.clockTick, context, this.x, this.y, SPRITE_SCALE);
                break;
            case 4: // land
                this.landAnim.drawFrame(this.game.clockTick, context, this.x, this.y - 1 * SPRITE_SCALE, SPRITE_SCALE);
                break;
            case 5: // glide
                this.glideAnim.drawFrame(this.game.clockTick, context, this.x, this.y - 10 * SPRITE_SCALE, SPRITE_SCALE);
                break;
        }
    }
}