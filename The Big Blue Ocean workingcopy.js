(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bag_back = function() {
	this.initialize(img.Bag_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,525);


(lib.Bag_front = function() {
	this.initialize(img.Bag_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,525);


(lib.BonkFish = function() {
	this.initialize(img.BonkFish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,227);


(lib.Bottle = function() {
	this.initialize(img.Bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,350);


(lib.Can = function() {
	this.initialize(img.Can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,152);


(lib.Dizzyfish = function() {
	this.initialize(img.Dizzyfish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,307);


(lib.Fish = function() {
	this.initialize(img.Fish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,372);


(lib.freedfish = function() {
	this.initialize(img.freedfish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.pierandpeople = function() {
	this.initialize(img.pierandpeople);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Stuckfish = function() {
	this.initialize(img.Stuckfish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,180);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.StuckFish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Stuckfish();

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#8080F6").beginStroke().moveTo(-33.4,52.7).lineTo(-34.6,51.5).lineTo(-73,51.5).lineTo(-73,-70).lineTo(54.7,-70).lineTo(54.7,-30.6).curveTo(73,-13.4,73,11.1).curveTo(73,35.5,54.7,52.7).curveTo(36.5,70,10.6,70).curveTo(-15.2,70,-33.4,52.7).closePath();
	this.shape.setTransform(90,80.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.8718,scaleY:0.8889,x:10,y:10}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,180);


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Startbubbles_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.text = new cjs.Text("START", "normal 400 31px 'Lobster'", "#0066FF");
	this.text.lineHeight = 48;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(7.75,7.75,3.8846,3.8811);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0099FF"},0).wait(1).to({color:"#00FFFF"},0).wait(1).to({color:"#0099FF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,194.8);


(lib.Fish_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish_1, new cjs.Rectangle(0,0,556,372), null);


(lib.DizzyFish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Dizzyfish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DizzyFish, new cjs.Rectangle(0,0,353,307), null);


(lib.Can_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Can();
	this.instance.setTransform(0,0,0.1315,0.1315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Can_1, new cjs.Rectangle(0,0,21.5,20), null);


(lib.Bonkfish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BonkFish();
	this.instance.setTransform(0,0,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bonkfish, new cjs.Rectangle(0,0,220,141.9), null);


(lib.arrowsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0000FF").beginStroke().moveTo(-28,-32.4).lineTo(28.1,-0).lineTo(-28,32.4).closePath();
	this.shape.setTransform(110,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0000FF").beginStroke().moveTo(-48.2,7.8).lineTo(-48.2,-7.8).lineTo(48.2,-7.8).lineTo(48.2,7.8).closePath();
	this.shape_1.setTransform(48.175,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.1,64.8);


(lib.Arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#080808").setStrokeStyle(5,1,1).moveTo(-23.3,25).lineTo(23.3,-25);
	this.shape.setTransform(23.3,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arm, new cjs.Rectangle(-2.5,-2.5,51.6,55), null);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("click_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.arrowsvg("synched",0);
	this.instance.setTransform(105.5,49.7,1.5293,1.5293,0,0,0,69,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2211,scaleY:1.2211,x:105.55},0).wait(1).to({startPosition:0},0).wait(1).to({regX:69.1,regY:32.6,scaleX:1.53,scaleY:1.5296,x:105.7,y:49.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.2,99.1);


// stage content:
(lib.TheBigBlueOceanworkingcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,182,219,407,482,576,599,683,750];
	// timeline functions:
	this.frame_0 = function() {
		playSound("background_1",-1);
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartButton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_182 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stuck.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_219 = function() {
		playSound("Plasticcrinkle_1");
	}
	this.frame_407 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.ContinueButton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_482 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.ContinueButton2.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_576 = function() {
		playSound("splash_2");
	}
	this.frame_599 = function() {
		playSound("can_1");
	}
	this.frame_683 = function() {
		playSound("Plasticcrinkle_1");
	}
	this.frame_750 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Restart.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(182).call(this.frame_182).wait(37).call(this.frame_219).wait(188).call(this.frame_407).wait(75).call(this.frame_482).wait(94).call(this.frame_576).wait(23).call(this.frame_599).wait(84).call(this.frame_683).wait(67).call(this.frame_750).wait(1));

	// Pause_screen
	this.Restart = new lib.Arrow();
	this.Restart.name = "Restart";
	this.Restart.setTransform(1650,929.6,1,1,0,0,0,105.5,49.6);
	new cjs.ButtonHelper(this.Restart, 0, 1, 2, false, new lib.Arrow(), 3);

	this.text = new cjs.Text("restart?", "96px 'Freestyle Script'", "#FFFFFF");
	this.text.lineHeight = 115;
	this.text.lineWidth = 361;
	this.text.parent = this;
	this.text.setTransform(1268.05,866.5);

	this.text_1 = new cjs.Text("PLEASE\nSave our oceans.", "96px 'Freestyle Script'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 115;
	this.text_1.lineWidth = 1419;
	this.text_1.parent = this;
	this.text_1.setTransform(920,182.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#AF3E2C").setStrokeStyle(1,1,1).moveTo(-960,-540).lineTo(960,-540).lineTo(960,540).lineTo(-960,540).closePath();
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.Restart}]},750).wait(1));

	// Can
	this.instance = new lib.Can_1();
	this.instance.setTransform(1399.2,339.4,1,1,0,0,0,10.7,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(543).to({_off:false},0).to({x:1210,y:-40},22).to({regX:10.8,regY:9.8,scaleX:3,scaleY:3,x:460.3,y:-70.6},16).to({x:449.85,y:589.85},18).to({x:459.85,y:1209.85},27).to({_off:true},1).wait(124));

	// Arm
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(960,540);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(960,540);
	this.instance_2._off = true;

	this.instance_3 = new lib.Arm();
	this.instance_3.setTransform(1376.7,365,1,1,0,0,0,23.3,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({_off:true,alpha:1},22).wait(505));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},22).to({alpha:0},22).to({_off:true},1).wait(482));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(543).to({_off:false},0).to({regX:23.2,regY:26.7,rotation:-89.9948,x:1336.6,y:360},12).to({regY:26.8,rotation:-180,x:1334,y:409.05},8).to({_off:true},1).wait(187));

	// Actions
	this.StartButton = new lib.StartButton();
	this.StartButton.name = "StartButton";
	this.StartButton.setTransform(920,750,1,1,0,0,0,202,97.4);
	new cjs.ButtonHelper(this.StartButton, 0, 1, 2, false, new lib.StartButton(), 3);

	this.instance_4 = new lib.StuckFish();
	this.instance_4.setTransform(1432,750);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.StuckFish(), 3);

	this.stuck = new lib.StuckFish();
	this.stuck.name = "stuck";
	this.stuck.setTransform(1432,750);
	this.stuck.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);
	new cjs.ButtonHelper(this.stuck, 0, 1, 2, false, new lib.StuckFish(), 3);

	this.instance_5 = new lib.freedfish();
	this.instance_5.setTransform(1090,500);

	this.ContinueButton = new lib.Arrow();
	this.ContinueButton.name = "ContinueButton";
	this.ContinueButton.setTransform(1650,929.6,1,1,0,0,0,105.5,49.6);
	new cjs.ButtonHelper(this.ContinueButton, 0, 1, 2, false, new lib.Arrow(), 3);

	this.ContinueButton2 = new lib.Arrow();
	this.ContinueButton2.name = "ContinueButton2";
	this.ContinueButton2.setTransform(1650,929.6,1,1,0,0,0,105.5,49.6);
	new cjs.ButtonHelper(this.ContinueButton2, 0, 1, 2, false, new lib.Arrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartButton}]}).to({state:[]},30).to({state:[{t:this.instance_4}]},112).to({state:[{t:this.stuck}]},40).to({state:[{t:this.stuck}]},1).to({state:[{t:this.instance_5}]},63).to({state:[{t:this.instance_5},{t:this.ContinueButton}]},161).to({state:[]},48).to({state:[{t:this.ContinueButton2}]},27).to({state:[]},40).wait(229));

	// TopBag
	this.instance_6 = new lib.Bag_front();
	this.instance_6.setTransform(951.1,276.45,0.589,0.589,60.0018);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(634).to({_off:false},0).wait(117));

	// Fish
	this.instance_7 = new lib.Fish_1();
	this.instance_7.setTransform(907.05,686.15,1.5878,1.5878,0,0,0,278.1,186.1);

	this.instance_8 = new lib.Bonkfish();
	this.instance_8.setTransform(390,653,1,1,0,0,0,110,71);
	this.instance_8._off = true;

	this.instance_9 = new lib.DizzyFish();
	this.instance_9.setTransform(2103.35,617.85,1,1,0,0,0,176.5,153.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:2368.3},29).wait(1).to({regX:278,regY:186,scaleX:0.3957,scaleY:0.3957,x:-140,y:520},0).to({guide:{path:[-139.9,520,-121.8,518.2,-92.1,517.2,-32.7,515.3,25.1,520,106,526.6,172.3,545.3,255.1,568.8,310.1,610,361.3,648.4,389.1,687.2,398.7,700.5,408.9,718.7,424.7,747,425.1,747.5,434.6,763.4,445,775.5,458,790.4,476,804.1,517.6,835.7,600.1,870,683.1,904.6,789.3,905.7,876.1,906.5,973.8,885,1048.2,868.7,1118.9,841.9,1145,832,1165.9,822.4,1183.5,814.4,1190,810,1202.6,801.6,1226.4,780.2,1233.3,773.9,1240.2,767.4,1260,748.8,1278.7,728.8,1346.9,655.9,1360,610,1367.1,585.1,1366.1,510.7,1365.1,436.4,1332.3,359.4,1299.5,282.5,1243.7,238.1,1187.9,193.7,1170,190.1,1163.5,188.8,1137.9,179.6,1103.4,167.2,1082.3,160.4,995.9,132.8,918.8,125.1,809.7,114.3,715.9,142.3,599.8,177,510.1,270.1,420.3,363.3,411.8,459.4,404.9,537.3,451.3,615,484.7,670.9,545.2,725.7,562.9,741.6,587.3,756.8,611.7,771.9,620.7,776.6,629.8,781.2,686.3,801,742.9,820.8,820.1,830,907.3,840.4,981.3,839.1,1067.4,837.6,1120,820,1162.2,805.9,1210.6,782.1,1221.4,776.7,1240.2,767.4,1243.2,765.9,1246.5,764.3,1266.4,754.8,1306.9,748.7,1347.5,742.5,1398.1,736,1448.8,729.4,1520,730,1606.3,735.6,1692.5,741.3,1867.5,753.8,1880,760,1886.7,763.4,1913.3,767.7,1929,770.2,1973.7,776.3,2074.2,789.9,2120,800], orient:'fixed'}},111).wait(1).to({regX:277.7,regY:186.2,rotation:-0.9987,x:-100,y:680},0).to({regX:278,regY:186,rotation:0,guide:{path:[-99.9,680,225.1,685,550,690], orient:'fixed'}},14).wait(27).to({regX:278.2,regY:186.1,rotation:6.2428,x:1350.1,y:800},37).wait(26).to({regY:186.2,rotation:0,x:700,y:560},0).wait(162).to({regX:278.5,scaleX:0.3956,scaleY:0.3956,rotation:59.9977,x:710.05,y:560.05},0).to({regX:278.4,regY:186.3,rotation:-14.9977,guide:{path:[710.2,560.1,711.8,563.1,713.4,566.1,718,573.9,724.8,582.5,746.7,610,782.6,635,832.9,670,904.2,695,993.2,726.3,1110,740,1227.7,753.9,1410.2,752.1,1560.1,750.6,1741.3,738.8,1884.8,729.4,2014.2,716.1,2126.3,704.6,2140,700], orient:'fixed'}},46).wait(1).to({regY:186.4,rotation:0,x:-130,y:540},0).to({guide:{path:[-129.9,540.1,125,540.1,380,540.1]}},27).to({guide:{path:[381.5,539.4,388.5,540,394.9,542.8,398.8,544.5,405.7,548.8,412.8,553.2,416.9,555.1,423.8,558.3,431.5,559.5,443.2,561.4,458.9,564.1,472.1,565.9,490.8,565.9,529.6,565.9,555.5,562.7,575,560.3,597,554.6,637.1,544.1,639.7,543.5,670,536.5,708.2,531.4,769.3,523.4,814.6,506.7,852.9,492.6,911.5,459.5,915.9,457,959.4,440.9,1013.8,420.8,1067.3,403.5,1232.3,350.1,1304.5,350.1,1356.6,350.1,1415,386.5,1434.9,398.9,1459.8,418.3,1473.4,428.9,1496.1,446.9,1509.7,457.3,1533.1,483.8,1558.8,513,1571.1,523.7,1587.4,537.8,1610.4,560.4,1630.2,578.4,1652.4,589.3,1707.6,616.3,1779.7,629.7,1810.5,635.5,1851.9,640.3,1879.2,643.5,1933.8,648.6,1952.6,650.4,1995.3,659.1,2021.2,664.4,2040,666.9], orient:'fixed'}},39).wait(1).to({x:-230,y:650},0).to({x:390},21).to({_off:true},56).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(599).to({_off:false},0).wait(16).to({x:396.4,y:656.1},0).to({rotation:159.4429,guide:{path:[396.4,656.1,415.2,656.1,434,656.1,496.2,664.1,500.9,664.9,535.6,670.5,556,679.6,581,690.7,593.4,710.1,607.1,731.7,607.1,766.3,607.1,796.3,588.7,817.6,572.8,835.9,542.3,848.8,519.1,858.6,481.6,867.2,439.2,876.2,420.1,880.6,417.5,881.3,414.9,881.9]}},9).to({rotation:180,guide:{path:[414.9,881.8,354.6,895.6,281.6,905.3,194.6,916.9,129.2,916.9,98.2,916.9,22.4,913.8,-53.5,910.6,-78.8,910.6,-85.6,910.6,-99.9,911.3]}},9).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(634).to({_off:false},0).to({guide:{path:[2103.4,617.9,2097.7,615.6,2089.3,615,2085.9,614.8,2075.8,614.8,2049.9,614.8,2000.6,632.7,1965.1,645.5,1906.6,672,1822.2,710.3,1819.6,711.4,1778,729.3,1765.3,729.3,1746.7,729.3,1734.8,702.7,1730.3,692.4,1727.6,680,1725.3,669,1725.3,660.3,1725.3,648.5,1728.5,634.3,1730.5,625.4,1735.5,609.3,1740.7,592.5,1742.5,584.9,1745.7,571.4,1745.7,560.7,1745.7,538.3,1735.2,518,1725.5,499.2,1708.1,484.6,1691.5,470.6,1670.8,462.7,1650.1,454.9,1629.6,454.9,1595.7,454.9,1554.2,471.8,1537.9,478.4,1516.7,489.1,1509.3,492.9,1478.6,509,1429,535.1,1398.2,546.1,1351.2,563,1308,563,1298.6,563,1290,556.6,1282.6,551,1274.4,539.5,1269.3,532.4,1258.9,515.4,1247.8,497,1241.4,487.8,1218,453.5,1191,436,1154.8,412.5,1105,412.5,1073.1,412.5,994.8,436.4], orient:'fixed'}},55).wait(62));

	// Background
	this.text_2 = new cjs.Text("The  Big  \"Blue\"  Ocean", "96px 'Freestyle Script'");
	this.text_2.lineHeight = 115;
	this.text_2.lineWidth = 644;
	this.text_2.parent = this;
	this.text_2.setTransform(170.9734,86,2.3804,2.1904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#0000FF","#0000E0","#0000B8"],[0,1,1],0,0,0,0,0,1101.5).beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();
	this.shape_2.setTransform(960,540);

	this.text_3 = new cjs.Text("Wait, what's happening here?", "96px 'Freestyle Script'");
	this.text_3.lineHeight = 115;
	this.text_3.lineWidth = 760;
	this.text_3.parent = this;
	this.text_3.setTransform(311.3,393.85);

	this.instance_10 = new lib.Can_1();
	this.instance_10.setTransform(1780,930.2,3.375,3.375,0,0,0,10.9,10.2);

	this.instance_11 = new lib.Bottle();
	this.instance_11.setTransform(928.05,789.3,0.4213,0.4213,-75.0004);

	this.instance_12 = new lib.Can();
	this.instance_12.setTransform(688.95,39.9,0.5526,0.5526,75.0013);

	this.instance_13 = new lib.Bag_front();
	this.instance_13.setTransform(1326.35,725.65,0.3256,0.3256,-75.0032);

	this.instance_14 = new lib.Bag_back();
	this.instance_14.setTransform(1326.35,725.65,0.3256,0.3256,-75.0032);

	this.instance_15 = new lib.Bag_front();
	this.instance_15.setTransform(899.4,134.3,0.3256,0.3256);

	this.instance_16 = new lib.Bag_back();
	this.instance_16.setTransform(899.4,134.3,0.3256,0.3256);

	this.instance_17 = new lib.Bottle();
	this.instance_17.setTransform(139,680,0.4213,0.4213);

	this.instance_18 = new lib.Can();
	this.instance_18.setTransform(1545,148,0.5526,0.5526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#00A87B","#001096","#0000B8"],[0,1,1],0,0,0,0,0,1101.5).beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();
	this.shape_3.setTransform(960,540);

	this.instance_19 = new lib.pierandpeople();
	this.instance_19.setTransform(515,0);

	this.instance_20 = new lib.Can();
	this.instance_20.setTransform(1469,605);

	this.instance_21 = new lib.Bag_back();
	this.instance_21.setTransform(202.85,135.5,0.3256,0.3256,29.9963);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#00A85B","#00105C","#0000B8"],[0,1,1],0,0,0,0,0,1101.5).beginStroke().moveTo(-960,540).lineTo(-960,-540).lineTo(960,-540).lineTo(960,540).closePath();
	this.shape_4.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:2.3804,scaleY:2.1904,x:170.9734,y:86,text:"The  Big  \"Blue\"  Ocean",lineWidth:644,textAlign:""}}]}).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:1,scaleY:1,x:634.1,y:448.4,text:"What a great day!",lineWidth:652,textAlign:""}}]},30).to({state:[{t:this.shape_2}]},111).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:1,scaleY:1,x:311.3,y:393.85,text:"Wait, what's happening here?",lineWidth:760,textAlign:""}}]},15).to({state:[{t:this.shape_2},{t:this.text_3,p:{x:311.3,y:393.85,text:"Wait, what's happening here?",lineWidth:760}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:1193.45,y:462.65,text:"I'm stuck, please help me!",lineWidth:704,textAlign:""}}]},26).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:1,scaleY:1,x:1193.45,y:462.65,text:"I'm stuck, please help me!",lineWidth:704,textAlign:""}}]},1).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:1,scaleY:1,x:1193.45,y:462.65,text:"I'm stuck, please help me!",lineWidth:704,textAlign:""}}]},41).to({state:[{t:this.shape_2}]},22).to({state:[{t:this.shape_2},{t:this.text_2,p:{scaleX:1,scaleY:1,x:444.4,y:285.95,text:"I got you out but\nwhat WAS that?",lineWidth:511,textAlign:""}}]},22).to({state:[{t:this.shape_2},{t:this.text_3,p:{x:1050.6,y:123.15,text:"I'm not really sure. The others just call it \"trash\" and it seems to appear more and more often.",lineWidth:818}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:444.4,y:285.95,text:"I got you out but\nwhat WAS that?",lineWidth:511,textAlign:""}}]},59).to({state:[{t:this.shape_2},{t:this.text_3,p:{x:336.55,y:52.05,text:"We have to do something about this!\nHey, there is more over there!",lineWidth:607}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:1050.6,y:123.15,text:"I'm not really sure. The others just call it \"trash\" and it seems to appear more and more often.",lineWidth:818,textAlign:""}},{t:this.instance_10}]},80).to({state:[{t:this.shape_3},{t:this.instance_18,p:{scaleX:0.5526,scaleY:0.5526,rotation:0,x:1545,y:148}},{t:this.instance_17,p:{scaleX:0.4213,scaleY:0.4213,x:139,y:680}},{t:this.instance_16,p:{scaleX:0.3256,scaleY:0.3256,rotation:0,x:899.4,y:134.3}},{t:this.instance_15,p:{rotation:0,x:899.4,y:134.3}},{t:this.instance_14,p:{scaleX:0.3256,scaleY:0.3256,rotation:-75.0032,x:1326.35,y:725.65}},{t:this.instance_13,p:{scaleX:0.3256,scaleY:0.3256,rotation:-75.0032,x:1326.35,y:725.65}},{t:this.instance_12,p:{scaleX:0.5526,scaleY:0.5526,rotation:75.0013,x:688.95,y:39.9}},{t:this.instance_11,p:{scaleX:0.4213,scaleY:0.4213,rotation:-75.0004,x:928.05,y:789.3}}]},48).to({state:[{t:this.shape_3},{t:this.instance_18,p:{scaleX:0.5526,scaleY:0.5526,rotation:0,x:1545,y:148}},{t:this.instance_17,p:{scaleX:0.4213,scaleY:0.4213,x:139,y:680}},{t:this.instance_16,p:{scaleX:0.3256,scaleY:0.3256,rotation:0,x:899.4,y:134.3}},{t:this.instance_15,p:{rotation:0,x:899.4,y:134.3}},{t:this.instance_14,p:{scaleX:0.3256,scaleY:0.3256,rotation:-75.0032,x:1326.35,y:725.65}},{t:this.instance_13,p:{scaleX:0.3256,scaleY:0.3256,rotation:-75.0032,x:1326.35,y:725.65}},{t:this.instance_12,p:{scaleX:0.5526,scaleY:0.5526,rotation:75.0013,x:688.95,y:39.9}},{t:this.instance_11,p:{scaleX:0.4213,scaleY:0.4213,rotation:-75.0004,x:928.05,y:789.3}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:73.5,y:41.9,text:"Oh no! It is filthy here. Where is all of this trash coming from?",lineWidth:560,textAlign:""}}]},27).to({state:[{t:this.shape_3},{t:this.instance_19}]},40).to({state:[{t:this.shape_3},{t:this.instance_19},{t:this.text_2,p:{scaleX:1,scaleY:1,x:140.4,y:301.2,text:"That's a strange looking cliff.",lineWidth:536,textAlign:""}}]},21).to({state:[{t:this.shape_3},{t:this.instance_19}]},46).to({state:[{t:this.shape_3},{t:this.instance_19},{t:this.text_2,p:{scaleX:1,scaleY:1,x:238.4,y:474.05,text:"OUCH!",lineWidth:306,textAlign:""}}]},15).to({state:[{t:this.shape_4},{t:this.instance_21},{t:this.instance_15,p:{rotation:29.9963,x:202.85,y:135.5}},{t:this.instance_16,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_13,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_14,p:{scaleX:0.589,scaleY:0.589,rotation:60.0018,x:951.1,y:276.45}},{t:this.instance_20},{t:this.instance_18,p:{scaleX:0.5155,scaleY:0.5155,rotation:29.9986,x:1213.2,y:155.1}},{t:this.instance_17,p:{scaleX:0.4686,scaleY:0.4686,x:515,y:760}},{t:this.instance_11,p:{scaleX:0.2624,scaleY:0.2624,rotation:-45,x:659.25,y:211.5}},{t:this.instance_12,p:{scaleX:0.7105,scaleY:0.7105,rotation:171.2989,x:315.45,y:711.75}}]},30).to({state:[{t:this.shape_4},{t:this.instance_21},{t:this.instance_15,p:{rotation:29.9963,x:202.85,y:135.5}},{t:this.instance_16,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_13,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_14,p:{scaleX:0.589,scaleY:0.589,rotation:60.0018,x:951.1,y:276.45}},{t:this.instance_20},{t:this.instance_18,p:{scaleX:0.5155,scaleY:0.5155,rotation:29.9986,x:1213.2,y:155.1}},{t:this.instance_17,p:{scaleX:0.4686,scaleY:0.4686,x:515,y:760}},{t:this.instance_11,p:{scaleX:0.2624,scaleY:0.2624,rotation:-45,x:659.25,y:211.5}},{t:this.instance_12,p:{scaleX:0.7105,scaleY:0.7105,rotation:171.2989,x:315.45,y:711.75}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:1605.7,y:893.45,text:"I can't see anything..",lineWidth:764,textAlign:"center"}}]},8).to({state:[{t:this.shape_4},{t:this.instance_21},{t:this.instance_15,p:{rotation:29.9963,x:202.85,y:135.5}},{t:this.instance_16,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_13,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_14,p:{scaleX:0.589,scaleY:0.589,rotation:60.0018,x:951.1,y:276.45}},{t:this.instance_20},{t:this.instance_18,p:{scaleX:0.5155,scaleY:0.5155,rotation:29.9986,x:1213.2,y:155.1}},{t:this.instance_17,p:{scaleX:0.4686,scaleY:0.4686,x:515,y:760}},{t:this.instance_11,p:{scaleX:0.2624,scaleY:0.2624,rotation:-45,x:659.25,y:211.5}},{t:this.instance_12,p:{scaleX:0.7105,scaleY:0.7105,rotation:171.2989,x:315.45,y:711.75}}]},48).to({state:[{t:this.shape_4},{t:this.instance_21},{t:this.instance_15,p:{rotation:29.9963,x:202.85,y:135.5}},{t:this.instance_16,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_13,p:{scaleX:0.1285,scaleY:0.1285,rotation:-14.9985,x:1660.55,y:115.55}},{t:this.instance_14,p:{scaleX:0.589,scaleY:0.589,rotation:60.0018,x:951.1,y:276.45}},{t:this.instance_20},{t:this.instance_18,p:{scaleX:0.5155,scaleY:0.5155,rotation:29.9986,x:1213.2,y:155.1}},{t:this.instance_17,p:{scaleX:0.4686,scaleY:0.4686,x:515,y:760}},{t:this.instance_11,p:{scaleX:0.2624,scaleY:0.2624,rotation:-45,x:659.25,y:211.5}},{t:this.instance_12,p:{scaleX:0.7105,scaleY:0.7105,rotation:171.2989,x:315.45,y:711.75}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:950.05,y:157.1,text:"Help?",lineWidth:444,textAlign:"center"}}]},19).wait(42));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(619.9,440,2189.7,800.5);
