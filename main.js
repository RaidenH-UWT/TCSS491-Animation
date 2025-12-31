const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./icon.png");
ASSET_MANAGER.queueDownload("./sprites/spyro_spritesheet.png");

ASSET_MANAGER.downloadAll(startGame);

function startGame() {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	gameEngine.init(ctx);
	
	gameEngine.start();
}