const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./icon.png");
ASSET_MANAGER.queueDownload("./sprites/spyro_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/spyro_spritesheet_debug.png");

ASSET_MANAGER.downloadAll(startGame);

function startGame() {
	PARAMS.DEBUG = false;
	console.log(PARAMS);
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.init(ctx);
	
	spritesheet = ASSET_MANAGER.getAsset("./sprites/spyro_spritesheet_debug.png");
	
	spyro = new Spyro(gameEngine, 10, 10, spritesheet);
	
	gameEngine.addEntity(spyro);
	
	gameEngine.start();
}