(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Animação Final_atlas_", frames: [[862,157,30,30],[862,0,162,155],[600,261,242,242],[237,518,200,200],[336,270,237,246],[575,505,216,216],[0,605,144,145],[336,0,262,268],[0,368,235,235],[844,261,176,177],[439,518,133,132],[0,0,334,366],[793,505,216,215],[439,652,108,103],[600,0,260,259]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._01 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._0201 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._07 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._08 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._09 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._45454 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Piloto01 = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rtft = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ttu = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.yuht = function() {
	this.spriteSheet = ss["Animação Final_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Tween515 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween514 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween513 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween511 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween510 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween508 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween507 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween506 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween505 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-14.8,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.8,31,29.6);


(lib.Tween504 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween503 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween502 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween501 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween499 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween498 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween497 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween496 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween495 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween494 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween493 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween492 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween491 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween490 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween489 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween488 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween487 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween486 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween485 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween484 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween483 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween482 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween481 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween479 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween478 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween477 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween476 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween475 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween474 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween473 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween472 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween471 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween470 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween469 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween468 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween467 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween466 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween465 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween464 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween463 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween462 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween461 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-68.9,144.1,138);


(lib.Tween460 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween459 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween458 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween457 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween456 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween455 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween454 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween453 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween452 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween451 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween450 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween449 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween448 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween447 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween446 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween445 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween444 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween443 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween442 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween441 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween440 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween439 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48.2,46.1);


(lib.Tween438 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween437 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween436 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween435 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween434 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween433 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween432 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween431 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween430 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween429 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween428 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,-16.4,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-16.4,32.8,32.8);


(lib.Tween427 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween426 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween425 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween424 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween423 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween422 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween421 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween420 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween419 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween418 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween413 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween412 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween411 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween410 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween409 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween408 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween407 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween406 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween405 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween404 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween403 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween399 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween398 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween397 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween396 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween395 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween394 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween393 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween392 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween391 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween390 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween389 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween388 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween387 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween386 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween385 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween384 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-15.5,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


(lib.Tween383 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween382 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween381 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween380 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween379 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween378 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween377 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween376 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween375 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween374 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween373 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-26.5,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.1);


(lib.Tween372 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween371 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween370 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween369 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween368 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween367 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween366 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween365 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween364 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween363 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween362 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween361 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween360 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween359 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween358 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween357 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween356 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween355 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween354 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween353 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween352 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween351 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween350 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween349 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween348 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween347 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween346 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween345 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween344 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween343 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween342 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween341 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween340 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween339 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween338 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween337 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween336 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween335 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween334 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween332 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween331 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween330 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween329 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._0201();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-44.5,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44.5,93,89);


(lib.Tween328 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween327 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween325 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween324 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween323 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween322 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween319 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween317 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween316 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween315 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween311 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween309 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween308 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween307 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,-22,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22,43.8,44.1);


(lib.Tween306 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween304 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween303 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween299 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween298 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween297 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween296 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-36,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-36,71.6,72.1);


(lib.Tween295 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween294 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween293 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween292 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween291 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween290 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween289 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween288 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween287 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween286 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween285 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.4,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.4,63.5,65);


(lib.Tween284 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween283 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween282 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween281 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween279 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween278 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween277 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween276 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween275 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween274 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Tween273 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween272 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween271 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween270 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween269 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween268 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween267 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween266 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween265 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween264 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween263 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._09();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.1,29.1);


(lib.Tween262 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween261 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween260 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween259 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween258 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween257 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween256 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween254 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween253 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween252 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween251 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween249 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween247 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween246 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween245 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween244 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween242 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween239 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween238 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween237 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween234 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._45454();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-13.3,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.3,26.8,26.6);


(lib.Tween218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-19.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.5,40.9,39);


(lib.Tween196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ttu();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,-24.4,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-24.4,51.3,49);


(lib.Tween185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-25.8,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-25.8,49.7,51.6);


(lib.Tween174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._08();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-15.5,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.5,29.9,31);


(lib.Tween163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtft();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-22.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.3,44.8,44.6);


(lib.Tween152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-26.7,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-26.7,53.5,53.5);


(lib.Tween108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-18.3,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.3,36.4,36.6);


(lib.Tween86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yuht();
	this.instance.parent = this;
	this.instance.setTransform(-27.9,-27.8,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,55.8,55.6);


(lib.Tween64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Tween53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;
	this.instance.setTransform(-51,-52.1,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-52.1,102,104.4);


// stage content:
(lib.Animação = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 12.png
	this.instance = new lib.Tween43("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(447,214.2);

	this.instance_1 = new lib.Tween44("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(449,219.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween45("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(473,205.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween46("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(462,201.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween47("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(466,208.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween48("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(457,219.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween49("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(473,208.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween50("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(466,208.2);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween51("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(457,208.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween52("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(473,208.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween53("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(466,225.2);
	this.instance_10._off = true;

	this.instance_11 = new lib._12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(415,167,0.389,0.389);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:449,y:219.2},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,x:473,y:205.2},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},5).to({_off:true,x:462,y:201.2},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},5).to({_off:true,x:466,y:208.2},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},5).to({_off:true,x:457,y:219.2},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},5).to({_off:true,x:473,y:208.2},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},5).to({_off:true,x:466},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},5).to({_off:true,x:457},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({_off:false},5).to({_off:true,x:473},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},5).to({_off:true,x:466,y:225.2},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},5).to({_off:true,scaleX:0.39,scaleY:0.39,x:415,y:167},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},5).wait(96));

	// 07.png
	this.instance_12 = new lib.Tween54("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(544,28);

	this.instance_13 = new lib.Tween55("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(552,28);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween56("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(544,34);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween57("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(539,28);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween58("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(544,28);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween59("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(551,28);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween60("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(544,34);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween61("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(544,28);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween62("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(539,28);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween63("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(552,28);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween64("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(544,24);
	this.instance_22._off = true;

	this.instance_23 = new lib._07();
	this.instance_23.parent = this;
	this.instance_23.setTransform(524,8,0.2,0.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:552},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:false},4).to({_off:true,x:544,y:34},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},5).to({_off:true,x:539,y:28},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},5).to({_off:true,x:544},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},5).to({_off:true,x:551},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({_off:false},5).to({_off:true,x:544,y:34},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(24).to({_off:false},5).to({_off:true,y:28},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(29).to({_off:false},5).to({_off:true,x:539},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(34).to({_off:false},5).to({_off:true,x:552},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(39).to({_off:false},5).to({_off:true,x:544,y:24},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:524,y:8},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(49).to({_off:false},5).wait(96));

	// yuht.png
	this.instance_24 = new lib.Tween65("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(564.9,78.8);

	this.instance_25 = new lib.Tween66("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(555.9,84.8);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween67("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(571.9,78.8);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween68("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(564.9,78.8);
	this.instance_27._off = true;

	this.instance_28 = new lib.Tween69("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(558.9,78.8);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween70("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(576.9,71.8);
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween71("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(571.9,84.8);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween72("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(558.9,78.8);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween73("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(564.9,78.8);
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween74("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(571.9,78.8);
	this.instance_33._off = true;

	this.instance_34 = new lib.Tween75("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(558.9,78.8);
	this.instance_34._off = true;

	this.instance_35 = new lib.yuht();
	this.instance_35.parent = this;
	this.instance_35.setTransform(537,51,0.215,0.215);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true,x:555.9,y:84.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:false},4).to({_off:true,x:571.9,y:78.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(4).to({_off:false},5).to({_off:true,x:564.9},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(9).to({_off:false},5).to({_off:true,x:558.9},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({_off:false},5).to({_off:true,x:576.9,y:71.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(19).to({_off:false},5).to({_off:true,x:571.9,y:84.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(24).to({_off:false},5).to({_off:true,x:558.9,y:78.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(29).to({_off:false},5).to({_off:true,x:564.9},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(34).to({_off:false},5).to({_off:true,x:571.9},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(39).to({_off:false},5).to({_off:true,x:558.9},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(44).to({_off:false},5).to({_off:true,scaleX:0.22,scaleY:0.22,x:537,y:51},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(49).to({_off:false},5).wait(96));

	// yuht.png
	this.instance_36 = new lib.Tween76("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(68.9,317.8);

	this.instance_37 = new lib.Tween77("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(74.9,324.8);
	this.instance_37._off = true;

	this.instance_38 = new lib.Tween78("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(59.9,318.8);
	this.instance_38._off = true;

	this.instance_39 = new lib.Tween79("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(79.9,311.8);
	this.instance_39._off = true;

	this.instance_40 = new lib.Tween80("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(68.9,317.8);
	this.instance_40._off = true;

	this.instance_41 = new lib.Tween81("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(54.9,307.8);
	this.instance_41._off = true;

	this.instance_42 = new lib.Tween82("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(68.9,317.8);
	this.instance_42._off = true;

	this.instance_43 = new lib.Tween83("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(74.9,326.8);
	this.instance_43._off = true;

	this.instance_44 = new lib.Tween84("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(68.9,317.8);
	this.instance_44._off = true;

	this.instance_45 = new lib.Tween85("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(59.9,318.8);
	this.instance_45._off = true;

	this.instance_46 = new lib.Tween86("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(78.9,318.8);
	this.instance_46._off = true;

	this.instance_47 = new lib.yuht();
	this.instance_47.parent = this;
	this.instance_47.setTransform(41,290,0.215,0.215);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({_off:true,x:74.9,y:324.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({_off:false},4).to({_off:true,x:59.9,y:318.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(4).to({_off:false},5).to({_off:true,x:79.9,y:311.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(9).to({_off:false},5).to({_off:true,x:68.9,y:317.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(14).to({_off:false},5).to({_off:true,x:54.9,y:307.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(19).to({_off:false},5).to({_off:true,x:68.9,y:317.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(24).to({_off:false},5).to({_off:true,x:74.9,y:326.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(29).to({_off:false},5).to({_off:true,x:68.9,y:317.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(34).to({_off:false},5).to({_off:true,x:59.9,y:318.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(39).to({_off:false},5).to({_off:true,x:78.9},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(44).to({_off:false},5).to({_off:true,scaleX:0.22,scaleY:0.22,x:41,y:290},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(49).to({_off:false},5).wait(96));

	// 16.png
	this.instance_48 = new lib.Tween87("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(36.2,224.3);

	this.instance_49 = new lib.Tween88("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(29.2,224.3);
	this.instance_49._off = true;

	this.instance_50 = new lib.Tween89("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(36.2,224.3);
	this.instance_50._off = true;

	this.instance_51 = new lib.Tween90("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(42.2,220.3);
	this.instance_51._off = true;

	this.instance_52 = new lib.Tween91("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(36.2,224.3);
	this.instance_52._off = true;

	this.instance_53 = new lib.Tween92("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(40.2,229.3);
	this.instance_53._off = true;

	this.instance_54 = new lib.Tween93("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(36.2,224.3);
	this.instance_54._off = true;

	this.instance_55 = new lib.Tween94("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(28.2,218.3);
	this.instance_55._off = true;

	this.instance_56 = new lib.Tween95("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(36.2,224.3);
	this.instance_56._off = true;

	this.instance_57 = new lib.Tween96("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(43.2,224.3);
	this.instance_57._off = true;

	this.instance_58 = new lib.Tween97("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(33.2,224.3);
	this.instance_58._off = true;

	this.instance_59 = new lib._16();
	this.instance_59.parent = this;
	this.instance_59.setTransform(18,206,0.207,0.207);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({_off:true,x:29.2},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({_off:false},4).to({_off:true,x:36.2},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(4).to({_off:false},5).to({_off:true,x:42.2,y:220.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(9).to({_off:false},5).to({_off:true,x:36.2,y:224.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(14).to({_off:false},5).to({_off:true,x:40.2,y:229.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(19).to({_off:false},5).to({_off:true,x:36.2,y:224.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(24).to({_off:false},5).to({_off:true,x:28.2,y:218.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(29).to({_off:false},5).to({_off:true,x:36.2,y:224.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(34).to({_off:false},5).to({_off:true,x:43.2},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(39).to({_off:false},5).to({_off:true,x:33.2},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(44).to({_off:false},5).to({_off:true,scaleX:0.21,scaleY:0.21,x:18,y:206},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(49).to({_off:false},5).wait(96));

	// 16.png
	this.instance_60 = new lib.Tween98("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(92.2,502.3);

	this.instance_61 = new lib.Tween99("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(99.2,500.3);
	this.instance_61._off = true;

	this.instance_62 = new lib.Tween100("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(86.2,507.3);
	this.instance_62._off = true;

	this.instance_63 = new lib.Tween101("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(92.2,502.3);
	this.instance_63._off = true;

	this.instance_64 = new lib.Tween102("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(100.2,508.3);
	this.instance_64._off = true;

	this.instance_65 = new lib.Tween103("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(92.2,502.3);
	this.instance_65._off = true;

	this.instance_66 = new lib.Tween104("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(86.2,498.3);
	this.instance_66._off = true;

	this.instance_67 = new lib.Tween105("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(93.2,509.3);
	this.instance_67._off = true;

	this.instance_68 = new lib.Tween106("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(90.2,496.3);
	this.instance_68._off = true;

	this.instance_69 = new lib.Tween107("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(99.2,501.3);
	this.instance_69._off = true;

	this.instance_70 = new lib.Tween108("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(87.2,507.3);
	this.instance_70._off = true;

	this.instance_71 = new lib._16();
	this.instance_71.parent = this;
	this.instance_71.setTransform(74,484,0.207,0.207);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true,x:99.2,y:500.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).to({_off:false},4).to({_off:true,x:86.2,y:507.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(4).to({_off:false},5).to({_off:true,x:92.2,y:502.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(9).to({_off:false},5).to({_off:true,x:100.2,y:508.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(14).to({_off:false},5).to({_off:true,x:92.2,y:502.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(19).to({_off:false},5).to({_off:true,x:86.2,y:498.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(24).to({_off:false},5).to({_off:true,x:93.2,y:509.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(29).to({_off:false},5).to({_off:true,x:90.2,y:496.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(34).to({_off:false},5).to({_off:true,x:99.2,y:501.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(39).to({_off:false},5).to({_off:true,x:87.2,y:507.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(44).to({_off:false},5).to({_off:true,scaleX:0.21,scaleY:0.21,x:74,y:484},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(49).to({_off:false},5).wait(96));

	// 03.png
	this.instance_72 = new lib.Tween109("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(565.8,139.8);

	this.instance_73 = new lib.Tween110("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(556.8,159.8);
	this.instance_73._off = true;

	this.instance_74 = new lib.Tween111("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(575.8,156.8);
	this.instance_74._off = true;

	this.instance_75 = new lib.Tween112("synched",0);
	this.instance_75.parent = this;
	this.instance_75.setTransform(559.8,135.8);
	this.instance_75._off = true;

	this.instance_76 = new lib.Tween113("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(576.8,133.8);
	this.instance_76._off = true;

	this.instance_77 = new lib.Tween114("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(571.8,148.8);
	this.instance_77._off = true;

	this.instance_78 = new lib.Tween115("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(558.8,142.8);
	this.instance_78._off = true;

	this.instance_79 = new lib.Tween116("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(567.8,148.8);
	this.instance_79._off = true;

	this.instance_80 = new lib.Tween117("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(559.8,146.8);
	this.instance_80._off = true;

	this.instance_81 = new lib.Tween118("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(576.8,134.8);
	this.instance_81._off = true;

	this.instance_82 = new lib.Tween119("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(557.8,134.8);
	this.instance_82._off = true;

	this.instance_83 = new lib._03();
	this.instance_83.parent = this;
	this.instance_83.setTransform(539,113,0.221,0.221);
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({_off:true,x:556.8,y:159.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({_off:false},4).to({_off:true,x:575.8,y:156.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(4).to({_off:false},5).to({_off:true,x:559.8,y:135.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(9).to({_off:false},5).to({_off:true,x:576.8,y:133.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(14).to({_off:false},5).to({_off:true,x:571.8,y:148.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(19).to({_off:false},5).to({_off:true,x:558.8,y:142.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(24).to({_off:false},5).to({_off:true,x:567.8,y:148.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(29).to({_off:false},5).to({_off:true,x:559.8,y:146.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(34).to({_off:false},5).to({_off:true,x:576.8,y:134.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(39).to({_off:false},5).to({_off:true,x:557.8},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(44).to({_off:false},5).to({_off:true,scaleX:0.22,scaleY:0.22,x:539,y:113},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(49).to({_off:false},5).wait(96));

	// 03.png
	this.instance_84 = new lib.Tween120("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(33.8,169.8);

	this.instance_85 = new lib.Tween121("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(39.8,175.8);
	this.instance_85._off = true;

	this.instance_86 = new lib.Tween122("synched",0);
	this.instance_86.parent = this;
	this.instance_86.setTransform(27.8,167.8);
	this.instance_86._off = true;

	this.instance_87 = new lib.Tween123("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(42.8,171.8);
	this.instance_87._off = true;

	this.instance_88 = new lib.Tween124("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(26.8,179.8);
	this.instance_88._off = true;

	this.instance_89 = new lib.Tween125("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(38.8,179.8);
	this.instance_89._off = true;

	this.instance_90 = new lib.Tween126("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(40.8,169.8);
	this.instance_90._off = true;

	this.instance_91 = new lib.Tween127("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(25.8,173.8);
	this.instance_91._off = true;

	this.instance_92 = new lib.Tween128("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(42.8,177.8);
	this.instance_92._off = true;

	this.instance_93 = new lib.Tween129("synched",0);
	this.instance_93.parent = this;
	this.instance_93.setTransform(28.8,166.8);
	this.instance_93._off = true;

	this.instance_94 = new lib.Tween130("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(38.8,175.8);
	this.instance_94._off = true;

	this.instance_95 = new lib._03();
	this.instance_95.parent = this;
	this.instance_95.setTransform(7,143,0.221,0.221);
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({_off:true,x:39.8,y:175.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_85).to({_off:false},4).to({_off:true,x:27.8,y:167.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(4).to({_off:false},5).to({_off:true,x:42.8,y:171.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(9).to({_off:false},5).to({_off:true,x:26.8,y:179.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(14).to({_off:false},5).to({_off:true,x:38.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(19).to({_off:false},5).to({_off:true,x:40.8,y:169.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(24).to({_off:false},5).to({_off:true,x:25.8,y:173.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(29).to({_off:false},5).to({_off:true,x:42.8,y:177.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(34).to({_off:false},5).to({_off:true,x:28.8,y:166.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(39).to({_off:false},5).to({_off:true,x:38.8,y:175.8},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(44).to({_off:false},5).to({_off:true,scaleX:0.22,scaleY:0.22,x:7,y:143},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(49).to({_off:false},5).wait(96));

	// 03.png
	this.instance_96 = new lib.Tween131("synched",0);
	this.instance_96.parent = this;
	this.instance_96.setTransform(158.8,397.8);

	this.instance_97 = new lib.Tween132("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(164.8,388.8);
	this.instance_97._off = true;

	this.instance_98 = new lib.Tween133("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(147.8,381.8);
	this.instance_98._off = true;

	this.instance_99 = new lib.Tween134("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(164.8,400.8);
	this.instance_99._off = true;

	this.instance_100 = new lib.Tween135("synched",0);
	this.instance_100.parent = this;
	this.instance_100.setTransform(166.8,391.8);
	this.instance_100._off = true;

	this.instance_101 = new lib.Tween136("synched",0);
	this.instance_101.parent = this;
	this.instance_101.setTransform(156.8,400.8);
	this.instance_101._off = true;

	this.instance_102 = new lib.Tween137("synched",0);
	this.instance_102.parent = this;
	this.instance_102.setTransform(158.8,387.8);
	this.instance_102._off = true;

	this.instance_103 = new lib.Tween138("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(169.8,392.8);
	this.instance_103._off = true;

	this.instance_104 = new lib.Tween139("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(158.8,393.8);
	this.instance_104._off = true;

	this.instance_105 = new lib.Tween140("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(161.8,401.8);
	this.instance_105._off = true;

	this.instance_106 = new lib.Tween141("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(164.8,395.8);
	this.instance_106._off = true;

	this.instance_107 = new lib._03();
	this.instance_107.parent = this;
	this.instance_107.setTransform(132,371,0.221,0.221);
	this.instance_107._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).to({_off:true,x:164.8,y:388.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_97).to({_off:false},4).to({_off:true,x:147.8,y:381.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(4).to({_off:false},5).to({_off:true,x:164.8,y:400.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(9).to({_off:false},5).to({_off:true,x:166.8,y:391.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(14).to({_off:false},5).to({_off:true,x:156.8,y:400.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(19).to({_off:false},5).to({_off:true,x:158.8,y:387.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(24).to({_off:false},5).to({_off:true,x:169.8,y:392.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(29).to({_off:false},5).to({_off:true,x:158.8,y:393.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(34).to({_off:false},5).to({_off:true,x:161.8,y:401.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(39).to({_off:false},5).to({_off:true,x:164.8,y:395.8},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(44).to({_off:false},5).to({_off:true,scaleX:0.22,scaleY:0.22,x:132,y:371},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(49).to({_off:false},5).wait(96));

	// 07.png
	this.instance_108 = new lib.Tween142("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(469,477);

	this.instance_109 = new lib.Tween143("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(474,469);
	this.instance_109._off = true;

	this.instance_110 = new lib.Tween144("synched",0);
	this.instance_110.parent = this;
	this.instance_110.setTransform(478,483);
	this.instance_110._off = true;

	this.instance_111 = new lib.Tween145("synched",0);
	this.instance_111.parent = this;
	this.instance_111.setTransform(462,472);
	this.instance_111._off = true;

	this.instance_112 = new lib.Tween146("synched",0);
	this.instance_112.parent = this;
	this.instance_112.setTransform(477,475);
	this.instance_112._off = true;

	this.instance_113 = new lib.Tween147("synched",0);
	this.instance_113.parent = this;
	this.instance_113.setTransform(465,483);
	this.instance_113._off = true;

	this.instance_114 = new lib.Tween148("synched",0);
	this.instance_114.parent = this;
	this.instance_114.setTransform(476,479);
	this.instance_114._off = true;

	this.instance_115 = new lib.Tween149("synched",0);
	this.instance_115.parent = this;
	this.instance_115.setTransform(469,473);
	this.instance_115._off = true;

	this.instance_116 = new lib.Tween150("synched",0);
	this.instance_116.parent = this;
	this.instance_116.setTransform(467,485);
	this.instance_116._off = true;

	this.instance_117 = new lib.Tween151("synched",0);
	this.instance_117.parent = this;
	this.instance_117.setTransform(474,471);
	this.instance_117._off = true;

	this.instance_118 = new lib.Tween152("synched",0);
	this.instance_118.parent = this;
	this.instance_118.setTransform(463,474);
	this.instance_118._off = true;

	this.instance_119 = new lib._07();
	this.instance_119.parent = this;
	this.instance_119.setTransform(449,457,0.2,0.2);
	this.instance_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_108).to({_off:true,x:474,y:469},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_109).to({_off:false},4).to({_off:true,x:478,y:483},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_110).wait(4).to({_off:false},5).to({_off:true,x:462,y:472},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(9).to({_off:false},5).to({_off:true,x:477,y:475},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(14).to({_off:false},5).to({_off:true,x:465,y:483},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_113).wait(19).to({_off:false},5).to({_off:true,x:476,y:479},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(24).to({_off:false},5).to({_off:true,x:469,y:473},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_115).wait(29).to({_off:false},5).to({_off:true,x:467,y:485},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_116).wait(34).to({_off:false},5).to({_off:true,x:474,y:471},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(39).to({_off:false},5).to({_off:true,x:463,y:474},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_118).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:449,y:457},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(49).to({_off:false},5).wait(96));

	// rtft.png
	this.instance_120 = new lib.Tween153("synched",0);
	this.instance_120.parent = this;
	this.instance_120.setTransform(508.4,126.3);

	this.instance_121 = new lib.Tween154("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(498.4,138.3);
	this.instance_121._off = true;

	this.instance_122 = new lib.Tween155("synched",0);
	this.instance_122.parent = this;
	this.instance_122.setTransform(521.4,115.3);
	this.instance_122._off = true;

	this.instance_123 = new lib.Tween156("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(501.4,119.3);
	this.instance_123._off = true;

	this.instance_124 = new lib.Tween157("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(517.4,138.3);
	this.instance_124._off = true;

	this.instance_125 = new lib.Tween158("synched",0);
	this.instance_125.parent = this;
	this.instance_125.setTransform(516.4,126.3);
	this.instance_125._off = true;

	this.instance_126 = new lib.Tween159("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(499.4,132.3);
	this.instance_126._off = true;

	this.instance_127 = new lib.Tween160("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(517.4,116.3);
	this.instance_127._off = true;

	this.instance_128 = new lib.Tween161("synched",0);
	this.instance_128.parent = this;
	this.instance_128.setTransform(510.4,135.3);
	this.instance_128._off = true;

	this.instance_129 = new lib.Tween162("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(503.4,118.3);
	this.instance_129._off = true;

	this.instance_130 = new lib.Tween163("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(508.4,130.3);
	this.instance_130._off = true;

	this.instance_131 = new lib.rtft();
	this.instance_131.parent = this;
	this.instance_131.setTransform(486,104,0.207,0.207);
	this.instance_131._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_120).to({_off:true,x:498.4,y:138.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_121).to({_off:false},4).to({_off:true,x:521.4,y:115.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(4).to({_off:false},5).to({_off:true,x:501.4,y:119.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_123).wait(9).to({_off:false},5).to({_off:true,x:517.4,y:138.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(14).to({_off:false},5).to({_off:true,x:516.4,y:126.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(19).to({_off:false},5).to({_off:true,x:499.4,y:132.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(24).to({_off:false},5).to({_off:true,x:517.4,y:116.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(29).to({_off:false},5).to({_off:true,x:510.4,y:135.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(34).to({_off:false},5).to({_off:true,x:503.4,y:118.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(39).to({_off:false},5).to({_off:true,x:508.4,y:130.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_130).wait(44).to({_off:false},5).to({_off:true,scaleX:0.21,scaleY:0.21,x:486,y:104},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(49).to({_off:false},5).wait(96));

	// 08.png
	this.instance_132 = new lib.Tween164("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(138.9,92.5);

	this.instance_133 = new lib.Tween165("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(138.9,100.5);
	this.instance_133._off = true;

	this.instance_134 = new lib.Tween166("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(146.9,83.5);
	this.instance_134._off = true;

	this.instance_135 = new lib.Tween167("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(129.9,99.5);
	this.instance_135._off = true;

	this.instance_136 = new lib.Tween168("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(149.9,88.5);
	this.instance_136._off = true;

	this.instance_137 = new lib.Tween169("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(132.9,88.5);
	this.instance_137._off = true;

	this.instance_138 = new lib.Tween170("synched",0);
	this.instance_138.parent = this;
	this.instance_138.setTransform(141.9,102.5);
	this.instance_138._off = true;

	this.instance_139 = new lib.Tween171("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(125.9,95.5);
	this.instance_139._off = true;

	this.instance_140 = new lib.Tween172("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(138.9,92.5);
	this.instance_140._off = true;

	this.instance_141 = new lib.Tween173("synched",0);
	this.instance_141.parent = this;
	this.instance_141.setTransform(152.9,85.5);
	this.instance_141._off = true;

	this.instance_142 = new lib.Tween174("synched",0);
	this.instance_142.parent = this;
	this.instance_142.setTransform(132.9,102.5);
	this.instance_142._off = true;

	this.instance_143 = new lib._08();
	this.instance_143.parent = this;
	this.instance_143.setTransform(124,77,0.126,0.126);
	this.instance_143._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_132).to({_off:true,y:100.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_133).to({_off:false},4).to({_off:true,x:146.9,y:83.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(4).to({_off:false},5).to({_off:true,x:129.9,y:99.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(9).to({_off:false},5).to({_off:true,x:149.9,y:88.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(14).to({_off:false},5).to({_off:true,x:132.9},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(19).to({_off:false},5).to({_off:true,x:141.9,y:102.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_138).wait(24).to({_off:false},5).to({_off:true,x:125.9,y:95.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_139).wait(29).to({_off:false},5).to({_off:true,x:138.9,y:92.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(34).to({_off:false},5).to({_off:true,x:152.9,y:85.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_141).wait(39).to({_off:false},5).to({_off:true,x:132.9,y:102.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(44).to({_off:false},5).to({_off:true,scaleX:0.13,scaleY:0.13,x:124,y:77},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(49).to({_off:false},5).wait(96));

	// 08.png
	this.instance_144 = new lib.Tween175("synched",0);
	this.instance_144.parent = this;
	this.instance_144.setTransform(460.9,410.8);

	this.instance_145 = new lib.Tween176("synched",0);
	this.instance_145.parent = this;
	this.instance_145.setTransform(468.9,397.8);
	this.instance_145._off = true;

	this.instance_146 = new lib.Tween177("synched",0);
	this.instance_146.parent = this;
	this.instance_146.setTransform(454.9,413.8);
	this.instance_146._off = true;

	this.instance_147 = new lib.Tween178("synched",0);
	this.instance_147.parent = this;
	this.instance_147.setTransform(456.9,392.8);
	this.instance_147._off = true;

	this.instance_148 = new lib.Tween179("synched",0);
	this.instance_148.parent = this;
	this.instance_148.setTransform(473.9,424.8);
	this.instance_148._off = true;

	this.instance_149 = new lib.Tween180("synched",0);
	this.instance_149.parent = this;
	this.instance_149.setTransform(464.9,388.8);
	this.instance_149._off = true;

	this.instance_150 = new lib.Tween181("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(470.9,405.8);
	this.instance_150._off = true;

	this.instance_151 = new lib.Tween182("synched",0);
	this.instance_151.parent = this;
	this.instance_151.setTransform(460.9,410.8);
	this.instance_151._off = true;

	this.instance_152 = new lib.Tween183("synched",0);
	this.instance_152.parent = this;
	this.instance_152.setTransform(455.9,417.8);
	this.instance_152._off = true;

	this.instance_153 = new lib.Tween184("synched",0);
	this.instance_153.parent = this;
	this.instance_153.setTransform(472.9,421.8);
	this.instance_153._off = true;

	this.instance_154 = new lib.Tween185("synched",0);
	this.instance_154.parent = this;
	this.instance_154.setTransform(460.9,394.8);
	this.instance_154._off = true;

	this.instance_155 = new lib._08();
	this.instance_155.parent = this;
	this.instance_155.setTransform(436,385,0.21,0.21);
	this.instance_155._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_144).to({_off:true,x:468.9,y:397.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_145).to({_off:false},4).to({_off:true,x:454.9,y:413.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(4).to({_off:false},5).to({_off:true,x:456.9,y:392.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_147).wait(9).to({_off:false},5).to({_off:true,x:473.9,y:424.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(14).to({_off:false},5).to({_off:true,x:464.9,y:388.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(19).to({_off:false},5).to({_off:true,x:470.9,y:405.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(24).to({_off:false},5).to({_off:true,x:460.9,y:410.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(29).to({_off:false},5).to({_off:true,x:455.9,y:417.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_152).wait(34).to({_off:false},5).to({_off:true,x:472.9,y:421.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_153).wait(39).to({_off:false},5).to({_off:true,x:460.9,y:394.8},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_154).wait(44).to({_off:false},5).to({_off:true,scaleX:0.21,scaleY:0.21,x:436,y:385},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_155).wait(49).to({_off:false},5).wait(96));

	// ttu.png
	this.instance_156 = new lib.Tween186("synched",0);
	this.instance_156.parent = this;
	this.instance_156.setTransform(525.7,415.5);

	this.instance_157 = new lib.Tween187("synched",0);
	this.instance_157.parent = this;
	this.instance_157.setTransform(540.7,408.5);
	this.instance_157._off = true;

	this.instance_158 = new lib.Tween188("synched",0);
	this.instance_158.parent = this;
	this.instance_158.setTransform(506.7,419.5);
	this.instance_158._off = true;

	this.instance_159 = new lib.Tween189("synched",0);
	this.instance_159.parent = this;
	this.instance_159.setTransform(547.7,414.5);
	this.instance_159._off = true;

	this.instance_160 = new lib.Tween190("synched",0);
	this.instance_160.parent = this;
	this.instance_160.setTransform(522.7,412.5);
	this.instance_160._off = true;

	this.instance_161 = new lib.Tween191("synched",0);
	this.instance_161.parent = this;
	this.instance_161.setTransform(541.7,412.5);
	this.instance_161._off = true;

	this.instance_162 = new lib.Tween192("synched",0);
	this.instance_162.parent = this;
	this.instance_162.setTransform(521.7,408.5);
	this.instance_162._off = true;

	this.instance_163 = new lib.Tween193("synched",0);
	this.instance_163.parent = this;
	this.instance_163.setTransform(545.7,403.5);
	this.instance_163._off = true;

	this.instance_164 = new lib.Tween194("synched",0);
	this.instance_164.parent = this;
	this.instance_164.setTransform(507.7,426.5);
	this.instance_164._off = true;

	this.instance_165 = new lib.Tween195("synched",0);
	this.instance_165.parent = this;
	this.instance_165.setTransform(545.7,410.5);
	this.instance_165._off = true;

	this.instance_166 = new lib.Tween196("synched",0);
	this.instance_166.parent = this;
	this.instance_166.setTransform(508.7,415.5);
	this.instance_166._off = true;

	this.instance_167 = new lib.ttu();
	this.instance_167.parent = this;
	this.instance_167.setTransform(500,391,0.475,0.475);
	this.instance_167._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_156).to({_off:true,x:540.7,y:408.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_157).to({_off:false},4).to({_off:true,x:506.7,y:419.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_158).wait(4).to({_off:false},5).to({_off:true,x:547.7,y:414.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_159).wait(9).to({_off:false},5).to({_off:true,x:522.7,y:412.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_160).wait(14).to({_off:false},5).to({_off:true,x:541.7},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_161).wait(19).to({_off:false},5).to({_off:true,x:521.7,y:408.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_162).wait(24).to({_off:false},5).to({_off:true,x:545.7,y:403.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_163).wait(29).to({_off:false},5).to({_off:true,x:507.7,y:426.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_164).wait(34).to({_off:false},5).to({_off:true,x:545.7,y:410.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_165).wait(39).to({_off:false},5).to({_off:true,x:508.7,y:415.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_166).wait(44).to({_off:false},5).to({_off:true,scaleX:0.48,scaleY:0.48,x:500,y:391},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_167).wait(49).to({_off:false},5).wait(96));

	// ttu.png
	this.instance_168 = new lib.Tween197("synched",0);
	this.instance_168.parent = this;
	this.instance_168.setTransform(74.5,260.5);

	this.instance_169 = new lib.Tween198("synched",0);
	this.instance_169.parent = this;
	this.instance_169.setTransform(78.5,257.5);
	this.instance_169._off = true;

	this.instance_170 = new lib.Tween199("synched",0);
	this.instance_170.parent = this;
	this.instance_170.setTransform(63.5,268.5);
	this.instance_170._off = true;

	this.instance_171 = new lib.Tween200("synched",0);
	this.instance_171.parent = this;
	this.instance_171.setTransform(69.5,249.5);
	this.instance_171._off = true;

	this.instance_172 = new lib.Tween201("synched",0);
	this.instance_172.parent = this;
	this.instance_172.setTransform(76.5,270.5);
	this.instance_172._off = true;

	this.instance_173 = new lib.Tween202("synched",0);
	this.instance_173.parent = this;
	this.instance_173.setTransform(74.5,253.5);
	this.instance_173._off = true;

	this.instance_174 = new lib.Tween203("synched",0);
	this.instance_174.parent = this;
	this.instance_174.setTransform(60.5,269.5);
	this.instance_174._off = true;

	this.instance_175 = new lib.Tween204("synched",0);
	this.instance_175.parent = this;
	this.instance_175.setTransform(88.5,264.5);
	this.instance_175._off = true;

	this.instance_176 = new lib.Tween205("synched",0);
	this.instance_176.parent = this;
	this.instance_176.setTransform(66.5,256.5);
	this.instance_176._off = true;

	this.instance_177 = new lib.Tween206("synched",0);
	this.instance_177.parent = this;
	this.instance_177.setTransform(88.5,269.5);
	this.instance_177._off = true;

	this.instance_178 = new lib.Tween207("synched",0);
	this.instance_178.parent = this;
	this.instance_178.setTransform(71.5,263.5);
	this.instance_178._off = true;

	this.instance_179 = new lib.ttu();
	this.instance_179.parent = this;
	this.instance_179.setTransform(54,241,0.379,0.379);
	this.instance_179._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_168).to({_off:true,x:78.5,y:257.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_169).to({_off:false},4).to({_off:true,x:63.5,y:268.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_170).wait(4).to({_off:false},5).to({_off:true,x:69.5,y:249.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(9).to({_off:false},5).to({_off:true,x:76.5,y:270.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_172).wait(14).to({_off:false},5).to({_off:true,x:74.5,y:253.5},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_173).wait(19).to({_off:false},5).to({_off:true,x:60.5,y:269.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_174).wait(24).to({_off:false},5).to({_off:true,x:88.5,y:264.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_175).wait(29).to({_off:false},5).to({_off:true,x:66.5,y:256.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_176).wait(34).to({_off:false},5).to({_off:true,x:88.5,y:269.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_177).wait(39).to({_off:false},5).to({_off:true,x:71.5,y:263.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_178).wait(44).to({_off:false},5).to({_off:true,scaleX:0.38,scaleY:0.38,x:54,y:241},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_179).wait(49).to({_off:false},5).wait(96));

	// ttu.png
	this.instance_180 = new lib.Tween208("synched",0);
	this.instance_180.parent = this;
	this.instance_180.setTransform(160.7,453.5);

	this.instance_181 = new lib.Tween209("synched",0);
	this.instance_181.parent = this;
	this.instance_181.setTransform(162.7,442.5);
	this.instance_181._off = true;

	this.instance_182 = new lib.Tween210("synched",0);
	this.instance_182.parent = this;
	this.instance_182.setTransform(154.7,436.5);
	this.instance_182._off = true;

	this.instance_183 = new lib.Tween211("synched",0);
	this.instance_183.parent = this;
	this.instance_183.setTransform(163.7,455.5);
	this.instance_183._off = true;

	this.instance_184 = new lib.Tween212("synched",0);
	this.instance_184.parent = this;
	this.instance_184.setTransform(160.7,445.5);
	this.instance_184._off = true;

	this.instance_185 = new lib.Tween213("synched",0);
	this.instance_185.parent = this;
	this.instance_185.setTransform(155.7,463.5);
	this.instance_185._off = true;

	this.instance_186 = new lib.Tween214("synched",0);
	this.instance_186.parent = this;
	this.instance_186.setTransform(167.7,445.5);
	this.instance_186._off = true;

	this.instance_187 = new lib.Tween215("synched",0);
	this.instance_187.parent = this;
	this.instance_187.setTransform(151.7,464.5);
	this.instance_187._off = true;

	this.instance_188 = new lib.Tween216("synched",0);
	this.instance_188.parent = this;
	this.instance_188.setTransform(179.7,459.5);
	this.instance_188._off = true;

	this.instance_189 = new lib.Tween217("synched",0);
	this.instance_189.parent = this;
	this.instance_189.setTransform(149.7,453.5);
	this.instance_189._off = true;

	this.instance_190 = new lib.Tween218("synched",0);
	this.instance_190.parent = this;
	this.instance_190.setTransform(176.7,459.5);
	this.instance_190._off = true;

	this.instance_191 = new lib.ttu();
	this.instance_191.parent = this;
	this.instance_191.setTransform(135,429,0.475,0.475);
	this.instance_191._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_180).to({_off:true,x:162.7,y:442.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_181).to({_off:false},4).to({_off:true,x:154.7,y:436.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_182).wait(4).to({_off:false},5).to({_off:true,x:163.7,y:455.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_183).wait(9).to({_off:false},5).to({_off:true,x:160.7,y:445.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_184).wait(14).to({_off:false},5).to({_off:true,x:155.7,y:463.5},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_185).wait(19).to({_off:false},5).to({_off:true,x:167.7,y:445.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_186).wait(24).to({_off:false},5).to({_off:true,x:151.7,y:464.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_187).wait(29).to({_off:false},5).to({_off:true,x:179.7,y:459.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_188).wait(34).to({_off:false},5).to({_off:true,x:149.7,y:453.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_189).wait(39).to({_off:false},5).to({_off:true,x:176.7,y:459.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_190).wait(44).to({_off:false},5).to({_off:true,scaleX:0.48,scaleY:0.48,x:135,y:429},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_191).wait(49).to({_off:false},5).wait(96));

	// 45454.png
	this.instance_192 = new lib.Tween219("synched",0);
	this.instance_192.parent = this;
	this.instance_192.setTransform(442.4,77.3);

	this.instance_193 = new lib.Tween220("synched",0);
	this.instance_193.parent = this;
	this.instance_193.setTransform(450.4,79.3);
	this.instance_193._off = true;

	this.instance_194 = new lib.Tween221("synched",0);
	this.instance_194.parent = this;
	this.instance_194.setTransform(438.4,69.3);
	this.instance_194._off = true;

	this.instance_195 = new lib.Tween222("synched",0);
	this.instance_195.parent = this;
	this.instance_195.setTransform(432.4,87.3);
	this.instance_195._off = true;

	this.instance_196 = new lib.Tween223("synched",0);
	this.instance_196.parent = this;
	this.instance_196.setTransform(446.4,69.3);
	this.instance_196._off = true;

	this.instance_197 = new lib.Tween224("synched",0);
	this.instance_197.parent = this;
	this.instance_197.setTransform(450.4,79.3);
	this.instance_197._off = true;

	this.instance_198 = new lib.Tween225("synched",0);
	this.instance_198.parent = this;
	this.instance_198.setTransform(435.4,70.3);
	this.instance_198._off = true;

	this.instance_199 = new lib.Tween226("synched",0);
	this.instance_199.parent = this;
	this.instance_199.setTransform(435.4,84.3);
	this.instance_199._off = true;

	this.instance_200 = new lib.Tween227("synched",0);
	this.instance_200.parent = this;
	this.instance_200.setTransform(450.4,78.3);
	this.instance_200._off = true;

	this.instance_201 = new lib.Tween228("synched",0);
	this.instance_201.parent = this;
	this.instance_201.setTransform(446.4,68.3);
	this.instance_201._off = true;

	this.instance_202 = new lib.Tween229("synched",0);
	this.instance_202.parent = this;
	this.instance_202.setTransform(436.4,83.3);
	this.instance_202._off = true;

	this.instance_203 = new lib._45454();
	this.instance_203.parent = this;
	this.instance_203.setTransform(429,64,0.202,0.202);
	this.instance_203._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_192).to({_off:true,x:450.4,y:79.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_193).to({_off:false},4).to({_off:true,x:438.4,y:69.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_194).wait(4).to({_off:false},5).to({_off:true,x:432.4,y:87.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_195).wait(9).to({_off:false},5).to({_off:true,x:446.4,y:69.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_196).wait(14).to({_off:false},5).to({_off:true,x:450.4,y:79.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_197).wait(19).to({_off:false},5).to({_off:true,x:435.4,y:70.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_198).wait(24).to({_off:false},5).to({_off:true,y:84.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_199).wait(29).to({_off:false},5).to({_off:true,x:450.4,y:78.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_200).wait(34).to({_off:false},5).to({_off:true,x:446.4,y:68.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_201).wait(39).to({_off:false},5).to({_off:true,x:436.4,y:83.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_202).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:429,y:64},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_203).wait(49).to({_off:false},5).wait(96));

	// 45454.png
	this.instance_204 = new lib.Tween230("synched",0);
	this.instance_204.parent = this;
	this.instance_204.setTransform(178.4,104.3);

	this.instance_205 = new lib.Tween231("synched",0);
	this.instance_205.parent = this;
	this.instance_205.setTransform(168.4,108.3);
	this.instance_205._off = true;

	this.instance_206 = new lib.Tween232("synched",0);
	this.instance_206.parent = this;
	this.instance_206.setTransform(194.4,100.3);
	this.instance_206._off = true;

	this.instance_207 = new lib.Tween233("synched",0);
	this.instance_207.parent = this;
	this.instance_207.setTransform(176.4,95.3);
	this.instance_207._off = true;

	this.instance_208 = new lib.Tween234("synched",0);
	this.instance_208.parent = this;
	this.instance_208.setTransform(182.4,114.3);
	this.instance_208._off = true;

	this.instance_209 = new lib.Tween235("synched",0);
	this.instance_209.parent = this;
	this.instance_209.setTransform(158.4,108.3);
	this.instance_209._off = true;

	this.instance_210 = new lib.Tween236("synched",0);
	this.instance_210.parent = this;
	this.instance_210.setTransform(194.4,99.3);
	this.instance_210._off = true;

	this.instance_211 = new lib.Tween237("synched",0);
	this.instance_211.parent = this;
	this.instance_211.setTransform(159.4,102.3);
	this.instance_211._off = true;

	this.instance_212 = new lib.Tween238("synched",0);
	this.instance_212.parent = this;
	this.instance_212.setTransform(183.4,115.3);
	this.instance_212._off = true;

	this.instance_213 = new lib.Tween239("synched",0);
	this.instance_213.parent = this;
	this.instance_213.setTransform(186.4,95.3);
	this.instance_213._off = true;

	this.instance_214 = new lib.Tween240("synched",0);
	this.instance_214.parent = this;
	this.instance_214.setTransform(167.4,111.3);
	this.instance_214._off = true;

	this.instance_215 = new lib._45454();
	this.instance_215.parent = this;
	this.instance_215.setTransform(165,91,0.202,0.202);
	this.instance_215._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_204).to({_off:true,x:168.4,y:108.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_205).to({_off:false},4).to({_off:true,x:194.4,y:100.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_206).wait(4).to({_off:false},5).to({_off:true,x:176.4,y:95.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_207).wait(9).to({_off:false},5).to({_off:true,x:182.4,y:114.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_208).wait(14).to({_off:false},5).to({_off:true,x:158.4,y:108.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_209).wait(19).to({_off:false},5).to({_off:true,x:194.4,y:99.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_210).wait(24).to({_off:false},5).to({_off:true,x:159.4,y:102.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_211).wait(29).to({_off:false},5).to({_off:true,x:183.4,y:115.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_212).wait(34).to({_off:false},5).to({_off:true,x:186.4,y:95.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_213).wait(39).to({_off:false},5).to({_off:true,x:167.4,y:111.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_214).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:165,y:91},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_215).wait(49).to({_off:false},5).wait(96));

	// 45454.png
	this.instance_216 = new lib.Tween241("synched",0);
	this.instance_216.parent = this;
	this.instance_216.setTransform(421.4,374.3);

	this.instance_217 = new lib.Tween242("synched",0);
	this.instance_217.parent = this;
	this.instance_217.setTransform(432.4,379.3);
	this.instance_217._off = true;

	this.instance_218 = new lib.Tween243("synched",0);
	this.instance_218.parent = this;
	this.instance_218.setTransform(406.4,364.3);
	this.instance_218._off = true;

	this.instance_219 = new lib.Tween244("synched",0);
	this.instance_219.parent = this;
	this.instance_219.setTransform(415.4,390.3);
	this.instance_219._off = true;

	this.instance_220 = new lib.Tween245("synched",0);
	this.instance_220.parent = this;
	this.instance_220.setTransform(441.4,371.3);
	this.instance_220._off = true;

	this.instance_221 = new lib.Tween246("synched",0);
	this.instance_221.parent = this;
	this.instance_221.setTransform(404.4,374.3);
	this.instance_221._off = true;

	this.instance_222 = new lib.Tween247("synched",0);
	this.instance_222.parent = this;
	this.instance_222.setTransform(452.4,369.3);
	this.instance_222._off = true;

	this.instance_223 = new lib.Tween248("synched",0);
	this.instance_223.parent = this;
	this.instance_223.setTransform(414.4,363.3);
	this.instance_223._off = true;

	this.instance_224 = new lib.Tween249("synched",0);
	this.instance_224.parent = this;
	this.instance_224.setTransform(428.4,384.3);
	this.instance_224._off = true;

	this.instance_225 = new lib.Tween250("synched",0);
	this.instance_225.parent = this;
	this.instance_225.setTransform(408.4,393.3);
	this.instance_225._off = true;

	this.instance_226 = new lib.Tween251("synched",0);
	this.instance_226.parent = this;
	this.instance_226.setTransform(437.4,363.3);
	this.instance_226._off = true;

	this.instance_227 = new lib._45454();
	this.instance_227.parent = this;
	this.instance_227.setTransform(408,361,0.202,0.202);
	this.instance_227._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_216).to({_off:true,x:432.4,y:379.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_217).to({_off:false},4).to({_off:true,x:406.4,y:364.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_218).wait(4).to({_off:false},5).to({_off:true,x:415.4,y:390.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_219).wait(9).to({_off:false},5).to({_off:true,x:441.4,y:371.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_220).wait(14).to({_off:false},5).to({_off:true,x:404.4,y:374.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_221).wait(19).to({_off:false},5).to({_off:true,x:452.4,y:369.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_222).wait(24).to({_off:false},5).to({_off:true,x:414.4,y:363.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_223).wait(29).to({_off:false},5).to({_off:true,x:428.4,y:384.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_224).wait(34).to({_off:false},5).to({_off:true,x:408.4,y:393.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_225).wait(39).to({_off:false},5).to({_off:true,x:437.4,y:363.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_226).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:408,y:361},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_227).wait(49).to({_off:false},5).wait(96));

	// 45454.png
	this.instance_228 = new lib.Tween252("synched",0);
	this.instance_228.parent = this;
	this.instance_228.setTransform(110.4,464.3);

	this.instance_229 = new lib.Tween253("synched",0);
	this.instance_229.parent = this;
	this.instance_229.setTransform(121.4,453.3);
	this.instance_229._off = true;

	this.instance_230 = new lib.Tween254("synched",0);
	this.instance_230.parent = this;
	this.instance_230.setTransform(93.4,472.3);
	this.instance_230._off = true;

	this.instance_231 = new lib.Tween255("synched",0);
	this.instance_231.parent = this;
	this.instance_231.setTransform(123.4,479.3);
	this.instance_231._off = true;

	this.instance_232 = new lib.Tween256("synched",0);
	this.instance_232.parent = this;
	this.instance_232.setTransform(97.4,461.3);
	this.instance_232._off = true;

	this.instance_233 = new lib.Tween257("synched",0);
	this.instance_233.parent = this;
	this.instance_233.setTransform(116.4,472.3);
	this.instance_233._off = true;

	this.instance_234 = new lib.Tween258("synched",0);
	this.instance_234.parent = this;
	this.instance_234.setTransform(91.4,466.3);
	this.instance_234._off = true;

	this.instance_235 = new lib.Tween259("synched",0);
	this.instance_235.parent = this;
	this.instance_235.setTransform(112.4,455.3);
	this.instance_235._off = true;

	this.instance_236 = new lib.Tween260("synched",0);
	this.instance_236.parent = this;
	this.instance_236.setTransform(110.4,470.3);
	this.instance_236._off = true;

	this.instance_237 = new lib.Tween261("synched",0);
	this.instance_237.parent = this;
	this.instance_237.setTransform(86.4,462.3);
	this.instance_237._off = true;

	this.instance_238 = new lib.Tween262("synched",0);
	this.instance_238.parent = this;
	this.instance_238.setTransform(110.4,464.3);
	this.instance_238._off = true;

	this.instance_239 = new lib._45454();
	this.instance_239.parent = this;
	this.instance_239.setTransform(97,451,0.202,0.202);
	this.instance_239._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_228).to({_off:true,x:121.4,y:453.3},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_229).to({_off:false},4).to({_off:true,x:93.4,y:472.3},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_230).wait(4).to({_off:false},5).to({_off:true,x:123.4,y:479.3},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_231).wait(9).to({_off:false},5).to({_off:true,x:97.4,y:461.3},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_232).wait(14).to({_off:false},5).to({_off:true,x:116.4,y:472.3},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_233).wait(19).to({_off:false},5).to({_off:true,x:91.4,y:466.3},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_234).wait(24).to({_off:false},5).to({_off:true,x:112.4,y:455.3},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_235).wait(29).to({_off:false},5).to({_off:true,x:110.4,y:470.3},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_236).wait(34).to({_off:false},5).to({_off:true,x:86.4,y:462.3},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_237).wait(39).to({_off:false},5).to({_off:true,x:110.4,y:464.3},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_238).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:97,y:451},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_239).wait(49).to({_off:false},5).wait(96));

	// 09.png
	this.instance_240 = new lib.Tween263("synched",0);
	this.instance_240.parent = this;
	this.instance_240.setTransform(573.6,525.6);

	this.instance_241 = new lib.Tween264("synched",0);
	this.instance_241.parent = this;
	this.instance_241.setTransform(573.6,512.6);
	this.instance_241._off = true;

	this.instance_242 = new lib.Tween265("synched",0);
	this.instance_242.parent = this;
	this.instance_242.setTransform(563.6,520.6);
	this.instance_242._off = true;

	this.instance_243 = new lib.Tween266("synched",0);
	this.instance_243.parent = this;
	this.instance_243.setTransform(584.6,514.6);
	this.instance_243._off = true;

	this.instance_244 = new lib.Tween267("synched",0);
	this.instance_244.parent = this;
	this.instance_244.setTransform(560.6,522.6);
	this.instance_244._off = true;

	this.instance_245 = new lib.Tween268("synched",0);
	this.instance_245.parent = this;
	this.instance_245.setTransform(567.6,513.6);
	this.instance_245._off = true;

	this.instance_246 = new lib.Tween269("synched",0);
	this.instance_246.parent = this;
	this.instance_246.setTransform(590.6,525.6);
	this.instance_246._off = true;

	this.instance_247 = new lib.Tween270("synched",0);
	this.instance_247.parent = this;
	this.instance_247.setTransform(566.6,514.6);
	this.instance_247._off = true;

	this.instance_248 = new lib.Tween271("synched",0);
	this.instance_248.parent = this;
	this.instance_248.setTransform(586.6,510.6);
	this.instance_248._off = true;

	this.instance_249 = new lib.Tween272("synched",0);
	this.instance_249.parent = this;
	this.instance_249.setTransform(564.6,521.6);
	this.instance_249._off = true;

	this.instance_250 = new lib.Tween273("synched",0);
	this.instance_250.parent = this;
	this.instance_250.setTransform(576.6,517.6);
	this.instance_250._off = true;

	this.instance_251 = new lib._09();
	this.instance_251.parent = this;
	this.instance_251.setTransform(559,511,0.135,0.135);
	this.instance_251._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_240).to({_off:true,y:512.6},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_241).to({_off:false},4).to({_off:true,x:563.6,y:520.6},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_242).wait(4).to({_off:false},5).to({_off:true,x:584.6,y:514.6},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_243).wait(9).to({_off:false},5).to({_off:true,x:560.6,y:522.6},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_244).wait(14).to({_off:false},5).to({_off:true,x:567.6,y:513.6},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_245).wait(19).to({_off:false},5).to({_off:true,x:590.6,y:525.6},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_246).wait(24).to({_off:false},5).to({_off:true,x:566.6,y:514.6},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_247).wait(29).to({_off:false},5).to({_off:true,x:586.6,y:510.6},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_248).wait(34).to({_off:false},5).to({_off:true,x:564.6,y:521.6},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_249).wait(39).to({_off:false},5).to({_off:true,x:576.6,y:517.6},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_250).wait(44).to({_off:false},5).to({_off:true,scaleX:0.14,scaleY:0.14,x:559,y:511},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_251).wait(49).to({_off:false},5).wait(96));

	// 09.png
	this.instance_252 = new lib.Tween274("synched",0);
	this.instance_252.parent = this;
	this.instance_252.setTransform(455,116);

	this.instance_253 = new lib.Tween275("synched",0);
	this.instance_253.parent = this;
	this.instance_253.setTransform(447,127);
	this.instance_253._off = true;

	this.instance_254 = new lib.Tween276("synched",0);
	this.instance_254.parent = this;
	this.instance_254.setTransform(471,116);
	this.instance_254._off = true;

	this.instance_255 = new lib.Tween277("synched",0);
	this.instance_255.parent = this;
	this.instance_255.setTransform(448,127);
	this.instance_255._off = true;

	this.instance_256 = new lib.Tween278("synched",0);
	this.instance_256.parent = this;
	this.instance_256.setTransform(473,116);
	this.instance_256._off = true;

	this.instance_257 = new lib.Tween279("synched",0);
	this.instance_257.parent = this;
	this.instance_257.setTransform(468,139);
	this.instance_257._off = true;

	this.instance_258 = new lib.Tween280("synched",0);
	this.instance_258.parent = this;
	this.instance_258.setTransform(439,108);
	this.instance_258._off = true;

	this.instance_259 = new lib.Tween281("synched",0);
	this.instance_259.parent = this;
	this.instance_259.setTransform(471,127);
	this.instance_259._off = true;

	this.instance_260 = new lib.Tween282("synched",0);
	this.instance_260.parent = this;
	this.instance_260.setTransform(447,130);
	this.instance_260._off = true;

	this.instance_261 = new lib.Tween283("synched",0);
	this.instance_261.parent = this;
	this.instance_261.setTransform(455,107);
	this.instance_261._off = true;

	this.instance_262 = new lib.Tween284("synched",0);
	this.instance_262.parent = this;
	this.instance_262.setTransform(451,144);
	this.instance_262._off = true;

	this.instance_263 = new lib._09();
	this.instance_263.parent = this;
	this.instance_263.setTransform(433,94,0.204,0.204);
	this.instance_263._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_252).to({_off:true,x:447,y:127},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_253).to({_off:false},4).to({_off:true,x:471,y:116},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_254).wait(4).to({_off:false},5).to({_off:true,x:448,y:127},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_255).wait(9).to({_off:false},5).to({_off:true,x:473,y:116},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_256).wait(14).to({_off:false},5).to({_off:true,x:468,y:139},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_257).wait(19).to({_off:false},5).to({_off:true,x:439,y:108},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_258).wait(24).to({_off:false},5).to({_off:true,x:471,y:127},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_259).wait(29).to({_off:false},5).to({_off:true,x:447,y:130},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_260).wait(34).to({_off:false},5).to({_off:true,x:455,y:107},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_261).wait(39).to({_off:false},5).to({_off:true,x:451,y:144},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_262).wait(44).to({_off:false},5).to({_off:true,scaleX:0.2,scaleY:0.2,x:433,y:94},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_263).wait(49).to({_off:false},5).wait(96));

	// 09.png
	this.instance_264 = new lib.Tween494("synched",0);
	this.instance_264.parent = this;
	this.instance_264.setTransform(113.4,60.4);

	this.instance_265 = new lib.Tween495("synched",0);
	this.instance_265.parent = this;
	this.instance_265.setTransform(117.4,60.4);
	this.instance_265._off = true;

	this.instance_266 = new lib.Tween496("synched",0);
	this.instance_266.parent = this;
	this.instance_266.setTransform(104.4,39.4);
	this.instance_266._off = true;

	this.instance_267 = new lib.Tween497("synched",0);
	this.instance_267.parent = this;
	this.instance_267.setTransform(113.4,67.4);
	this.instance_267._off = true;

	this.instance_268 = new lib.Tween498("synched",0);
	this.instance_268.parent = this;
	this.instance_268.setTransform(120.4,60.4);
	this.instance_268._off = true;

	this.instance_269 = new lib.Tween499("synched",0);
	this.instance_269.parent = this;
	this.instance_269.setTransform(107.4,46.4);
	this.instance_269._off = true;

	this.instance_270 = new lib.Tween500("synched",0);
	this.instance_270.parent = this;
	this.instance_270.setTransform(125.4,60.4);
	this.instance_270._off = true;

	this.instance_271 = new lib.Tween501("synched",0);
	this.instance_271.parent = this;
	this.instance_271.setTransform(104.4,47.4);
	this.instance_271._off = true;

	this.instance_272 = new lib.Tween502("synched",0);
	this.instance_272.parent = this;
	this.instance_272.setTransform(119.4,55.4);
	this.instance_272._off = true;

	this.instance_273 = new lib.Tween503("synched",0);
	this.instance_273.parent = this;
	this.instance_273.setTransform(118.4,71.4);
	this.instance_273._off = true;

	this.instance_274 = new lib.Tween504("synched",0);
	this.instance_274.parent = this;
	this.instance_274.setTransform(113.4,47.4);
	this.instance_274._off = true;

	this.instance_275 = new lib._09();
	this.instance_275.parent = this;
	this.instance_275.setTransform(97,44,0.152,0.152);
	this.instance_275._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_264).to({_off:true,x:117.4},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_265).to({_off:false},4).to({_off:true,x:104.4,y:39.4},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_266).wait(4).to({_off:false},5).to({_off:true,x:113.4,y:67.4},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_267).wait(9).to({_off:false},5).to({_off:true,x:120.4,y:60.4},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_268).wait(14).to({_off:false},5).to({_off:true,x:107.4,y:46.4},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_269).wait(19).to({_off:false},5).to({_off:true,x:125.4,y:60.4},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_270).wait(24).to({_off:false},5).to({_off:true,x:104.4,y:47.4},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_271).wait(29).to({_off:false},5).to({_off:true,x:119.4,y:55.4},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_272).wait(34).to({_off:false},5).to({_off:true,x:118.4,y:71.4},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_273).wait(39).to({_off:false},5).to({_off:true,x:113.4,y:47.4},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_274).wait(44).to({_off:false},5).to({_off:true,scaleX:0.15,scaleY:0.15,x:97,y:44},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_275).wait(49).to({_off:false},5).wait(96));

	// 09.png
	this.instance_276 = new lib.Tween428("synched",0);
	this.instance_276.parent = this;
	this.instance_276.setTransform(54.4,475.4);

	this.instance_277 = new lib.Tween429("synched",0);
	this.instance_277.parent = this;
	this.instance_277.setTransform(74.4,451.4);
	this.instance_277._off = true;

	this.instance_278 = new lib.Tween430("synched",0);
	this.instance_278.parent = this;
	this.instance_278.setTransform(26.4,464.4);
	this.instance_278._off = true;

	this.instance_279 = new lib.Tween431("synched",0);
	this.instance_279.parent = this;
	this.instance_279.setTransform(54.4,475.4);
	this.instance_279._off = true;

	this.instance_280 = new lib.Tween432("synched",0);
	this.instance_280.parent = this;
	this.instance_280.setTransform(52.4,453.4);
	this.instance_280._off = true;

	this.instance_281 = new lib.Tween433("synched",0);
	this.instance_281.parent = this;
	this.instance_281.setTransform(62.4,475.4);
	this.instance_281._off = true;

	this.instance_282 = new lib.Tween434("synched",0);
	this.instance_282.parent = this;
	this.instance_282.setTransform(41.4,463.4);
	this.instance_282._off = true;

	this.instance_283 = new lib.Tween435("synched",0);
	this.instance_283.parent = this;
	this.instance_283.setTransform(71.4,456.4);
	this.instance_283._off = true;

	this.instance_284 = new lib.Tween436("synched",0);
	this.instance_284.parent = this;
	this.instance_284.setTransform(45.4,451.4);
	this.instance_284._off = true;

	this.instance_285 = new lib.Tween437("synched",0);
	this.instance_285.parent = this;
	this.instance_285.setTransform(52.4,475.4);
	this.instance_285._off = true;

	this.instance_286 = new lib.Tween438("synched",0);
	this.instance_286.parent = this;
	this.instance_286.setTransform(54.4,475.4);
	this.instance_286._off = true;

	this.instance_287 = new lib._09();
	this.instance_287.parent = this;
	this.instance_287.setTransform(38,459,0.152,0.152);
	this.instance_287._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_276).to({_off:true,x:74.4,y:451.4},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_277).to({_off:false},4).to({_off:true,x:26.4,y:464.4},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_278).wait(4).to({_off:false},5).to({_off:true,x:54.4,y:475.4},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_279).wait(9).to({_off:false},5).to({_off:true,x:52.4,y:453.4},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_280).wait(14).to({_off:false},5).to({_off:true,x:62.4,y:475.4},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_281).wait(19).to({_off:false},5).to({_off:true,x:41.4,y:463.4},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_282).wait(24).to({_off:false},5).to({_off:true,x:71.4,y:456.4},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_283).wait(29).to({_off:false},5).to({_off:true,x:45.4,y:451.4},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_284).wait(34).to({_off:false},5).to({_off:true,x:52.4,y:475.4},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_285).wait(39).to({_off:false},5).to({_off:true,x:54.4},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_286).wait(44).to({_off:false},5).to({_off:true,scaleX:0.15,scaleY:0.15,x:38,y:459},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_287).wait(49).to({_off:false},5).wait(96));

	// 11.png
	this.instance_288 = new lib.Tween417("synched",0);
	this.instance_288.parent = this;
	this.instance_288.setTransform(92.8,408);

	this.instance_289 = new lib.Tween418("synched",0);
	this.instance_289.parent = this;
	this.instance_289.setTransform(97.8,388);
	this.instance_289._off = true;

	this.instance_290 = new lib.Tween419("synched",0);
	this.instance_290.parent = this;
	this.instance_290.setTransform(74.8,423);
	this.instance_290._off = true;

	this.instance_291 = new lib.Tween420("synched",0);
	this.instance_291.parent = this;
	this.instance_291.setTransform(93.8,424);
	this.instance_291._off = true;

	this.instance_292 = new lib.Tween421("synched",0);
	this.instance_292.parent = this;
	this.instance_292.setTransform(91.8,394);
	this.instance_292._off = true;

	this.instance_293 = new lib.Tween422("synched",0);
	this.instance_293.parent = this;
	this.instance_293.setTransform(81.8,419);
	this.instance_293._off = true;

	this.instance_294 = new lib.Tween423("synched",0);
	this.instance_294.parent = this;
	this.instance_294.setTransform(93.8,412);
	this.instance_294._off = true;

	this.instance_295 = new lib.Tween424("synched",0);
	this.instance_295.parent = this;
	this.instance_295.setTransform(100.8,394);
	this.instance_295._off = true;

	this.instance_296 = new lib.Tween425("synched",0);
	this.instance_296.parent = this;
	this.instance_296.setTransform(93.8,418);
	this.instance_296._off = true;

	this.instance_297 = new lib.Tween426("synched",0);
	this.instance_297.parent = this;
	this.instance_297.setTransform(93.8,399);
	this.instance_297._off = true;

	this.instance_298 = new lib.Tween427("synched",0);
	this.instance_298.parent = this;
	this.instance_298.setTransform(73.8,415);
	this.instance_298._off = true;

	this.instance_299 = new lib._11();
	this.instance_299.parent = this;
	this.instance_299.setTransform(57,372,0.497,0.497);
	this.instance_299._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_288).to({_off:true,x:97.8,y:388},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_289).to({_off:false},4).to({_off:true,x:74.8,y:423},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_290).wait(4).to({_off:false},5).to({_off:true,x:93.8,y:424},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_291).wait(9).to({_off:false},5).to({_off:true,x:91.8,y:394},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_292).wait(14).to({_off:false},5).to({_off:true,x:81.8,y:419},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_293).wait(19).to({_off:false},5).to({_off:true,x:93.8,y:412},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_294).wait(24).to({_off:false},5).to({_off:true,x:100.8,y:394},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_295).wait(29).to({_off:false},5).to({_off:true,x:93.8,y:418},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_296).wait(34).to({_off:false},5).to({_off:true,y:399},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_297).wait(39).to({_off:false},5).to({_off:true,x:73.8,y:415},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_298).wait(44).to({_off:false},5).to({_off:true,scaleX:0.5,scaleY:0.5,x:57,y:372},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_299).wait(49).to({_off:false},5).wait(96));

	// 11.png
	this.instance_300 = new lib.Tween340("synched",0);
	this.instance_300.parent = this;
	this.instance_300.setTransform(417.9,448);

	this.instance_301 = new lib.Tween341("synched",0);
	this.instance_301.parent = this;
	this.instance_301.setTransform(428.9,440);
	this.instance_301._off = true;

	this.instance_302 = new lib.Tween342("synched",0);
	this.instance_302.parent = this;
	this.instance_302.setTransform(397.9,426);
	this.instance_302._off = true;

	this.instance_303 = new lib.Tween343("synched",0);
	this.instance_303.parent = this;
	this.instance_303.setTransform(432.9,441);
	this.instance_303._off = true;

	this.instance_304 = new lib.Tween344("synched",0);
	this.instance_304.parent = this;
	this.instance_304.setTransform(417.9,425);
	this.instance_304._off = true;

	this.instance_305 = new lib.Tween345("synched",0);
	this.instance_305.parent = this;
	this.instance_305.setTransform(439.9,437);
	this.instance_305._off = true;

	this.instance_306 = new lib.Tween346("synched",0);
	this.instance_306.parent = this;
	this.instance_306.setTransform(399.9,426);
	this.instance_306._off = true;

	this.instance_307 = new lib.Tween347("synched",0);
	this.instance_307.parent = this;
	this.instance_307.setTransform(417.9,444);
	this.instance_307._off = true;

	this.instance_308 = new lib.Tween348("synched",0);
	this.instance_308.parent = this;
	this.instance_308.setTransform(402.9,432);
	this.instance_308._off = true;

	this.instance_309 = new lib.Tween349("synched",0);
	this.instance_309.parent = this;
	this.instance_309.setTransform(425.9,448);
	this.instance_309._off = true;

	this.instance_310 = new lib.Tween350("synched",0);
	this.instance_310.parent = this;
	this.instance_310.setTransform(401.9,429);
	this.instance_310._off = true;

	this.instance_311 = new lib._11();
	this.instance_311.parent = this;
	this.instance_311.setTransform(396,426,0.304,0.304);
	this.instance_311._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_300).to({_off:true,x:428.9,y:440},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_301).to({_off:false},4).to({_off:true,x:397.9,y:426},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_302).wait(4).to({_off:false},5).to({_off:true,x:432.9,y:441},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_303).wait(9).to({_off:false},5).to({_off:true,x:417.9,y:425},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_304).wait(14).to({_off:false},5).to({_off:true,x:439.9,y:437},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_305).wait(19).to({_off:false},5).to({_off:true,x:399.9,y:426},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_306).wait(24).to({_off:false},5).to({_off:true,x:417.9,y:444},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_307).wait(29).to({_off:false},5).to({_off:true,x:402.9,y:432},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_308).wait(34).to({_off:false},5).to({_off:true,x:425.9,y:448},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_309).wait(39).to({_off:false},5).to({_off:true,x:401.9,y:429},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_310).wait(44).to({_off:false},5).to({_off:true,scaleX:0.3,scaleY:0.3,x:396,y:426},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_311).wait(49).to({_off:false},5).wait(96));

	// 11.png
	this.instance_312 = new lib.Tween307("synched",0);
	this.instance_312.parent = this;
	this.instance_312.setTransform(545.9,215);

	this.instance_313 = new lib.Tween308("synched",0);
	this.instance_313.parent = this;
	this.instance_313.setTransform(524.9,205);
	this.instance_313._off = true;

	this.instance_314 = new lib.Tween309("synched",0);
	this.instance_314.parent = this;
	this.instance_314.setTransform(568.9,209);
	this.instance_314._off = true;

	this.instance_315 = new lib.Tween310("synched",0);
	this.instance_315.parent = this;
	this.instance_315.setTransform(538.9,185);
	this.instance_315._off = true;

	this.instance_316 = new lib.Tween311("synched",0);
	this.instance_316.parent = this;
	this.instance_316.setTransform(549.9,193);
	this.instance_316._off = true;

	this.instance_317 = new lib.Tween312("synched",0);
	this.instance_317.parent = this;
	this.instance_317.setTransform(567.9,215);
	this.instance_317._off = true;

	this.instance_318 = new lib.Tween313("synched",0);
	this.instance_318.parent = this;
	this.instance_318.setTransform(555.9,196);
	this.instance_318._off = true;

	this.instance_319 = new lib.Tween314("synched",0);
	this.instance_319.parent = this;
	this.instance_319.setTransform(552.9,215);
	this.instance_319._off = true;

	this.instance_320 = new lib.Tween315("synched",0);
	this.instance_320.parent = this;
	this.instance_320.setTransform(560.9,227);
	this.instance_320._off = true;

	this.instance_321 = new lib.Tween316("synched",0);
	this.instance_321.parent = this;
	this.instance_321.setTransform(560.9,199);
	this.instance_321._off = true;

	this.instance_322 = new lib.Tween317("synched",0);
	this.instance_322.parent = this;
	this.instance_322.setTransform(529.9,190);
	this.instance_322._off = true;

	this.instance_323 = new lib._11();
	this.instance_323.parent = this;
	this.instance_323.setTransform(524,193,0.304,0.304);
	this.instance_323._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_312).to({_off:true,x:524.9,y:205},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_313).to({_off:false},4).to({_off:true,x:568.9,y:209},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_314).wait(4).to({_off:false},5).to({_off:true,x:538.9,y:185},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_315).wait(9).to({_off:false},5).to({_off:true,x:549.9,y:193},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_316).wait(14).to({_off:false},5).to({_off:true,x:567.9,y:215},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_317).wait(19).to({_off:false},5).to({_off:true,x:555.9,y:196},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_318).wait(24).to({_off:false},5).to({_off:true,x:552.9,y:215},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_319).wait(29).to({_off:false},5).to({_off:true,x:560.9,y:227},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_320).wait(34).to({_off:false},5).to({_off:true,y:199},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_321).wait(39).to({_off:false},5).to({_off:true,x:529.9,y:190},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_322).wait(44).to({_off:false},5).to({_off:true,scaleX:0.3,scaleY:0.3,x:524,y:193},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_323).wait(49).to({_off:false},5).wait(96));

	// 11.png
	this.instance_324 = new lib.Tween296("synched",0);
	this.instance_324.parent = this;
	this.instance_324.setTransform(388.8,143);

	this.instance_325 = new lib.Tween297("synched",0);
	this.instance_325.parent = this;
	this.instance_325.setTransform(374.8,152);
	this.instance_325._off = true;

	this.instance_326 = new lib.Tween298("synched",0);
	this.instance_326.parent = this;
	this.instance_326.setTransform(404.8,121);
	this.instance_326._off = true;

	this.instance_327 = new lib.Tween299("synched",0);
	this.instance_327.parent = this;
	this.instance_327.setTransform(372.8,162);
	this.instance_327._off = true;

	this.instance_328 = new lib.Tween300("synched",0);
	this.instance_328.parent = this;
	this.instance_328.setTransform(408.8,133);
	this.instance_328._off = true;

	this.instance_329 = new lib.Tween301("synched",0);
	this.instance_329.parent = this;
	this.instance_329.setTransform(399.8,116);
	this.instance_329._off = true;

	this.instance_330 = new lib.Tween302("synched",0);
	this.instance_330.parent = this;
	this.instance_330.setTransform(378.8,170);
	this.instance_330._off = true;

	this.instance_331 = new lib.Tween303("synched",0);
	this.instance_331.parent = this;
	this.instance_331.setTransform(406.8,135);
	this.instance_331._off = true;

	this.instance_332 = new lib.Tween304("synched",0);
	this.instance_332.parent = this;
	this.instance_332.setTransform(376.8,104);
	this.instance_332._off = true;

	this.instance_333 = new lib.Tween305("synched",0);
	this.instance_333.parent = this;
	this.instance_333.setTransform(398.8,152);
	this.instance_333._off = true;

	this.instance_334 = new lib.Tween306("synched",0);
	this.instance_334.parent = this;
	this.instance_334.setTransform(369.8,163);
	this.instance_334._off = true;

	this.instance_335 = new lib._11();
	this.instance_335.parent = this;
	this.instance_335.setTransform(353,107,0.497,0.497);
	this.instance_335._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_324).to({_off:true,x:374.8,y:152},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_325).to({_off:false},4).to({_off:true,x:404.8,y:121},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_326).wait(4).to({_off:false},5).to({_off:true,x:372.8,y:162},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_327).wait(9).to({_off:false},5).to({_off:true,x:408.8,y:133},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_328).wait(14).to({_off:false},5).to({_off:true,x:399.8,y:116},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_329).wait(19).to({_off:false},5).to({_off:true,x:378.8,y:170},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_330).wait(24).to({_off:false},5).to({_off:true,x:406.8,y:135},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_331).wait(29).to({_off:false},5).to({_off:true,x:376.8,y:104},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_332).wait(34).to({_off:false},5).to({_off:true,x:398.8,y:152},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_333).wait(39).to({_off:false},5).to({_off:true,x:369.8,y:163},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_334).wait(44).to({_off:false},5).to({_off:true,scaleX:0.5,scaleY:0.5,x:353,y:107},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_335).wait(49).to({_off:false},5).wait(96));

	// 12.png
	this.instance_336 = new lib.Tween351("synched",0);
	this.instance_336.parent = this;
	this.instance_336.setTransform(539.8,476.5);

	this.instance_337 = new lib.Tween352("synched",0);
	this.instance_337.parent = this;
	this.instance_337.setTransform(527.8,470.5);
	this.instance_337._off = true;

	this.instance_338 = new lib.Tween353("synched",0);
	this.instance_338.parent = this;
	this.instance_338.setTransform(555.8,464.5);
	this.instance_338._off = true;

	this.instance_339 = new lib.Tween354("synched",0);
	this.instance_339.parent = this;
	this.instance_339.setTransform(513.8,498.5);
	this.instance_339._off = true;

	this.instance_340 = new lib.Tween355("synched",0);
	this.instance_340.parent = this;
	this.instance_340.setTransform(552.8,467.5);
	this.instance_340._off = true;

	this.instance_341 = new lib.Tween356("synched",0);
	this.instance_341.parent = this;
	this.instance_341.setTransform(525.8,476.5);
	this.instance_341._off = true;

	this.instance_342 = new lib.Tween357("synched",0);
	this.instance_342.parent = this;
	this.instance_342.setTransform(553.8,467.5);
	this.instance_342._off = true;

	this.instance_343 = new lib.Tween358("synched",0);
	this.instance_343.parent = this;
	this.instance_343.setTransform(526.8,485.5);
	this.instance_343._off = true;

	this.instance_344 = new lib.Tween359("synched",0);
	this.instance_344.parent = this;
	this.instance_344.setTransform(524.8,491.5);
	this.instance_344._off = true;

	this.instance_345 = new lib.Tween360("synched",0);
	this.instance_345.parent = this;
	this.instance_345.setTransform(539.8,476.5);
	this.instance_345._off = true;

	this.instance_346 = new lib.Tween361("synched",0);
	this.instance_346.parent = this;
	this.instance_346.setTransform(555.8,461.5);
	this.instance_346._off = true;

	this.instance_347 = new lib._12();
	this.instance_347.parent = this;
	this.instance_347.setTransform(496,459,0.242,0.242);
	this.instance_347._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_336).to({_off:true,x:527.8,y:470.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_337).to({_off:false},4).to({_off:true,x:555.8,y:464.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_338).wait(4).to({_off:false},5).to({_off:true,x:513.8,y:498.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_339).wait(9).to({_off:false},5).to({_off:true,x:552.8,y:467.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_340).wait(14).to({_off:false},5).to({_off:true,x:525.8,y:476.5},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_341).wait(19).to({_off:false},5).to({_off:true,x:553.8,y:467.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_342).wait(24).to({_off:false},5).to({_off:true,x:526.8,y:485.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_343).wait(29).to({_off:false},5).to({_off:true,x:524.8,y:491.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_344).wait(34).to({_off:false},5).to({_off:true,x:539.8,y:476.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_345).wait(39).to({_off:false},5).to({_off:true,x:555.8,y:461.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_346).wait(44).to({_off:false},5).to({_off:true,scaleX:0.24,scaleY:0.24,x:496,y:459},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_347).wait(49).to({_off:false},5).wait(5).to({x:508,y:444},0).wait(91));

	// 12.png
	this.instance_348 = new lib.Tween285("synched",0);
	this.instance_348.parent = this;
	this.instance_348.setTransform(495.8,61.5);

	this.instance_349 = new lib.Tween286("synched",0);
	this.instance_349.parent = this;
	this.instance_349.setTransform(495.8,74.5);
	this.instance_349._off = true;

	this.instance_350 = new lib.Tween287("synched",0);
	this.instance_350.parent = this;
	this.instance_350.setTransform(485.8,50.5);
	this.instance_350._off = true;

	this.instance_351 = new lib.Tween288("synched",0);
	this.instance_351.parent = this;
	this.instance_351.setTransform(476.8,68.5);
	this.instance_351._off = true;

	this.instance_352 = new lib.Tween289("synched",0);
	this.instance_352.parent = this;
	this.instance_352.setTransform(495.8,52.5);
	this.instance_352._off = true;

	this.instance_353 = new lib.Tween290("synched",0);
	this.instance_353.parent = this;
	this.instance_353.setTransform(513.8,70.5);
	this.instance_353._off = true;

	this.instance_354 = new lib.Tween291("synched",0);
	this.instance_354.parent = this;
	this.instance_354.setTransform(485.8,77.5);
	this.instance_354._off = true;

	this.instance_355 = new lib.Tween292("synched",0);
	this.instance_355.parent = this;
	this.instance_355.setTransform(482.8,51.5);
	this.instance_355._off = true;

	this.instance_356 = new lib.Tween293("synched",0);
	this.instance_356.parent = this;
	this.instance_356.setTransform(500.8,80.5);
	this.instance_356._off = true;

	this.instance_357 = new lib.Tween294("synched",0);
	this.instance_357.parent = this;
	this.instance_357.setTransform(506.8,61.5);
	this.instance_357._off = true;

	this.instance_358 = new lib.Tween295("synched",0);
	this.instance_358.parent = this;
	this.instance_358.setTransform(481.8,48.5);
	this.instance_358._off = true;

	this.instance_359 = new lib._12();
	this.instance_359.parent = this;
	this.instance_359.setTransform(464,29,0.242,0.242);
	this.instance_359._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_348).to({_off:true,y:74.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_349).to({_off:false},4).to({_off:true,x:485.8,y:50.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_350).wait(4).to({_off:false},5).to({_off:true,x:476.8,y:68.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_351).wait(9).to({_off:false},5).to({_off:true,x:495.8,y:52.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_352).wait(14).to({_off:false},5).to({_off:true,x:513.8,y:70.5},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_353).wait(19).to({_off:false},5).to({_off:true,x:485.8,y:77.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_354).wait(24).to({_off:false},5).to({_off:true,x:482.8,y:51.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_355).wait(29).to({_off:false},5).to({_off:true,x:500.8,y:80.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_356).wait(34).to({_off:false},5).to({_off:true,x:506.8,y:61.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_357).wait(39).to({_off:false},5).to({_off:true,x:481.8,y:48.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_358).wait(44).to({_off:false},5).to({_off:true,scaleX:0.24,scaleY:0.24,x:464,y:29},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_359).wait(49).to({_off:false},5).wait(96));

	// 12.png
	this.instance_360 = new lib.Tween483("synched",0);
	this.instance_360.parent = this;
	this.instance_360.setTransform(52,91.2);

	this.instance_361 = new lib.Tween484("synched",0);
	this.instance_361.parent = this;
	this.instance_361.setTransform(52,94.2);
	this.instance_361._off = true;

	this.instance_362 = new lib.Tween485("synched",0);
	this.instance_362.parent = this;
	this.instance_362.setTransform(52,87.2);
	this.instance_362._off = true;

	this.instance_363 = new lib.Tween486("synched",0);
	this.instance_363.parent = this;
	this.instance_363.setTransform(47,85.2);
	this.instance_363._off = true;

	this.instance_364 = new lib.Tween487("synched",0);
	this.instance_364.parent = this;
	this.instance_364.setTransform(47,91.2);
	this.instance_364._off = true;

	this.instance_365 = new lib.Tween488("synched",0);
	this.instance_365.parent = this;
	this.instance_365.setTransform(56,98.2);
	this.instance_365._off = true;

	this.instance_366 = new lib.Tween489("synched",0);
	this.instance_366.parent = this;
	this.instance_366.setTransform(57,86.2);
	this.instance_366._off = true;

	this.instance_367 = new lib.Tween490("synched",0);
	this.instance_367.parent = this;
	this.instance_367.setTransform(48,95.2);
	this.instance_367._off = true;

	this.instance_368 = new lib.Tween491("synched",0);
	this.instance_368.parent = this;
	this.instance_368.setTransform(52,88.2);
	this.instance_368._off = true;

	this.instance_369 = new lib.Tween492("synched",0);
	this.instance_369.parent = this;
	this.instance_369.setTransform(52,91.2);
	this.instance_369._off = true;

	this.instance_370 = new lib.Tween493("synched",0);
	this.instance_370.parent = this;
	this.instance_370.setTransform(56,99.2);
	this.instance_370._off = true;

	this.instance_371 = new lib._12();
	this.instance_371.parent = this;
	this.instance_371.setTransform(1,39,0.389,0.389);
	this.instance_371._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_360).to({_off:true,y:94.2},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_361).to({_off:false},4).to({_off:true,y:87.2},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_362).wait(4).to({_off:false},5).to({_off:true,x:47,y:85.2},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_363).wait(9).to({_off:false},5).to({_off:true,y:91.2},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_364).wait(14).to({_off:false},5).to({_off:true,x:56,y:98.2},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_365).wait(19).to({_off:false},5).to({_off:true,x:57,y:86.2},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_366).wait(24).to({_off:false},5).to({_off:true,x:48,y:95.2},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_367).wait(29).to({_off:false},5).to({_off:true,x:52,y:88.2},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_368).wait(34).to({_off:false},5).to({_off:true,y:91.2},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_369).wait(39).to({_off:false},5).to({_off:true,x:56,y:99.2},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_370).wait(44).to({_off:false},5).to({_off:true,scaleX:0.39,scaleY:0.39,x:1,y:39},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_371).wait(49).to({_off:false},5).wait(96));

	// 0201.png
	this.instance_372 = new lib.Tween505("synched",0);
	this.instance_372.parent = this;
	this.instance_372.setTransform(16.5,28.8);

	this.instance_373 = new lib.Tween506("synched",0);
	this.instance_373.parent = this;
	this.instance_373.setTransform(24.5,21.8);
	this.instance_373._off = true;

	this.instance_374 = new lib.Tween507("synched",0);
	this.instance_374.parent = this;
	this.instance_374.setTransform(16.5,28.8);
	this.instance_374._off = true;

	this.instance_375 = new lib.Tween508("synched",0);
	this.instance_375.parent = this;
	this.instance_375.setTransform(15.5,22.8);
	this.instance_375._off = true;

	this.instance_376 = new lib.Tween509("synched",0);
	this.instance_376.parent = this;
	this.instance_376.setTransform(27.5,19.8);
	this.instance_376._off = true;

	this.instance_377 = new lib.Tween510("synched",0);
	this.instance_377.parent = this;
	this.instance_377.setTransform(24.5,35.8);
	this.instance_377._off = true;

	this.instance_378 = new lib.Tween511("synched",0);
	this.instance_378.parent = this;
	this.instance_378.setTransform(15.5,23.8);
	this.instance_378._off = true;

	this.instance_379 = new lib.Tween512("synched",0);
	this.instance_379.parent = this;
	this.instance_379.setTransform(21.5,27.8);
	this.instance_379._off = true;

	this.instance_380 = new lib.Tween513("synched",0);
	this.instance_380.parent = this;
	this.instance_380.setTransform(16.5,18.8);
	this.instance_380._off = true;

	this.instance_381 = new lib.Tween514("synched",0);
	this.instance_381.parent = this;
	this.instance_381.setTransform(20.5,23.8);
	this.instance_381._off = true;

	this.instance_382 = new lib.Tween515("synched",0);
	this.instance_382.parent = this;
	this.instance_382.setTransform(27.5,28.8);
	this.instance_382._off = true;

	this.instance_383 = new lib._0201();
	this.instance_383.parent = this;
	this.instance_383.setTransform(1,14,0.191,0.191);
	this.instance_383._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_372).to({_off:true,x:24.5,y:21.8},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_373).to({_off:false},4).to({_off:true,x:16.5,y:28.8},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_374).wait(4).to({_off:false},5).to({_off:true,x:15.5,y:22.8},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_375).wait(9).to({_off:false},5).to({_off:true,x:27.5,y:19.8},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_376).wait(14).to({_off:false},5).to({_off:true,x:24.5,y:35.8},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_377).wait(19).to({_off:false},5).to({_off:true,x:15.5,y:23.8},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_378).wait(24).to({_off:false},5).to({_off:true,x:21.5,y:27.8},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_379).wait(29).to({_off:false},5).to({_off:true,x:16.5,y:18.8},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_380).wait(34).to({_off:false},5).to({_off:true,x:20.5,y:23.8},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_381).wait(39).to({_off:false},5).to({_off:true,x:27.5,y:28.8},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_382).wait(44).to({_off:false},5).to({_off:true,scaleX:0.19,scaleY:0.19,x:1,y:14},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_383).wait(49).to({_off:false},5).wait(96));

	// 0201.png
	this.instance_384 = new lib.Tween439("synched",0);
	this.instance_384.parent = this;
	this.instance_384.setTransform(31.1,515.1);

	this.instance_385 = new lib.Tween440("synched",0);
	this.instance_385.parent = this;
	this.instance_385.setTransform(52.1,496.1);
	this.instance_385._off = true;

	this.instance_386 = new lib.Tween441("synched",0);
	this.instance_386.parent = this;
	this.instance_386.setTransform(25.1,517.1);
	this.instance_386._off = true;

	this.instance_387 = new lib.Tween442("synched",0);
	this.instance_387.parent = this;
	this.instance_387.setTransform(36.1,515.1);
	this.instance_387._off = true;

	this.instance_388 = new lib.Tween443("synched",0);
	this.instance_388.parent = this;
	this.instance_388.setTransform(45.1,501.1);
	this.instance_388._off = true;

	this.instance_389 = new lib.Tween444("synched",0);
	this.instance_389.parent = this;
	this.instance_389.setTransform(31.1,515.1);
	this.instance_389._off = true;

	this.instance_390 = new lib.Tween445("synched",0);
	this.instance_390.parent = this;
	this.instance_390.setTransform(43.1,508.1);
	this.instance_390._off = true;

	this.instance_391 = new lib.Tween446("synched",0);
	this.instance_391.parent = this;
	this.instance_391.setTransform(44.1,500.1);
	this.instance_391._off = true;

	this.instance_392 = new lib.Tween447("synched",0);
	this.instance_392.parent = this;
	this.instance_392.setTransform(42.1,517.1);
	this.instance_392._off = true;

	this.instance_393 = new lib.Tween448("synched",0);
	this.instance_393.parent = this;
	this.instance_393.setTransform(34.1,515.1);
	this.instance_393._off = true;

	this.instance_394 = new lib.Tween449("synched",0);
	this.instance_394.parent = this;
	this.instance_394.setTransform(24.1,515.1);
	this.instance_394._off = true;

	this.instance_395 = new lib._0201();
	this.instance_395.parent = this;
	this.instance_395.setTransform(7,492,0.297,0.297);
	this.instance_395._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_384).to({_off:true,x:52.1,y:496.1},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_385).to({_off:false},4).to({_off:true,x:25.1,y:517.1},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_386).wait(4).to({_off:false},5).to({_off:true,x:36.1,y:515.1},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_387).wait(9).to({_off:false},5).to({_off:true,x:45.1,y:501.1},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_388).wait(14).to({_off:false},5).to({_off:true,x:31.1,y:515.1},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_389).wait(19).to({_off:false},5).to({_off:true,x:43.1,y:508.1},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_390).wait(24).to({_off:false},5).to({_off:true,x:44.1,y:500.1},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_391).wait(29).to({_off:false},5).to({_off:true,x:42.1,y:517.1},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_392).wait(34).to({_off:false},5).to({_off:true,x:34.1,y:515.1},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_393).wait(39).to({_off:false},5).to({_off:true,x:24.1},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_394).wait(44).to({_off:false},5).to({_off:true,scaleX:0.3,scaleY:0.3,x:7,y:492},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_395).wait(49).to({_off:false},5).wait(96));

	// 0201.png
	this.instance_396 = new lib.Tween461("synched",0);
	this.instance_396.parent = this;
	this.instance_396.setTransform(141.1,191);

	this.instance_397 = new lib.Tween462("synched",0);
	this.instance_397.parent = this;
	this.instance_397.setTransform(156.1,202);
	this.instance_397._off = true;

	this.instance_398 = new lib.Tween463("synched",0);
	this.instance_398.parent = this;
	this.instance_398.setTransform(136.1,195);
	this.instance_398._off = true;

	this.instance_399 = new lib.Tween464("synched",0);
	this.instance_399.parent = this;
	this.instance_399.setTransform(156.1,200);
	this.instance_399._off = true;

	this.instance_400 = new lib.Tween465("synched",0);
	this.instance_400.parent = this;
	this.instance_400.setTransform(128.1,191);
	this.instance_400._off = true;

	this.instance_401 = new lib.Tween466("synched",0);
	this.instance_401.parent = this;
	this.instance_401.setTransform(155.1,204);
	this.instance_401._off = true;

	this.instance_402 = new lib.Tween467("synched",0);
	this.instance_402.parent = this;
	this.instance_402.setTransform(147,191.4);
	this.instance_402._off = true;

	this.instance_403 = new lib.Tween468("synched",0);
	this.instance_403.parent = this;
	this.instance_403.setTransform(140.1,185);
	this.instance_403._off = true;

	this.instance_404 = new lib.Tween469("synched",0);
	this.instance_404.parent = this;
	this.instance_404.setTransform(149.1,198);
	this.instance_404._off = true;

	this.instance_405 = new lib.Tween470("synched",0);
	this.instance_405.parent = this;
	this.instance_405.setTransform(141.1,185);
	this.instance_405._off = true;

	this.instance_406 = new lib.Tween471("synched",0);
	this.instance_406.parent = this;
	this.instance_406.setTransform(141.1,196);
	this.instance_406._off = true;

	this.instance_407 = new lib._0201();
	this.instance_407.parent = this;
	this.instance_407.setTransform(69,122,0.89,0.89);
	this.instance_407._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_396).to({_off:true,x:156.1,y:202},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_397).to({_off:false},4).to({_off:true,x:136.1,y:195},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_398).wait(4).to({_off:false},5).to({_off:true,x:156.1,y:200},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_399).wait(9).to({_off:false},5).to({_off:true,x:128.1,y:191},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_400).wait(14).to({_off:false},5).to({_off:true,x:155.1,y:204},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_401).wait(19).to({_off:false},5).to({_off:true,x:147,y:191.4},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_402).wait(24).to({_off:false},5).to({_off:true,x:140.1,y:185},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_403).wait(29).to({_off:false},5).to({_off:true,x:149.1,y:198},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_404).wait(34).to({_off:false},5).to({_off:true,x:141.1,y:185},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_405).wait(39).to({_off:false},5).to({_off:true,y:196},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_406).wait(44).to({_off:false},5).to({_off:true,scaleX:0.89,scaleY:0.89,x:69,y:122},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_407).wait(49).to({_off:false},5).wait(96));

	// 0201.png
	this.instance_408 = new lib.Tween329("synched",0);
	this.instance_408.parent = this;
	this.instance_408.setTransform(524.5,335.5);

	this.instance_409 = new lib.Tween330("synched",0);
	this.instance_409.parent = this;
	this.instance_409.setTransform(537.5,315.5);
	this.instance_409._off = true;

	this.instance_410 = new lib.Tween331("synched",0);
	this.instance_410.parent = this;
	this.instance_410.setTransform(485.5,321.5);
	this.instance_410._off = true;

	this.instance_411 = new lib.Tween332("synched",0);
	this.instance_411.parent = this;
	this.instance_411.setTransform(533.5,319.5);
	this.instance_411._off = true;

	this.instance_412 = new lib.Tween333("synched",0);
	this.instance_412.parent = this;
	this.instance_412.setTransform(506.5,334.5);
	this.instance_412._off = true;

	this.instance_413 = new lib.Tween334("synched",0);
	this.instance_413.parent = this;
	this.instance_413.setTransform(548.5,335.5);
	this.instance_413._off = true;

	this.instance_414 = new lib.Tween335("synched",0);
	this.instance_414.parent = this;
	this.instance_414.setTransform(507.5,316.5);
	this.instance_414._off = true;

	this.instance_415 = new lib.Tween336("synched",0);
	this.instance_415.parent = this;
	this.instance_415.setTransform(554.5,321.5);
	this.instance_415._off = true;

	this.instance_416 = new lib.Tween337("synched",0);
	this.instance_416.parent = this;
	this.instance_416.setTransform(497.5,347.5);
	this.instance_416._off = true;

	this.instance_417 = new lib.Tween338("synched",0);
	this.instance_417.parent = this;
	this.instance_417.setTransform(503.5,313.5);
	this.instance_417._off = true;

	this.instance_418 = new lib.Tween339("synched",0);
	this.instance_418.parent = this;
	this.instance_418.setTransform(550.5,354.5);
	this.instance_418._off = true;

	this.instance_419 = new lib._0201();
	this.instance_419.parent = this;
	this.instance_419.setTransform(478,291,0.574,0.574);
	this.instance_419._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_408).to({_off:true,x:537.5,y:315.5},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_409).to({_off:false},4).to({_off:true,x:485.5,y:321.5},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_410).wait(4).to({_off:false},5).to({_off:true,x:533.5,y:319.5},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_411).wait(9).to({_off:false},5).to({_off:true,x:506.5,y:334.5},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_412).wait(14).to({_off:false},5).to({_off:true,x:548.5,y:335.5},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_413).wait(19).to({_off:false},5).to({_off:true,x:507.5,y:316.5},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_414).wait(24).to({_off:false},5).to({_off:true,x:554.5,y:321.5},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_415).wait(29).to({_off:false},5).to({_off:true,x:497.5,y:347.5},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_416).wait(34).to({_off:false},5).to({_off:true,x:503.5,y:313.5},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_417).wait(39).to({_off:false},5).to({_off:true,x:550.5,y:354.5},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_418).wait(44).to({_off:false},5).to({_off:true,scaleX:0.57,scaleY:0.57,x:478,y:291},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_419).wait(49).to({_off:false},5).wait(96));

	// 15.png
	this.instance_420 = new lib.Tween406("synched",0);
	this.instance_420.parent = this;
	this.instance_420.setTransform(138.6,524.6);

	this.instance_421 = new lib.Tween407("synched",0);
	this.instance_421.parent = this;
	this.instance_421.setTransform(138.6,503.6);
	this.instance_421._off = true;

	this.instance_422 = new lib.Tween408("synched",0);
	this.instance_422.parent = this;
	this.instance_422.setTransform(126.6,518.6);
	this.instance_422._off = true;

	this.instance_423 = new lib.Tween409("synched",0);
	this.instance_423.parent = this;
	this.instance_423.setTransform(152.6,513.6);
	this.instance_423._off = true;

	this.instance_424 = new lib.Tween410("synched",0);
	this.instance_424.parent = this;
	this.instance_424.setTransform(138.6,521.6);
	this.instance_424._off = true;

	this.instance_425 = new lib.Tween411("synched",0);
	this.instance_425.parent = this;
	this.instance_425.setTransform(149.6,507.6);
	this.instance_425._off = true;

	this.instance_426 = new lib.Tween412("synched",0);
	this.instance_426.parent = this;
	this.instance_426.setTransform(119.6,515.6);
	this.instance_426._off = true;

	this.instance_427 = new lib.Tween413("synched",0);
	this.instance_427.parent = this;
	this.instance_427.setTransform(138.6,513.6);
	this.instance_427._off = true;

	this.instance_428 = new lib.Tween414("synched",0);
	this.instance_428.parent = this;
	this.instance_428.setTransform(138.6,502.6);
	this.instance_428._off = true;

	this.instance_429 = new lib.Tween415("synched",0);
	this.instance_429.parent = this;
	this.instance_429.setTransform(145.6,509.6);
	this.instance_429._off = true;

	this.instance_430 = new lib.Tween416("synched",0);
	this.instance_430.parent = this;
	this.instance_430.setTransform(124.6,509.6);
	this.instance_430._off = true;

	this.instance_431 = new lib._15();
	this.instance_431.parent = this;
	this.instance_431.setTransform(123,509,0.132,0.132);
	this.instance_431._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_420).to({_off:true,y:503.6},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_421).to({_off:false},4).to({_off:true,x:126.6,y:518.6},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_422).wait(4).to({_off:false},5).to({_off:true,x:152.6,y:513.6},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_423).wait(9).to({_off:false},5).to({_off:true,x:138.6,y:521.6},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_424).wait(14).to({_off:false},5).to({_off:true,x:149.6,y:507.6},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_425).wait(19).to({_off:false},5).to({_off:true,x:119.6,y:515.6},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_426).wait(24).to({_off:false},5).to({_off:true,x:138.6,y:513.6},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_427).wait(29).to({_off:false},5).to({_off:true,y:502.6},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_428).wait(34).to({_off:false},5).to({_off:true,x:145.6,y:509.6},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_429).wait(39).to({_off:false},5).to({_off:true,x:124.6},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_430).wait(44).to({_off:false},5).to({_off:true,scaleX:0.13,scaleY:0.13,x:123,y:509},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_431).wait(49).to({_off:false},5).wait(96));

	// 15.png
	this.instance_432 = new lib.Tween384("synched",0);
	this.instance_432.parent = this;
	this.instance_432.setTransform(203.6,419.6);

	this.instance_433 = new lib.Tween385("synched",0);
	this.instance_433.parent = this;
	this.instance_433.setTransform(212.6,417.6);
	this.instance_433._off = true;

	this.instance_434 = new lib.Tween386("synched",0);
	this.instance_434.parent = this;
	this.instance_434.setTransform(203.6,439.6);
	this.instance_434._off = true;

	this.instance_435 = new lib.Tween387("synched",0);
	this.instance_435.parent = this;
	this.instance_435.setTransform(223.6,399.6);
	this.instance_435._off = true;

	this.instance_436 = new lib.Tween388("synched",0);
	this.instance_436.parent = this;
	this.instance_436.setTransform(203.6,443.6);
	this.instance_436._off = true;

	this.instance_437 = new lib.Tween389("synched",0);
	this.instance_437.parent = this;
	this.instance_437.setTransform(212.6,432.6);
	this.instance_437._off = true;

	this.instance_438 = new lib.Tween390("synched",0);
	this.instance_438.parent = this;
	this.instance_438.setTransform(203.6,411.6);
	this.instance_438._off = true;

	this.instance_439 = new lib.Tween391("synched",0);
	this.instance_439.parent = this;
	this.instance_439.setTransform(192.6,443.6);
	this.instance_439._off = true;

	this.instance_440 = new lib.Tween392("synched",0);
	this.instance_440.parent = this;
	this.instance_440.setTransform(213.6,404.6);
	this.instance_440._off = true;

	this.instance_441 = new lib.Tween393("synched",0);
	this.instance_441.parent = this;
	this.instance_441.setTransform(197.6,441.6);
	this.instance_441._off = true;

	this.instance_442 = new lib.Tween394("synched",0);
	this.instance_442.parent = this;
	this.instance_442.setTransform(217.6,413.6);
	this.instance_442._off = true;

	this.instance_443 = new lib._15();
	this.instance_443.parent = this;
	this.instance_443.setTransform(188,404,0.132,0.132);
	this.instance_443._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_432).to({_off:true,x:212.6,y:417.6},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_433).to({_off:false},4).to({_off:true,x:203.6,y:439.6},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_434).wait(4).to({_off:false},5).to({_off:true,x:223.6,y:399.6},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_435).wait(9).to({_off:false},5).to({_off:true,x:203.6,y:443.6},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_436).wait(14).to({_off:false},5).to({_off:true,x:212.6,y:432.6},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_437).wait(19).to({_off:false},5).to({_off:true,x:203.6,y:411.6},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_438).wait(24).to({_off:false},5).to({_off:true,x:192.6,y:443.6},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_439).wait(29).to({_off:false},5).to({_off:true,x:213.6,y:404.6},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_440).wait(34).to({_off:false},5).to({_off:true,x:197.6,y:441.6},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_441).wait(39).to({_off:false},5).to({_off:true,x:217.6,y:413.6},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_442).wait(44).to({_off:false},5).to({_off:true,scaleX:0.13,scaleY:0.13,x:188,y:404},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_443).wait(49).to({_off:false},5).wait(96));

	// 15.png
	this.instance_444 = new lib.Tween373("synched",0);
	this.instance_444.parent = this;
	this.instance_444.setTransform(369.6,473.6);

	this.instance_445 = new lib.Tween374("synched",0);
	this.instance_445.parent = this;
	this.instance_445.setTransform(387.6,475.6);
	this.instance_445._off = true;

	this.instance_446 = new lib.Tween375("synched",0);
	this.instance_446.parent = this;
	this.instance_446.setTransform(353.6,485.6);
	this.instance_446._off = true;

	this.instance_447 = new lib.Tween376("synched",0);
	this.instance_447.parent = this;
	this.instance_447.setTransform(388.6,482.6);
	this.instance_447._off = true;

	this.instance_448 = new lib.Tween377("synched",0);
	this.instance_448.parent = this;
	this.instance_448.setTransform(346.6,461.6);
	this.instance_448._off = true;

	this.instance_449 = new lib.Tween378("synched",0);
	this.instance_449.parent = this;
	this.instance_449.setTransform(355.6,489.6);
	this.instance_449._off = true;

	this.instance_450 = new lib.Tween379("synched",0);
	this.instance_450.parent = this;
	this.instance_450.setTransform(387.6,482.6);
	this.instance_450._off = true;

	this.instance_451 = new lib.Tween380("synched",0);
	this.instance_451.parent = this;
	this.instance_451.setTransform(357.6,473.6);
	this.instance_451._off = true;

	this.instance_452 = new lib.Tween381("synched",0);
	this.instance_452.parent = this;
	this.instance_452.setTransform(385.6,491.6);
	this.instance_452._off = true;

	this.instance_453 = new lib.Tween382("synched",0);
	this.instance_453.parent = this;
	this.instance_453.setTransform(368.6,455.6);
	this.instance_453._off = true;

	this.instance_454 = new lib.Tween383("synched",0);
	this.instance_454.parent = this;
	this.instance_454.setTransform(382.6,490.6);
	this.instance_454._off = true;

	this.instance_455 = new lib._15();
	this.instance_455.parent = this;
	this.instance_455.setTransform(343,447,0.226,0.226);
	this.instance_455._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_444).to({_off:true,x:387.6,y:475.6},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_445).to({_off:false},4).to({_off:true,x:353.6,y:485.6},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_446).wait(4).to({_off:false},5).to({_off:true,x:388.6,y:482.6},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_447).wait(9).to({_off:false},5).to({_off:true,x:346.6,y:461.6},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_448).wait(14).to({_off:false},5).to({_off:true,x:355.6,y:489.6},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_449).wait(19).to({_off:false},5).to({_off:true,x:387.6,y:482.6},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_450).wait(24).to({_off:false},5).to({_off:true,x:357.6,y:473.6},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_451).wait(29).to({_off:false},5).to({_off:true,x:385.6,y:491.6},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_452).wait(34).to({_off:false},5).to({_off:true,x:368.6,y:455.6},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_453).wait(39).to({_off:false},5).to({_off:true,x:382.6,y:490.6},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_454).wait(44).to({_off:false},5).to({_off:true,scaleX:0.23,scaleY:0.23,x:343,y:447},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_455).wait(49).to({_off:false},5).wait(96));

	// 01.png
	this.instance_456 = new lib.Tween362("synched",0);
	this.instance_456.parent = this;
	this.instance_456.setTransform(426,493);

	this.instance_457 = new lib.Tween363("synched",0);
	this.instance_457.parent = this;
	this.instance_457.setTransform(434,483);
	this.instance_457._off = true;

	this.instance_458 = new lib.Tween364("synched",0);
	this.instance_458.parent = this;
	this.instance_458.setTransform(411,511);
	this.instance_458._off = true;

	this.instance_459 = new lib.Tween365("synched",0);
	this.instance_459.parent = this;
	this.instance_459.setTransform(441,514);
	this.instance_459._off = true;

	this.instance_460 = new lib.Tween366("synched",0);
	this.instance_460.parent = this;
	this.instance_460.setTransform(413,477);
	this.instance_460._off = true;

	this.instance_461 = new lib.Tween367("synched",0);
	this.instance_461.parent = this;
	this.instance_461.setTransform(411,513);
	this.instance_461._off = true;

	this.instance_462 = new lib.Tween368("synched",0);
	this.instance_462.parent = this;
	this.instance_462.setTransform(434,474);
	this.instance_462._off = true;

	this.instance_463 = new lib.Tween369("synched",0);
	this.instance_463.parent = this;
	this.instance_463.setTransform(411,508);
	this.instance_463._off = true;

	this.instance_464 = new lib.Tween370("synched",0);
	this.instance_464.parent = this;
	this.instance_464.setTransform(436,515);
	this.instance_464._off = true;

	this.instance_465 = new lib.Tween371("synched",0);
	this.instance_465.parent = this;
	this.instance_465.setTransform(407,509);
	this.instance_465._off = true;

	this.instance_466 = new lib.Tween372("synched",0);
	this.instance_466.parent = this;
	this.instance_466.setTransform(444,509);
	this.instance_466._off = true;

	this.instance_467 = new lib._01();
	this.instance_467.parent = this;
	this.instance_467.setTransform(411,478);
	this.instance_467._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_456).to({_off:true,x:434,y:483},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_457).to({_off:false},4).to({_off:true,x:411,y:511},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_458).wait(4).to({_off:false},5).to({_off:true,x:441,y:514},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_459).wait(9).to({_off:false},5).to({_off:true,x:413,y:477},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_460).wait(14).to({_off:false},5).to({_off:true,x:411,y:513},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_461).wait(19).to({_off:false},5).to({_off:true,x:434,y:474},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_462).wait(24).to({_off:false},5).to({_off:true,x:411,y:508},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_463).wait(29).to({_off:false},5).to({_off:true,x:436,y:515},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_464).wait(34).to({_off:false},5).to({_off:true,x:407,y:509},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_465).wait(39).to({_off:false},5).to({_off:true,x:444},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_466).wait(44).to({_off:false},5).to({_off:true,x:411,y:478},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_467).wait(49).to({_off:false},5).wait(96));

	// 01.png
	this.instance_468 = new lib.Tween395("synched",0);
	this.instance_468.parent = this;
	this.instance_468.setTransform(173,506);

	this.instance_469 = new lib.Tween396("synched",0);
	this.instance_469.parent = this;
	this.instance_469.setTransform(173,488);
	this.instance_469._off = true;

	this.instance_470 = new lib.Tween397("synched",0);
	this.instance_470.parent = this;
	this.instance_470.setTransform(147,488);
	this.instance_470._off = true;

	this.instance_471 = new lib.Tween398("synched",0);
	this.instance_471.parent = this;
	this.instance_471.setTransform(186,506);
	this.instance_471._off = true;

	this.instance_472 = new lib.Tween399("synched",0);
	this.instance_472.parent = this;
	this.instance_472.setTransform(155,493);
	this.instance_472._off = true;

	this.instance_473 = new lib.Tween400("synched",0);
	this.instance_473.parent = this;
	this.instance_473.setTransform(192,518);
	this.instance_473._off = true;

	this.instance_474 = new lib.Tween401("synched",0);
	this.instance_474.parent = this;
	this.instance_474.setTransform(153,496);
	this.instance_474._off = true;

	this.instance_475 = new lib.Tween402("synched",0);
	this.instance_475.parent = this;
	this.instance_475.setTransform(183,515);
	this.instance_475._off = true;

	this.instance_476 = new lib.Tween403("synched",0);
	this.instance_476.parent = this;
	this.instance_476.setTransform(173,515);
	this.instance_476._off = true;

	this.instance_477 = new lib.Tween404("synched",0);
	this.instance_477.parent = this;
	this.instance_477.setTransform(183,506);
	this.instance_477._off = true;

	this.instance_478 = new lib.Tween405("synched",0);
	this.instance_478.parent = this;
	this.instance_478.setTransform(155,499);
	this.instance_478._off = true;

	this.instance_479 = new lib._01();
	this.instance_479.parent = this;
	this.instance_479.setTransform(158,491);
	this.instance_479._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_468).to({_off:true,y:488},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_469).to({_off:false},4).to({_off:true,x:147},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_470).wait(4).to({_off:false},5).to({_off:true,x:186,y:506},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_471).wait(9).to({_off:false},5).to({_off:true,x:155,y:493},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_472).wait(14).to({_off:false},5).to({_off:true,x:192,y:518},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_473).wait(19).to({_off:false},5).to({_off:true,x:153,y:496},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_474).wait(24).to({_off:false},5).to({_off:true,x:183,y:515},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_475).wait(29).to({_off:false},5).to({_off:true,x:173},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_476).wait(34).to({_off:false},5).to({_off:true,x:183,y:506},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_477).wait(39).to({_off:false},5).to({_off:true,x:155,y:499},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_478).wait(44).to({_off:false},5).to({_off:true,x:158,y:491},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_479).wait(49).to({_off:false},5).wait(96));

	// 01.png
	this.instance_480 = new lib.Tween450("synched",0);
	this.instance_480.parent = this;
	this.instance_480.setTransform(47,373);

	this.instance_481 = new lib.Tween451("synched",0);
	this.instance_481.parent = this;
	this.instance_481.setTransform(38,384);
	this.instance_481._off = true;

	this.instance_482 = new lib.Tween452("synched",0);
	this.instance_482.parent = this;
	this.instance_482.setTransform(69,373);
	this.instance_482._off = true;

	this.instance_483 = new lib.Tween453("synched",0);
	this.instance_483.parent = this;
	this.instance_483.setTransform(37,355);
	this.instance_483._off = true;

	this.instance_484 = new lib.Tween454("synched",0);
	this.instance_484.parent = this;
	this.instance_484.setTransform(36,384);
	this.instance_484._off = true;

	this.instance_485 = new lib.Tween455("synched",0);
	this.instance_485.parent = this;
	this.instance_485.setTransform(64,365);
	this.instance_485._off = true;

	this.instance_486 = new lib.Tween456("synched",0);
	this.instance_486.parent = this;
	this.instance_486.setTransform(29,361);
	this.instance_486._off = true;

	this.instance_487 = new lib.Tween457("synched",0);
	this.instance_487.parent = this;
	this.instance_487.setTransform(31,400);
	this.instance_487._off = true;

	this.instance_488 = new lib.Tween458("synched",0);
	this.instance_488.parent = this;
	this.instance_488.setTransform(69,374);
	this.instance_488._off = true;

	this.instance_489 = new lib.Tween459("synched",0);
	this.instance_489.parent = this;
	this.instance_489.setTransform(35,373);
	this.instance_489._off = true;

	this.instance_490 = new lib.Tween460("synched",0);
	this.instance_490.parent = this;
	this.instance_490.setTransform(47,364);
	this.instance_490._off = true;

	this.instance_491 = new lib._01();
	this.instance_491.parent = this;
	this.instance_491.setTransform(32,358);
	this.instance_491._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_480).to({_off:true,x:38,y:384},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_481).to({_off:false},4).to({_off:true,x:69,y:373},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_482).wait(4).to({_off:false},5).to({_off:true,x:37,y:355},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_483).wait(9).to({_off:false},5).to({_off:true,x:36,y:384},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_484).wait(14).to({_off:false},5).to({_off:true,x:64,y:365},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_485).wait(19).to({_off:false},5).to({_off:true,x:29,y:361},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_486).wait(24).to({_off:false},5).to({_off:true,x:31,y:400},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_487).wait(29).to({_off:false},5).to({_off:true,x:69,y:374},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_488).wait(34).to({_off:false},5).to({_off:true,x:35,y:373},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_489).wait(39).to({_off:false},5).to({_off:true,x:47,y:364},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_490).wait(44).to({_off:false},5).to({_off:true,x:32,y:358},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_491).wait(49).to({_off:false},5).wait(96));

	// 01.png
	this.instance_492 = new lib.Tween472("synched",0);
	this.instance_492.parent = this;
	this.instance_492.setTransform(213,128);

	this.instance_493 = new lib.Tween473("synched",0);
	this.instance_493.parent = this;
	this.instance_493.setTransform(213,120);
	this.instance_493._off = true;

	this.instance_494 = new lib.Tween474("synched",0);
	this.instance_494.parent = this;
	this.instance_494.setTransform(203,138);
	this.instance_494._off = true;

	this.instance_495 = new lib.Tween475("synched",0);
	this.instance_495.parent = this;
	this.instance_495.setTransform(213,120);
	this.instance_495._off = true;

	this.instance_496 = new lib.Tween476("synched",0);
	this.instance_496.parent = this;
	this.instance_496.setTransform(215,137);
	this.instance_496._off = true;

	this.instance_497 = new lib.Tween477("synched",0);
	this.instance_497.parent = this;
	this.instance_497.setTransform(199,115);
	this.instance_497._off = true;

	this.instance_498 = new lib.Tween478("synched",0);
	this.instance_498.parent = this;
	this.instance_498.setTransform(213,128);
	this.instance_498._off = true;

	this.instance_499 = new lib.Tween479("synched",0);
	this.instance_499.parent = this;
	this.instance_499.setTransform(213,122);
	this.instance_499._off = true;

	this.instance_500 = new lib.Tween480("synched",0);
	this.instance_500.parent = this;
	this.instance_500.setTransform(220,132);
	this.instance_500._off = true;

	this.instance_501 = new lib.Tween481("synched",0);
	this.instance_501.parent = this;
	this.instance_501.setTransform(213,128);
	this.instance_501._off = true;

	this.instance_502 = new lib.Tween482("synched",0);
	this.instance_502.parent = this;
	this.instance_502.setTransform(217,119);
	this.instance_502._off = true;

	this.instance_503 = new lib._01();
	this.instance_503.parent = this;
	this.instance_503.setTransform(198,113);
	this.instance_503._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_492).to({_off:true,y:120},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_493).to({_off:false},4).to({_off:true,x:203,y:138},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_494).wait(4).to({_off:false},5).to({_off:true,x:213,y:120},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_495).wait(9).to({_off:false},5).to({_off:true,x:215,y:137},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_496).wait(14).to({_off:false},5).to({_off:true,x:199,y:115},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_497).wait(19).to({_off:false},5).to({_off:true,x:213,y:128},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_498).wait(24).to({_off:false},5).to({_off:true,y:122},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_499).wait(29).to({_off:false},5).to({_off:true,x:220,y:132},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_500).wait(34).to({_off:false},5).to({_off:true,x:213,y:128},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_501).wait(39).to({_off:false},5).to({_off:true,x:217,y:119},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_502).wait(44).to({_off:false},5).to({_off:true,x:198,y:113},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_503).wait(49).to({_off:false},5).wait(96));

	// 01.png
	this.instance_504 = new lib.Tween318("synched",0);
	this.instance_504.parent = this;
	this.instance_504.setTransform(529,258);

	this.instance_505 = new lib.Tween319("synched",0);
	this.instance_505.parent = this;
	this.instance_505.setTransform(515,247);
	this.instance_505._off = true;

	this.instance_506 = new lib.Tween320("synched",0);
	this.instance_506.parent = this;
	this.instance_506.setTransform(539,242);
	this.instance_506._off = true;

	this.instance_507 = new lib.Tween321("synched",0);
	this.instance_507.parent = this;
	this.instance_507.setTransform(556,250);
	this.instance_507._off = true;

	this.instance_508 = new lib.Tween322("synched",0);
	this.instance_508.parent = this;
	this.instance_508.setTransform(513,266);
	this.instance_508._off = true;

	this.instance_509 = new lib.Tween323("synched",0);
	this.instance_509.parent = this;
	this.instance_509.setTransform(546,265);
	this.instance_509._off = true;

	this.instance_510 = new lib.Tween324("synched",0);
	this.instance_510.parent = this;
	this.instance_510.setTransform(537,242);
	this.instance_510._off = true;

	this.instance_511 = new lib.Tween325("synched",0);
	this.instance_511.parent = this;
	this.instance_511.setTransform(512,269);
	this.instance_511._off = true;

	this.instance_512 = new lib.Tween326("synched",0);
	this.instance_512.parent = this;
	this.instance_512.setTransform(508,261);
	this.instance_512._off = true;

	this.instance_513 = new lib.Tween327("synched",0);
	this.instance_513.parent = this;
	this.instance_513.setTransform(549,265);
	this.instance_513._off = true;

	this.instance_514 = new lib.Tween328("synched",0);
	this.instance_514.parent = this;
	this.instance_514.setTransform(542,243);
	this.instance_514._off = true;

	this.instance_515 = new lib._01();
	this.instance_515.parent = this;
	this.instance_515.setTransform(514,243);
	this.instance_515._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_504).to({_off:true,x:515,y:247},4).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_505).to({_off:false},4).to({_off:true,x:539,y:242},5).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_506).wait(4).to({_off:false},5).to({_off:true,x:556,y:250},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_507).wait(9).to({_off:false},5).to({_off:true,x:513,y:266},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_508).wait(14).to({_off:false},5).to({_off:true,x:546,y:265},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_509).wait(19).to({_off:false},5).to({_off:true,x:537,y:242},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_510).wait(24).to({_off:false},5).to({_off:true,x:512,y:269},5).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_511).wait(29).to({_off:false},5).to({_off:true,x:508,y:261},5).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_512).wait(34).to({_off:false},5).to({_off:true,x:549,y:265},5).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_513).wait(39).to({_off:false},5).to({_off:true,x:542,y:243},5).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_514).wait(44).to({_off:false},5).to({_off:true,x:514},5).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_515).wait(49).to({_off:false},5).wait(96));

	// Arte
	this.instance_516 = new lib.Piloto01();
	this.instance_516.parent = this;
	this.instance_516.setTransform(132,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_516).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.5,278,591.8,532.1);
// library properties:
lib.properties = {
	width: 605,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Animação Final_atlas_.png", id:"Animação Final_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;