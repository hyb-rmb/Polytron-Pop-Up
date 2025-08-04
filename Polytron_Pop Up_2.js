(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.headline = function() {
	this.initialize(img.headline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,53);


(lib.image_big_dark = function() {
	this.initialize(img.image_big_dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2356,3332);


(lib.image_big_reveal = function() {
	this.initialize(img.image_big_reveal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2356,3332);


(lib.imgac = function() {
	this.initialize(img.imgac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,290);


(lib.imgcuci = function() {
	this.initialize(img.imgcuci);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,290);


(lib.imgevent = function() {
	this.initialize(img.imgevent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,370);


(lib.imgkulkas = function() {
	this.initialize(img.imgkulkas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,290);


(lib.imgspeaker = function() {
	this.initialize(img.imgspeaker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,290);


(lib.imgtv = function() {
	this.initialize(img.imgtv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,290);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,168);


(lib.tap = function() {
	this.initialize(img.tap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,105);// helper functions:

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


(lib.terang = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_big_reveal();
	this.instance.setTransform(-177.45,-250.95,0.1506,0.1506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.terang, new cjs.Rectangle(-177.4,-250.9,354.9,501.9), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();
	this.instance.setTransform(-640,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-84,1280,168);


(lib.ins = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tap();
	this.instance.setTransform(-104,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ins, new cjs.Rectangle(-104,-52.5,208,105), null);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_big_dark();
	this.instance.setTransform(-266.35,-376.8,0.2148,0.2148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_1, new cjs.Rectangle(-266.3,-376.8,506.1,715.8), null);


(lib.head = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.headline();
	this.instance.setTransform(-90,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-90,-26.5,180,53), null);


(lib.close = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AA1BSIg1hBIg1BBIgqAAIBLhUIhFhPIAsAAIAeAmIAPATIAPgSIAignIApAAIhHBNIBNBWg");
	this.shape.setTransform(0.0129,0.0005,0.7435,0.7435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(225,81,80,0.8)").ss(1,1,1).p("ACGAAQAAA4gnAnQgnAng4AAQg3AAgngnQgngnAAg4QAAg3AngnQAngnA3AAQA4AAAnAnQAnAnAAA3g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.447)").s().p("AheBeQgngnAAg3QAAg3AngnQAngnA3AAQA3AAAnAnQAoAnAAA3QAAA3goAnQgnAog3AAQg3AAgngog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.close, new cjs.Rectangle(-14.4,-14.4,28.8,28.8), null);


(lib.popup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {idle:0,tv:1,speaker:2,kulkas:3,ac:4,cuci:5,event:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn_back = new lib.close();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(115.85,-126.35,0.7276,0.7276);
	this.btn_back._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_back).wait(1).to({_off:false},0).wait(5).to({x:108.8,y:-178.75},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgaMAm4MAAAhNvMA0ZAAAMAAABNvg");
	this.shape.setTransform(-318.575,-2.475);

	this.instance = new lib.imgtv();
	this.instance.setTransform(-143.5,-145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.447)").s().p("EgaMAm4MAAAhNvMA0ZAAAMAAABNvg");
	this.shape_1.setTransform(-0.575,-2.475);

	this.instance_1 = new lib.imgspeaker();
	this.instance_1.setTransform(-143.5,-145);

	this.instance_2 = new lib.imgkulkas();
	this.instance_2.setTransform(-143.5,-145);

	this.instance_3 = new lib.imgac();
	this.instance_3.setTransform(-143.5,-145);

	this.instance_4 = new lib.imgcuci();
	this.instance_4.setTransform(-143.5,-145);

	this.instance_5 = new lib.imgevent();
	this.instance_5.setTransform(-137,-199,1.0762,1.0762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.instance_4}]},1).to({state:[{t:this.shape_1},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.3,-251.2,653.5,497.5);


// stage content:
(lib.Polytron_PopUp_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [120,132];
	// timeline functions:
	this.frame_120 = function() {
		this.pop.stop();
		
		this.bt_ev.alpha = 0.05;
		this.bt_ev2.alpha = 0.05;
		this.bt_ac.alpha = 0.05;
		this.bt_kulkas.alpha = 0.05;
		this.bt_tv.alpha = 0.05;
		this.bt_cuci.alpha = 0.05;
		this.bt_speaker.alpha = 0.05;
		// Daftar frame label
		this.frameList = [0, 1, 2, 3, 4, 5, 6];
		this.currentIndex = 0;
		
		// Tampilkan frame awal
		this.pop.gotoAndStop(this.frameList[this.currentIndex]);
		
		// Tombol langsung ke frame tertentu
		this.bt_tv.addEventListener("click", () => {
		    this.currentIndex = 0;
		    this.pop.gotoAndStop("tv");
		});
		
		this.bt_kulkas.addEventListener("click", () => {
		    this.currentIndex = 1;
		    this.pop.gotoAndStop("kulkas");
		});
		
		this.bt_speaker.addEventListener("click", () => {
		    this.currentIndex = 2;
		    this.pop.gotoAndStop("speaker");
		});
		
		this.bt_ac.addEventListener("click", () => {
		    this.currentIndex = 3;
		    this.pop.gotoAndStop("ac");
		});
		
		this.bt_cuci.addEventListener("click", () => {
		    this.currentIndex = 4;
		    this.pop.gotoAndStop("cuci");
		});
		this.bt_ev.addEventListener("click", () => {
		    this.currentIndex = 5;
		    this.pop.gotoAndStop("event");
		});
		this.bt_ev2.addEventListener("click", () => {
		    this.currentIndex = 5;
		    this.pop.gotoAndStop("event");
		});
		
		this.pop.btn_back.addEventListener("click", () => {
			this.currentIndex = 0;
			this.pop.gotoAndStop("idle")
		})
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(12).call(this.frame_132).wait(1));

	// Layer_4
	this.pop = new lib.popup();
	this.pop.name = "pop";
	this.pop.setTransform(160.5,245);
	this.pop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop).wait(120).to({_off:false},0).wait(13));

	// Layer_3
	this.bt_ev = new lib.stageBtn();
	this.bt_ev.name = "bt_ev";
	this.bt_ev.setTransform(236.3,228.55,0.1391,0.2728,0,0,0,1.1,0.9);

	this.bt_ev2 = new lib.stageBtn();
	this.bt_ev2.name = "bt_ev2";
	this.bt_ev2.setTransform(175,379.8,0.4451,0.4574,0,0,0,0.9,1.1);

	this.bt_ac = new lib.stageBtn();
	this.bt_ac.name = "bt_ac";
	this.bt_ac.setTransform(59.4,144.9,0.2455,0.18,0,0,0,1.9,0.8);

	this.bt_speaker = new lib.stageBtn();
	this.bt_speaker.name = "bt_speaker";
	this.bt_speaker.setTransform(277.55,378.3,0.0721,0.3293,0,0,0,1.4,0.8);

	this.bt_tv = new lib.stageBtn();
	this.bt_tv.name = "bt_tv";
	this.bt_tv.setTransform(237.1,310.1,0.3148,0.3505,0,0,0,1,0.7);

	this.bt_kulkas = new lib.stageBtn();
	this.bt_kulkas.name = "bt_kulkas";
	this.bt_kulkas.setTransform(61.4,315.4,0.1537,0.7338,0,0,0,0.7,0.8);

	this.bt_cuci = new lib.stageBtn();
	this.bt_cuci.name = "bt_cuci";
	this.bt_cuci.setTransform(20.35,346.45,0.0909,0.3008,0,0,0,0.6,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt_cuci},{t:this.bt_kulkas},{t:this.bt_tv},{t:this.bt_speaker},{t:this.bt_ac},{t:this.bt_ev2},{t:this.bt_ev}]},120).wait(13));

	// Layer_8
	this.instance = new lib.ins();
	this.instance.setTransform(160,173.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({y:146.85,alpha:1},10).wait(30).to({scaleX:0.8467,scaleY:0.8467,alpha:0},10).to({_off:true},1).wait(13));

	// Layer_6
	this.instance_1 = new lib.logo_1("synched",0);
	this.instance_1.setTransform(160,25,0.0771,0.0771);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.0539,scaleY:0.0539,alpha:1},14).wait(119));

	// Layer_5
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(160,138.25,1.2311,1.2311);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14).wait(26).to({scaleX:0.6679,scaleY:0.6679,alpha:0},10).to({_off:true},1).wait(63));

	// Layer_2
	this.instance_3 = new lib.terang();
	this.instance_3.setTransform(152.45,239.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},10).wait(64));

	// Layer_1
	this.instance_4 = new lib.img_1();
	this.instance_4.setTransform(160.35,156.8,1.1502,1.1502);
	var instance_4Filter_1 = new cjs.ColorFilter(0,0,0,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_1];
	this.instance_4.cache(-268,-379,510,720);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.9618,scaleY:0.9618,y:190.3},19).to({scaleX:0.7011,scaleY:0.7011,x:161.9,y:252.85},14).wait(100));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19).wait(114));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_4, startFrame:1, endFrame:19, x:-268, y:-379, w:510, h:720});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-268, y:-379, w:510, h:720});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-36.6,602,583.3000000000001);
// library properties:
lib.properties = {
	id: '0D555FD7FAB00042B7C9FBA62E0C405F',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/headline.png", id:"headline"},
		{src:"images/image_big_dark.jpg", id:"image_big_dark"},
		{src:"images/image_big_reveal.jpg", id:"image_big_reveal"},
		{src:"images/imgac.png", id:"imgac"},
		{src:"images/imgcuci.png", id:"imgcuci"},
		{src:"images/imgevent.png", id:"imgevent"},
		{src:"images/imgkulkas.png", id:"imgkulkas"},
		{src:"images/imgspeaker.png", id:"imgspeaker"},
		{src:"images/imgtv.png", id:"imgtv"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/tap.png", id:"tap"}
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
an.compositions['0D555FD7FAB00042B7C9FBA62E0C405F'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;