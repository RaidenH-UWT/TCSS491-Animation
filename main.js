PARAMS.DEBUG = false;
console.log(PARAMS);

const gameEngine = new GameEngine({debugging: PARAMS.DEBUG});

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./icon.png");
ASSET_MANAGER.queueDownload("./sprites/spyro_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/spyro_spritesheet_debug.png");
ASSET_MANAGER.queueDownload("./sprites/background.png");

ASSET_MANAGER.downloadAll(startGame);

function startGame() {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.init(ctx);
	
	spyroSprites = ASSET_MANAGER.getAsset("./sprites/spyro_spritesheet.png");
	backgroundSprites = ASSET_MANAGER.getAsset("./sprites/background.png");
	
	spyro = new Spyro(gameEngine, 400, 200, spyroSprites);
	background = new Background(gameEngine, backgroundSprites);
	
	gameEngine.addEntity(spyro);
	gameEngine.addEntity(background);
	
	gameEngine.start();
}