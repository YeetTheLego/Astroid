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

//Sprites
var Player = createSprite(200, 300);
var Hitter1 = createSprite(100, 50);
var Hitter4 = createSprite(300, 50);
var Base1 = createSprite(50, 390);
var Base2 = createSprite(200, 390);
var Base3 = createSprite(350, 390);
var WallTop = createSprite(200, 0);
var WallBottem = createSprite(200, 400);
var WallLeft = createSprite(0, 200);
var WallRight = createSprite(400, 200);
//Rotation
Hitter1.rotation = 90;
Hitter4.rotation = 90;
Hitter1.rotationSpeed = 3;
Hitter4.rotationSpeed = 3;
//Scale
Hitter1.scale = 0.2;
Hitter4.scale = 0.2;
Player.scale = 0.25;
WallTop.scale = 0.2;
WallBottem.scale = 0.2;
WallLeft.scale = 0.2;
WallRight.scale = 0.2;
Base1.scale = 0.25;
Base2.scale = 0.25;
Base3.scale = 0.25;
Player.height = 65;
WallTop.width = 999999;
WallBottem.width = 99999;
WallLeft.height = 99999;
WallRight.height = 999999;
Player.width = 250;
//Velocity
Hitter1.setVelocity(6, 6);
Hitter4.setVelocity(6, 6);
function draw() {
  background(rgb(220, 220, 220));
  Player.collide(WallRight);
Player.collide(WallLeft);
  if (Hitter1.isTouching(Hitter4)) {
    Hitter1.bounce(Hitter4);
  }
  if (keyDown("right")) {
    Player.x = Player.x + 17;
  }
  if (keyDown("left")) {
    Player.x = Player.x - 17;
  }
  //if_statments
  if (Hitter1.isTouching(Base1)) {
    Base1.visible = false;
  }
  if (Hitter1.isTouching(Base2)) {
    Base2.visible = false;
  }
  if (Hitter1.isTouching(Base3)) {
    Base3.visible = false;
  }
  if (Hitter4.isTouching(Base1)) {
  Base1.visible = false;
}
if (Hitter4.isTouching(Base2)) {
  Base2.visible = false;
}
if (Hitter4.isTouching(Base3)) {
  Base3.visible = false;
}
  if (Hitter1.isTouching(Player)) {
    Hitter1.bounceOff(Player);
  }
  if (Hitter4.isTouching(Player)) {
    Hitter4.bounceOff(Player);
  }
  if (Hitter1.isTouching(WallTop)) {
    Hitter1.bounceOff(WallTop);
  }
  if (Hitter4.isTouching(WallTop)) {
    Hitter4.bounceOff(WallTop);
  }
  if (Hitter1.isTouching(WallBottem)) {
    Hitter1.bounceOff(WallBottem);
  }
  if (Hitter4.isTouching(WallBottem)) {
    Hitter4.bounceOff(WallBottem);
  }
  if (Hitter1.isTouching(WallLeft)) {
    Hitter1.bounceOff(WallLeft);
  }
  if (Hitter4.isTouching(WallLeft)) {
    Hitter4.bounceOff(WallLeft);
  }
  if (Hitter1.isTouching(WallRight)) {
    Hitter1.bounceOff(WallRight);
  }
  if (Hitter4.isTouching(WallRight)) {
    Hitter4.bounceOff(WallRight);
  }
  drawSprites();
}

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
