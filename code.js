var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1, laser2;
var treasure, thief;
function setup() {
  
  thief=createSprite(10,390,30,30);
  laser1=createSprite(100,0,200,5);
  laser1.shapeColor="red";
  laser1.velocityY=2;
  
  laser2=createSprite(300,400,200,5);
  laser2.shapeColor="red";
  laser2.velocityY="-2";

  treasure = createSprite(390,10,30,30);
  treasure.shapeColor="blue";
  
  edges = createEdgeSprites();
}

function draw() {
  background(220);
  
  fill("white");
  
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  
  
  if (keyDown("UP_ARROW")){
    thief.y= thief.y-1.5;
  }
  
   if (keyDown("DOWN_ARROW")){
    thief.y=thief.y+1.5;
  }
  
  if (keyDown("LEFT_ARROW")){
    thief.x= thief.x-1.5;
  }
  
  if (keyDown("RIGHT_ARROW")){
    thief.x= thief.x+1.5;
  }
  
  if (thief.isTouching(laser1)|| thief.isTouching(laser2)){
    textSize(25);
    fill("black");
    text("Ladrón atrapado",150,200);
    laser1.velocityY=0;
    laser2.velocityY=0;
    thief.velocityX=0;
    thief.velocityY=0;
  }
  
  if (thief.isTouching(treasure)){
    textSize(25);
    fill("black");
    text("El ladrón consiguió el diamante",100,200);
    laser1.velocityY=0;
    laser2.velocityY=0;
    thief.velocityX=0;
    thief.velocityY=0;
  }







    drawSprites();
    
    

}

/*if(laser1.isTouching(thief)) ǀǀ laser2.isTouching(thief)
stroke(0)
fill()
textSize(24)
text("Atrapa al ladrón",120,200);
laser1.velocityY=0;
laser2.velocityY=0;
thief.velocityY=0;
thief.velocityX=0;*/
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