// library properties:
lib.properties = {
	id: '48C9489B357ECF43BFDF610290430A39',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bag_back.png?1618200663954", id:"Bag_back"},
		{src:"images/Bag_front.png?1618200663954", id:"Bag_front"},
		{src:"images/BonkFish.png?1618200663954", id:"BonkFish"},
		{src:"images/Bottle.png?1618200663954", id:"Bottle"},
		{src:"images/Can.png?1618200663954", id:"Can"},
		{src:"images/Dizzyfish.png?1618200663954", id:"Dizzyfish"},
		{src:"images/Fish.png?1618200663954", id:"Fish"},
		{src:"images/freedfish.png?1618200663954", id:"freedfish"},
		{src:"images/pierandpeople.png?1618200663954", id:"pierandpeople"},
		{src:"images/Stuckfish.png?1618200663954", id:"Stuckfish"},
		{src:"sounds/background_1.mp3?1618200663954", id:"background_1"},
		{src:"sounds/can_1.mp3?1618200663954", id:"can_1"},
		{src:"sounds/click_1.mp3?1618200663954", id:"click_1"},
		{src:"sounds/Plasticcrinkle_1.mp3?1618200663954", id:"Plasticcrinkle_1"},
		{src:"sounds/splash_2.mp3?1618200663954", id:"splash_2"},
		{src:"sounds/Startbubbles_2.mp3?1618200663954", id:"Startbubbles_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['48C9489B357ECF43BFDF610290430A39'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;