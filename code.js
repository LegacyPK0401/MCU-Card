var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ef74eae2-bd01-49ea-8a37-c4916d2a5c9c","0b4b0342-bebf-4e07-a499-2e533fe05898","1e81cd57-0302-479c-a9e6-e02717a44f44","296ab6f7-6b0e-4cbc-8add-42d88886d0cc","79d25413-242e-4a69-acc7-b89eddcdae22","9f7ae097-e99b-4fe1-abc3-71a52652022b","106e1e76-c18a-45a8-bafb-7de0b55e87c9","7fe4e610-3a83-4021-84c0-81d1d8c729c6","281f161d-39fa-4886-a790-f2df2a8d04df"],"propsByKey":{"ef74eae2-bd01-49ea-8a37-c4916d2a5c9c":{"name":"stan","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZuWLGBCX.a6kPSrWGclJNOF2pVotFEnr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ef74eae2-bd01-49ea-8a37-c4916d2a5c9c.png"},"0b4b0342-bebf-4e07-a499-2e533fe05898":{"name":"stan_lightning","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FjD7.EJVZpNNPAI4URzbCjm5XLTf4_K2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0b4b0342-bebf-4e07-a499-2e533fe05898.png"},"1e81cd57-0302-479c-a9e6-e02717a44f44":{"name":"stan_web","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vJIlLuhw9zIhONqsG6Mmd6Aw7RUveGOo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1e81cd57-0302-479c-a9e6-e02717a44f44.png"},"296ab6f7-6b0e-4cbc-8add-42d88886d0cc":{"name":"iron_man","sourceUrl":null,"frameSize":{"x":130,"y":138},"frameCount":1,"looping":true,"frameDelay":12,"version":"X76tGjBKmicMsvN3uagncxdVT4GzP52x","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":138},"rootRelativePath":"assets/296ab6f7-6b0e-4cbc-8add-42d88886d0cc.png"},"79d25413-242e-4a69-acc7-b89eddcdae22":{"name":"Maelstorm","sourceUrl":null,"frameSize":{"x":130,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"pKKQwfiT3BfbUz.wBtBNrv_aM.tKbwkH","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":130},"rootRelativePath":"assets/79d25413-242e-4a69-acc7-b89eddcdae22.png"},"9f7ae097-e99b-4fe1-abc3-71a52652022b":{"name":"gauntlet","sourceUrl":null,"frameSize":{"x":425,"y":425},"frameCount":1,"looping":true,"frameDelay":12,"version":"9nQMU0ol.982XtwO16bN5kNJLX5C.zHh","loadedFromSource":true,"saved":true,"sourceSize":{"x":425,"y":425},"rootRelativePath":"assets/9f7ae097-e99b-4fe1-abc3-71a52652022b.png"},"106e1e76-c18a-45a8-bafb-7de0b55e87c9":{"name":"stan_web_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sWsosXF.rSYDua5.6Qu2QCPnAHFSZcGt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/106e1e76-c18a-45a8-bafb-7de0b55e87c9.png"},"7fe4e610-3a83-4021-84c0-81d1d8c729c6":{"name":"decent kratos","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"gEEhF8u5W_8RaIsX5ETL9gdNlBnjh6R5","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/7fe4e610-3a83-4021-84c0-81d1d8c729c6.png"},"281f161d-39fa-4886-a790-f2df2a8d04df":{"name":"ghost of sparta","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"YSreltjyj6RFphjmyaqbHBL204JEL.q2","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/281f161d-39fa-4886-a790-f2df2a8d04df.png"}}};
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

 var years = 0;

var stan=createSprite (270,260);
stan.setAnimation("stan");
stan.scale= 3;

var stark=createSprite (90,320);
stark.setAnimation("iron_man");
stark.scale= 2.7;

var lee=createSprite(80,250);
lee.setAnimation("stan_lightning");
lee.scale=3;
lee.visible=false;

var gauntlet=createSprite(300,230);
gauntlet.setAnimation("gauntlet");
gauntlet.scale=0.6;
gauntlet.visible=false;

var kratos=createSprite(332,260);
kratos.setAnimation("decent kratos");
kratos.visible=false;
kratos.scale=0.53;
function draw() {
  background("tan");
  //movement
  if (keyDown("up")) {
  stan.y=stan.y - 3;
  } 
  
  if (keyDown("right")) {
    stan.y = stan.y + 3;
  }
  
  if (keyDown("w")){
    stark.y=stark.y-3;
  }   
  
    if(keyDown("d")){
      stark.y=stark.y+3;
    }
  //saying
  textSize(55);
  fill("black");
  text("Excelsior!!", 75, 100);
  
  //legend 1
textSize(10);
text("W, D, A Stark",0,10);
text("Up, right, left Stan",320,10);
textSize(13);
text("Press Space", 170,10);
textSize(10);
text("Press N and/or B",322,399);
text("Press &", 0,379);
text("Hold V", 0,389);
text("And Or M",0,399);

  //decade
  fill("black");
  textSize(25);
  text("Years of the MCU", 140,50);
  text(years, 100,30 , 200,200);
  
  //counter/shaking
    if (keyDown("space")) {
    stan.rotation = 5;
    stark.rotation = -5;
  } else {
    stan.rotation= 1;
    stark.rotation = 1;
  }
   
   if(keyWentDown("space")){
     playSound("assets/category_collect/retro_game_health_pickup_1.mp3");
   }
  
  if (keyWentDown("space")) {
    years= years + 1;         
  }
  
  //change in appearence
  if (keyDown("a")) {
    stark.setAnimation("Maelstorm");
  } else {
    stark.setAnimation("iron_man");
  }
  
  if (keyDown("left")) {
    stan.setAnimation("stan_web");
  } else {
    stan.setAnimation("stan");                          
  }
  
  //stan parameters
  if (stan.y > 269) {
    stan.y = 260;
  }
  
  if (stan.y<0){
    stan.y=50;
  }

//stark parameters
if(stark.y>340){
  stark.y=320;
}

if(stark.y<0){
  stark.y=10;
}
  //surprise 2
  
  if (keyDown("n")){
    background("red");
    stark.visible= false;
    stan.x=200;
    fill("white");
    textSize(36);
    text("We All Miss You Stan!!", 20,80);
} else {
  stark.visible=true;
  stan.x=270;
  
}

 if (keyDown("m")) {
  background ("blue");
  stan.visible=false;
  stark.x=200;
  fill("white");
  textSize(25);
  text("Thank You for Creating One", 55,60);
  textSize(25);
  text("of the Best Thing in Our Lives", 45,85);
  textSize(25);
  text("the MCU.", 150,110);
} else {
  stan.visible=true;
  stark.x=90;
  
}

//big surprise
 if (years>=11) {
   background("skyblue");
   stark.visible=false;
   stan.visible=false;
   lee.visible=true;
   textSize(25);
   text("BRING ME THE GAUNTLET!!!", 45,50);
   text("ALSO THE CAMEOS AND THE ", 35,75);
   text("STORIES!!", 145,100);
   gauntlet.visible=true;
   //legend 2
   textSize(12);
   text("I, J, L Lee", 0,10);
   text("Press & Hold G", 170, 10);
   text("Press C or X",330,10);
   textSize(16);
   text("Press T", 180, 399);
 
//kratos surprise
 if(keyDown("g")){
   background("green");
  gauntlet.visible=false;
  kratos.visible=true;
  textSize(20);
  text("BBOOOYYYY!!!",250, 50);
  textSize(20);
  text("You're in the wrong realm 'BOOYYY'",0,90);
  //legend 3
  textSize(13);
  fill("white");
  text("I, J, L Lee", 0,10);
  text("Press Z or Alt",320,10);
  text("Hold H while pressing G",145,10);
  text("Press Y or R", 155,399);
  
 //music
  if (keyWentDown("y")){
      playSound("assets/IMG_4626.TRIM.mp3");
    }
    
    if(keyWentDown("r")){
 playSound("assets/IMG_4634.TRIM.mp3");
    }
  
   //ghost of sparta     
  if(keyDown("h")){
    kratos.setAnimation("ghost of sparta");
    background("slategray");
    lee.visible=false;
    kratos.x=250;
    textSize(20);
    text("I am no longer your monster Athena", 50,85);
    textSize(15);
    text("Press TAB", 190,12);
    //athena's ghost
      if(keyWentDown("TAB")){
      playSound("assets/IMG_4624.TRIM.mp3");
      
    }
  } else{
    kratos.setAnimation("decent kratos");
    lee.visible=true;
    kratos.x=332;
  }
  
  //kratos noises
  if (keyWentDown("ALT")) {
     playSound("assets/IMG_4619.TRIM 2.mp3", false);
   }
  //kratos sound
   if (keyWentDown("z")) {
     playSound("assets/IMG_4621.TRIM.mp3", false);
   }
} else {
  gauntlet.visible=true;
  kratos.visible=false;
}
   //stopsound
   if(keyWentDown("space")){
     stopSound("assets/category_collect/retro_game_health_pickup_1.mp3");
   }
//thanos sound
  if(keyWentDown("x")){
    playSound("assets/IMG_4629.TRIM.mp3");
  }
   if(keyWentDown("c")){
    playSound("assets/IMG_4631.TRIM.mp3");
     }
  //lightning
  if(keyWentDown("t")){
  playSound("Thunder & Lightning Sound Effects [High Quality].mp3",false);
}
 }
 
 //lee movement
  if (keyDown("i")){
    lee.y=lee.y-3;
  }
   if (keyDown("l")){
     lee.y=lee.y+3;
   }
   //leeparameters
   if (lee.y > 269) {
    lee.y = 260;
  }
  
  //appearence change
  if(keyDown("j")){
    lee.setAnimation("stan_web_2");
  } else{
    lee.setAnimation("stan_lightning");
  }
  
  //sounds
  if(keyWentDown("b")){
    playSound("assets/stan.mp3", false);
  }
  
  if(keyWentDown("v")){
    playSound("assets/i am.mp3", false);
  }
  
  if (keyDown("v")) {
    background(rgb(250,150,0));
    stan.visible=false;
    textSize(30);
    text("I Am Iron Man.",129,100);
  }else{
    stan.visble=true;
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
