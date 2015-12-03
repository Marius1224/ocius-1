var animObjects = {};


var rotateUp = {
	init : function(o, factor, lastSectionNumber /* MB . ajoute dernier parameter dans function (lastSectionNumber)*/ ){
			var X = o.position().left;
			var Y = o.position().top;	
			
			/*MB. random mouvements des boules pour chaque page. Ajoute facteur de reduction (0.5).
			Pour les pages plus proche de page principale les mouvementes d animation sont faible et pour les pages plus eloignee 
			les mouvements sont plus fort */
			var random = (Math.random() * (25 *  lastSectionNumber + 1)  - (25 *  lastSectionNumber + 1))*0.5;

			
			if (TweenMax.isTweening( o ) === false && typeof animObjects[o[0].id] == "undefined") {
				animObjects[o[0].id] = true;

				if (factor > 0) {
					TweenMax.to(o, .5, {delay:.25,bezier:[{left:random, top:0}, {left:0, top:random}, {left:-random, top:0}, {left:0, top:-random}], onComplete:function(){
						TweenMax.to(o, .1, {left:0, top: 0, onComplete:function() {
							TweenMax.to(o, .1, {left:0, top:-random/2, onComplete:function() {
								TweenMax.to(o, .1, {left:0, top:0, ease:Bounce.easeOut, onComplete:function(){
									delete animObjects[o[0].id];
								}});
							}});
						}});
					}});
				} else {
					TweenMax.to(o, .5, {delay:.25,bezier:[{left:0, top:-random}, {left:-random, top:0}, {left:0, top:random},{left:random, top:0}], onComplete:function(){
						TweenMax.to(o, .1, {left:0, top: 0, onComplete:function() {
							TweenMax.to(o, .1, {left:0, top:random/2, onComplete:function() {
								TweenMax.to(o, .1, {left:0, top:0, ease:Bounce.easeOut, onComplete:function(){
									delete animObjects[o[0].id];
								}});
							}});
						}});
					}});
				}
			}			
		}
};	
