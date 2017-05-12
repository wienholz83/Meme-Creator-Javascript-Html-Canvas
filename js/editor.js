WebFontConfig = {
  google:{ families: ['Indie Flower', 'Creepster', 'Anton', 'Atomic Age', 'Bad Script', 'Anton' ,'Mrs Sheppards', 'Frijole', 'Aldrich', 'VT323', 'Candal', 'Permanent Marker', 'Mr Dafoe', 'Oswald', 'Ewert',] }
  
};

(function() {
	// load google font
	
	var wf = document.createElement("script");
  	wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
  	wf.async = 'true';
  	document.head.appendChild(wf);

})();

var textstyle = 1;
var fontsize = 32;
var glines = 1;
var gwidth  = 100;
var gheight = 100;

var shadowStyles = {	
	// http://simurai.com/post/802968365/css3d-css3-3d-text
	"Stereoscopic": { 
		color: "#000",
		background: "#fff",
		shadow: "-0.06em 0 0 red, 0.06em 0 0 cyan"
	},
	// http://line25.com/articles/using-css-text-shadow-to-create-cool-text-effects
	"Neon": {
		color: "#FFF",
		background: "#000",
		shadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de"
	},
	"Anaglyphic": {
		color: "rgba(0,0,255,0.5)",
		background: "#fff",
		shadow: "3px 3px 0 rgba(255,0,180,0.5)"
	},
	"Vintage Radio": {
		color: "#707070",
		background: "#ddd",
		shadow: "2px 2px 0px #eee, 4px 4px 0px #666"
	},
	"Inset": {
		color: "#222",
		background: "#444",
		shadow: "0px 1px 1px #777"
	},
	// meinen kopf
	"Shadow": {
		color: "#444",
		background: "#444",
		shadow: "0 0 11px #000"
	},
	"Shadow ;)": {
		background: "#ddd",
		shadow: "0 0 11px #000"
	},
	// http://pgwebdesign.net/blog/3d-css-shadow-text-tutorial
	"Shadow3D asdfasdf": {
		color: "#fff",
		background: "#ddd",
		shadow: "1px -1px #444, 2px -2px #444, 3px -3px #444, 4px -4px #444"
	},
	"textstyle1": {
		shadow: "",
		color: "#222",
		transform: -0.11,
		font: "bold Grobold",
	},
	"textstyle2": {
		shadow: "",
		color: "#5f5e61",
		transform: -0.05,
		font: "bold Grobold"
	},
	"textstyle3": {
		shadow: "",
		color: "#000",
		background: "#f3961c"
	},
	"textstyle4": {
		shadow: "",
		color: "#000",
    	background: "#f3961c"
	},
	"textstyle5": {
		shadow: "",
		background: "#FFFFFF",
		color: "#222222"
	},
	"textstyle6":{
		font: "Grobold",
		color: "#ffd800",
		background: "transparent",
		shadow: "0 -1px #2e2e2e, 0 -2px #2c2c2c, 0 -3px #2a2a2a, 0 -4px #282828, 0 -5px #262626, 0 -6px #242424, 0 -7px #222, 0 -8px #202020, 0 -9px #1e1e1e, 0 -10px #1c1c1c, 0 -11px #1a1a1a, 0 -12px #181818, 0 -13px #161616, 0 -14px #141414, 0 -15px #121212, 0 -22px 30px rgba(0, 0, 0, 0.9)"
	},
	"textstyle7": {
		color : "#fff",
		font : "Helvetica",
		shadow: "0 -1px #ccc, 0 -2px #c9c9c9, 0 -3px #bbb, 0 -4px #b9b9b9, 0 -5px #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);"
	},
	"textstyle8": {
		font : "impact",
		shadow: "-1px -1px 1px #111, 2px 2px 1px #363636",
		color: "#fbfdff",
		background: "#B3F51E"
	},
	"textstyle9": {
		font: "Avant Garde Avantgarde Century Gothic CenturyGothic AppleGothic sans-serif",
		color: "#2c2c2c",
		background: "#d5d5d5",
		shadow : "4px -4px 0px #aeaeae, 7px -7px 0px rgba(0, 0, 0, 0.2)"
	},
	"textstyle10": {
		font: "Anton",
  		color: "rgb(255, 255, 255)",
  		shadow: "0 0 4px rgb(254,252,201) , 2px -2px 6px rgb(254,236,133) , -4px -4px 8px rgb(255,174,52) , 4px -8px 10px rgb(236,118,12) , -4px -12px 12px rgb(205,70,6) , 0 -16px 14px rgb(151,55,22) , 2px -18px 16px rgb(69,27,14)",
	},
	"textstyle11": {
		font : "Andale Mono serif",
		background: "#ef6668",
		color: "#fff",
		shadow: "1px -1px 0 rgba(121,69,81,1), 1px 2px 2px rgba(121,69,81,0.9), 3px 4px 2px rgba(121,69,81,0.8), 5px 6px 2px rgba(121,69,81,0.6), 7px 8px 2px rgba(121,69,81,0.55), 9px 10px 2px rgba(121,69,81,0.5), 11px 12px 2px rgba(121,69,81,0.45), 13px 14px 2px rgba(121,69,81,0.4), 15px 16px 2px rgba(121,69,81,0.35), 17px 18px 2px rgba(121,69,81,0.3), 19px 20px 2px rgba(121,69,81,0.25), 21px 22px 2px rgba(121,69,81,0.2), 23px 24px 2px rgba(121,69,81,0.15), 25px 26px 2px rgba(121,69,81,0.1), 27px 28px 2px rgba(121,69,81,0.05), 29px 30px 2px rgba(121,69,81,0)"
	},
	"textstyle12": {
		font: "Kondolar-Regular Georgia serif",
		color: "#222",
		shadow : "1px -1px 0 #FFFFFF, 2px -2px 0 #000000"
	},
	"textstyle13": {
		color: "#FFFFFF",
		font: "Ewert",
		shadow: "-1px 0 0 #000000, 1px -1px 0 #000000, 2px -1px 0 #000000, 3px 0 0 #000000"
	},
	"textstyle14": {
		font: "Bad Script",
  		color: "rgba(0, 0, 0, 0)",
  		shadow: "3px 0 0 rgb(217,31,38) , 6px 0 0 rgb(226,91,14) , 9px 0 0 rgb(245,221,8) , 12px 0 0 rgb(5,148,68) , 15px 0 0 rgb(2,135,206) , 18px 0 0 rgb(4,77,145) , 21px 0 0 rgb(42,21,113)"
	},
	"textstyle14-1": {
		color: "#FFFFFF",
		font: "OrbitronLight",
		shadow: "1px -1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px -1px 0 #000000"
	},
	"textstyle15": {
		color: "#FFFFFF",
		font: "Kondolar-Regular Georgia serif",
		shadow: "3px -2px 0 #000000, -3px -2px 0 #000000, 3px 2px 0 #000000, -3px 2px 0 #000000, 4px -1px 0 #000000, -4px -1px 0 #000000, 4px 1px 0 #000000, -4px 1px 0 #000000"
	},
	"textstyle16": {
		font: "Atomic Age",
  		color: "rgb(64, 126, 196)",
  		shadow: "1px 1px 0 rgb(77,162,252) , -1px -1px 0 rgb(77,162,252) , 1px -1px 0 rgb(77,162,252) , -1px 1px 0 rgb(77,162,252) , 4px 4px 8px rgb(44,88,137) , -4px 4px 8px rgb(44,88,137) , 4px -4px 8px rgb(44,88,137) , -4px -4px 8px rgb(44,88,137)"
	},
	"textstyle17": {
		color: "#004A99",
		font: "Indie Flower",
		shadow: "0 -1px 0 rgb(204,204,204) , 0 -2px 0 rgb(201,201,201) , 0 -3px 0 rgb(187,187,187) , 0 -4px 0 rgb(185,185,185) , 0 -5px 0 rgb(170,170,170) , 0 6px 1px rgba(0,0,0,0.0980392) , 0 0 5px rgba(0,0,0,0.0980392) , 0 1px 3px rgba(0,0,0,0.298039) , 0 3px 5px rgba(0,0,0,0.2) , 0 5px 10px rgba(0,0,0,0.247059) , 0 10px 10px rgba(0,0,0,0.2) , 0 20px 20px rgba(0,0,0,0.14902)"
	},
	"textstyle18": {
		font: "Creepster",
		color: "rgba(255,255,255,1)",
		shadow: "1px -1px 0 #2ecc71 , -1px 1px 0 #2ecc71 , 1px 1px 0 #2ecc71 , -1px -1px 0 #2ecc71"
	},
	"textstyle19": {
		font: "Monoton",
		color: "rgba(255,255,255,1)",
		background: "#18171e",
		shadow: "0 0 10px rgb(255,255,255) , 0 0 20px rgb(255,255,255) , 0 0 30px rgb(255,255,255) , 0 0 40px rgb(255,17,119) , 0 0 70px rgb(255,17,119) , 0 0 80px rgb(255,17,119) , 0 0 100px rgb(255,17,119) , 0 0 150px rgb(255,17,119)"
	},
	"textstyle20": {
		font: "Warnes",
		color: "rgba(255,255,255,1)",
		shadow: "0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de"   
	},
	"textstyle21": {
		font: "Anton",
		color: "rgb(255, 255, 255)",
		shadow: "5px -5px 0 rgb(255,210,23) , 10px -10px 0 rgb(90,199,255) "
	},
	"textstyle22": {
		font: "Mrs Sheppards",
	    color: "rgb(224, 239, 242)",
	  	shadow: "6px -3px 0 rgb(58,80,217) , 11px -7px 0 rgb(10,14,39)"
	},
	"textstyle23": {
		font: "Frijole",
	  	color: "rgba(0,0,0,1)",
	  	shadow: "4px 0 9px rgba(0,0,0,0.51)"
	},
	"textstyle24": {
		font: "Aldrich",
  		color: "rgb(32, 44, 45)",
  		shadow: "0 -1px 0 rgb(128,141,147) , -1px 0 0 rgb(205,210,213) , -1px -2px 0 rgb(128,141,147) , -2px -1px 0 rgb(205,210,213) , -2px -3px 0 rgb(128,141,147) , -3px -2px 0 rgb(205,210,213) , -3px -4px 0 rgb(128,141,147) , -4px -3px 0 rgb(205,210,213)"
	},
	"textstyle25": {
		font: "VT323",
  		color: "rgba(255,255,0,1)",
  		shadow: "5px -5px 0 rgba(255,0,0,1)"
	},
	"textstyle26": {
		font: "Candal",
		// stroke: "0.1px #ed2121",
		color: "#fff",
		shadow: "5px -10px 0px #ed2121"
	},
	"textstyle27": {
		font: 'Righteous',
		color: "#E8E9DB",
		shadow: "2px 2px 15px #3F59F4"
	},
	"textstyle28": {
		font: "Permanent Marker",
		color: "#FF0FF8",
		shadow: "2px -2px 20px #f008b7"
	},
	"textstyle29": {
		font: "Mr Dafoe",
  		color: "#EB219B",
  		shadow: "-2px -2px 0 #FFBAF2",
	},
	"textstyle30": {
		font: "Oswald",
		color: "rgba(255,255,255,.9)",
		shadow: "0 0 40px rgba(255,255,255,.5)"
	}
};

function onThumbnail(param){
	$('#imgFacing').attr('src', param);
};
function parseShadow(shadows) {
	shadows = shadows.split(", ");
	var ret = [];
	for (var n = 0, length = shadows.length; n < length; n ++) {
		var shadow = shadows[n].split(" ");
		var type = shadow[0].replace(parseFloat(shadow[0]), "");
		if (type == "em") {
			var obj = {
				x: metrics.em * parseFloat(shadow[0]),
				y: metrics.em * parseFloat(shadow[1])
			};
		} else {
			var obj = {
				x: parseFloat(shadow[0]),
				y: parseFloat(shadow[1])
			};
		}
		if (shadow[3]) {
			obj.blur = parseFloat(shadow[2]);
			obj.color = shadow[3];
		} else {
			obj.blur = 0;
			obj.color = shadow[2];		
		}
		ret.push(obj);
	}
	return ret;
};

function wrapText(context, text, x, y, maxWidth, lineHeight, stroke) {
    var words = text.split(' ');
    var line = '';
    if (stroke != null) {
    	var strokes = stroke.split(' ');
    }
	
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
      	if(stroke != null)
      	{
      		context.lineWidth = 10;
      		context.strokeStyle = strokes[1];
      		context.strokeText(line, maxWidth/2 + x, y);
      		context.fillText(line, maxWidth/2 + x, y);
      	}else{
      		context.fillText(line, maxWidth/2 + x, y);
      	}
        
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
        
      }
    }
    if(stroke != null)
  	{
  		context.lineWidth = 10;
  		context.strokeStyle = strokes[1];
  		context.strokeText(line, maxWidth/2 + x, y);
  		context.fillText(line, maxWidth/2 + x, y);
  	}else{
  		context.fillText(line, maxWidth/2 + x, y);
  	}
};
function getMaxWidth(context, text, offsetX, width){
	var words = text.split(' ');
    var line = '';
    var retmax = width;
    var retmin = width;
    var ismax = 0;
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width + offsetX;
      if(testWidth > width){
      	ismax = 1;
      	if(testWidth > retmax)
      	{
      		retmax = testWidth;
      	}
      }else{
      	if(testWidth < retmin)
      	{
      		retmin = testWidth;
      	}
      }
  	}

  	return retmax;
}
function numberofLines(context, text, offsetX, maxWidth) {
    var words = text.split(' ');
    var line = '';
    var num = 1;

    for(var n = 0; n < words.length; n++) {
    	var testLine = line + words[n] + ' ';
    	var metrics = context.measureText(testLine);
    	var testWidth = metrics.width;
    	if (testWidth > maxWidth-offsetX && n > 0) {
    		num++;
    		line = words[n] + ' ';
    	}else{
    		line = testLine;
    	}
    }
    return num;
};
function setCanvasStyle(param, offsetX, offsetY, text){
	globalctx.font = "5em Futura LeagueGothicRegular sans-serif";
  	// textBaseline aligns text vertically relative to font style
  	globalctx.textBaseline = 'top';
	// absolute position of the text (within a translation state)
	
	var width = globalctx.measureText(text).width;
	var style = shadowStyles[param];
	if(!style)
		return;

	// add a background to the current effect
	globalctx.fillStyle = style.background;
	// ctx.fillRect(0, offsetY, ctx.canvas.width, 2*textHeight - 1)

	globalctx.font = fontsize+"px "+style.font;

	// gather information about the height of the font
	var metrics = getMetrics("thequickbrownfox", globalctx.font);

	return { "style": style, "textHeight": metrics.height * 1.20, "width": width};

};
function renderText(param) {
	var acanvas = document.createElement("canvas");
	acanvas.setAttribute("id", "textcanvas");
	var ctx = acanvas.getContext("2d");
	ctx.canvas.height = gheight;
	ctx.canvas.width = gwidth;
	ctx.save();

	var offsetX = 25;
	var offsetY = 10;
	var marginRight = 30;
	var marginBottom = 25;

	
	var text = $('#sampletext').val().toUpperCase();

	ctx.font = "5em Futura LeagueGothicRegular sans-serif";
  	// textBaseline aligns text vertically relative to font style
  	ctx.textBaseline = 'top';
  	ctx.textAlign = 'center';
	// absolute position of the text (within a translation state)
	
	var width = ctx.measureText(text).width;
	var style = shadowStyles[param];
	if(!style)
		return;
	if(param == "textstyle1" || param == "textstyle2"){
		offsetY = 10 + glines * fontsize / 4;
	}
	// add a background to the current effect
	ctx.fillStyle = style.background;
	// ctx.fillRect(0, offsetY, ctx.canvas.width, 2*textHeight - 1)

	ctx.font = fontsize+"px "+style.font;

	// parse text-shadows from css
	var textHeight = fontsize * 1.20;

	var shadows = parseShadow(style.shadow);
	
	var lines = numberofLines(ctx, text, offsetX, ctx.canvas.width - marginRight);
	
	if(lines != 1){
		var ret = getMaxWidth(ctx, text, offsetX, gwidth);

		if(ret != gwidth && ret > 0){
			
			ctx.restore();
			ctx.canvas.width = ret + marginRight;
			gwidth = ret + marginRight;
			ctx.save();
			
		}

		glines = lines;
		ctx.restore();
		ctx.canvas.height = (lines)*textHeight + marginBottom;
		ctx.save();
		
		ctx.font = "5em Futura LeagueGothicRegular sans-serif";
	  	// textBaseline aligns text vertically relative to font style
	  	ctx.textBaseline = 'top';
	  	ctx.textAlign = 'center';
		// absolute position of the text (within a translation state)
		
		var width = ctx.measureText(text).width;
		var style = shadowStyles[param];
		if(!style)
			return;
		// add a background to the current effect
		ctx.fillStyle = style.background;
		// ctx.fillRect(0, offsetY, ctx.canvas.width, 2*textHeight - 1)

		ctx.font = fontsize+"px "+style.font;

		// parse text-shadows from css
		var textHeight = fontsize * 1.20;
	}else if(lines == 1){
		var ret = ctx.measureText(text).width;

		ctx.restore();
		ctx.canvas.width = ret + marginRight;
		gwidth = ret + marginRight;
		ctx.save();


		glines = 1;
		ctx.restore();
		ctx.canvas.height = (lines)*textHeight + marginBottom;
		ctx.save();
		
		ctx.font = "5em Futura LeagueGothicRegular sans-serif";
	  	// textBaseline aligns text vertically relative to font style
	  	ctx.textBaseline = 'top';
	  	ctx.textAlign = 'center';
		// absolute position of the text (within a translation state)
		
		var width = ctx.measureText(text).width;
		var style = shadowStyles[param];
		if(!style)
			return;
		// add a background to the current effect
		ctx.fillStyle = style.background;
		// ctx.fillRect(0, offsetY, ctx.canvas.width, 2*textHeight - 1)

		ctx.font = fontsize+"px "+style.font;

		// parse text-shadows from css
		var textHeight = fontsize * 1.20;
	}

	//set canvas with transform //
	if(style.transform!=null)
		ctx.setTransform (1, style.transform, 0, 1, 0, 0);
		
	var n = shadows.length; while(n--) {
		var shadow = shadows[n];

		var totalWidth = width + shadow.blur * 2;

		ctx.save();
		ctx.beginPath();
		ctx.rect(offsetX - shadow.blur, offsetY, offsetX + totalWidth, (lines+1)*textHeight);
		ctx.clip();
		if (shadow.blur) { // just run shadow (clip text)
			ctx.shadowColor = shadow.color;
			ctx.shadowOffsetX = shadow.x + totalWidth;
			ctx.shadowOffsetY = shadow.y;
			ctx.shadowBlur = shadow.blur;
			wrapText(ctx, text, -totalWidth + offsetX, offsetY, ctx.canvas.width - marginRight, fontsize/1.2+10);
		} else { // just run pseudo-shadow
			ctx.fillStyle = shadow.color;
			wrapText(ctx, text, offsetX + (shadow.x||0), offsetY - (shadow.y||0), ctx.canvas.width - marginRight, fontsize/1.2+10);
		}
		ctx.restore();

	}
	// drawing the text in the foreground
	if (style.color) {
		ctx.fillStyle = style.color;
		wrapText(ctx, text, offsetX, offsetY, ctx.canvas.width - marginRight, fontsize/1.2+10, style.stroke);
	}

	// jump to next em-line
	ctx.translate(0, textHeight);
	ctx.restore();

	$('#output1').html('');
	$( "#output1" ).append(acanvas);

	// synchronize two objects //
	$('#output1').css('width',$('#textcanvas').width());
	$('#output1').css('height',$('#textcanvas').height());
	$('#output').css('width',$('#textcanvas').width());
	$('#output').css('height',$('#textcanvas').height());
};

function selStyle(param){
	textstyle = param;
	$('#fileupload').val("");
	// $('#output').html('');
	// if(param==10){
		
	// 	$( "#output" ).append('<div class="slashed"><div class="top" title="SampleText"></div><div class="bot" title="SampleText"></div></div><br><br>');
	// 	return;
	// }
	// $("#output").append('<h1 id="outputtext" class="textstyle1">Sample Text11</h1>');
	// $("#outputtext").removeClass();
	// $("#outputtext").addClass("textstyle"+param);
	$("#output").removeClass();
	$("#output").addClass('output');
	$("#output").addClass("textstyle"+param);
	renderText("textstyle"+param);
};

function imageSelected(){
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();

	reader.addEventListener("load", function () {
		$('.textstyle'+textstyle).css('background-image', 'url(' + reader.result + ')');
		$('.textstyle'+textstyle).css('background-position', '0 0');
		$('.textstyle'+textstyle).css('background-size', '100% 100%');
	}, false);

	if (file) {
	    reader.readAsDataURL(file);
	}
};


$(document).ready(function() {
	$( "#amount" ).val( fontsize);
	$('.slider1').bxSlider({
		slideWidth: 200,
		minSlides: 6,
		maxSlides: 6,
		slideMargin: 10,
		// mode: 'vertical',
	  });
	$( "#slider-range" ).slider({
      range: false,
      min: 1,
      max: 72,
      value: fontsize,
      slide: function( event, ui ) {
      	fontsize = ui.value;
        $( "#amount" ).val( ui.value);
        renderText("textstyle"+textstyle);
      }
    });
	$( "#sampletext" ).keyup(function() {
	    renderText("textstyle"+textstyle);	
	}); 


	$("#btnDownload").click(function() { 
		html2canvas($(".maincontainer"), {
			onrendered: function(canvas) {
				// $("#img-out").append("<img width='100px' style='border:1px solid #efefef;margin-left:300px' height='100px' src='"+canvas.toDataURL()+"' />");
				var url = canvas.toDataURL();
	          	$("<a>", {
	            	href: url,
	            	download: "MemoSample.png"
	          	})
	              	.on("click", function() {$(this).remove()})
	              	.appendTo("body")[0].click()		   					
			}
		});
	});
});	