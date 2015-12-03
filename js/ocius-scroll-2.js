var lastSection     = null;
var visitedSections = [];
var blockAnimation1 = blockAnimation2 = false;
var modal = false;  //



$(function() {
	$.scrollify({
		section : "section",	    	
	});	
});

$.scrollify({
	section : "section",
	sectionName : "section-name",
	easing: "easeInOutElastic",
	scrollSpeed: 750,
	offset : 0,
	scrollbars: true,
	before:function(sectionNumber) {	
	
			
				
		switch (sectionNumber) {
			case 0:				
				if (blockAnimation1 === false) {				   				
					blockAnimation1 = true;					
					$('#calculat1').animate({marginTop: '12%'}, 1200, 'easeInOutElastic');					
					$('#calculat2').animate({marginTop: '3%'}, 1100, 'easeOutElastic');
					$('.bonHomme').show("slow");
					$('#ecran').animate({marginTop: '-4%'}, 1000, 'easeInOutElastic');
					$('#pcRight').animate({marginTop: '8%'}, 1100, 'easeInOutElastic');
					$('#tablette').animate({marginLeft: '-2%'}, 1200, 'easeInOutElastic');
					$('#carnet').animate({marginLeft: '-2%'}, 1200, 'easeInOutElastic');
					$('#clavier').animate({marginLeft: '-3%'}, 1100, 'easeInOutElastic');
					$('#ecouteur').animate({marginTop:'1%', "marginRight":"3%"});
					$('#blocNote1').animate({marginTop:'6%', "marginRight":"9%"},function(){
						$("#blocNote1").rotate({ animateTo:360});
					});
					$('#blocNote2').animate({marginBottom:'10%', marginLeft: '13%'},function(){
						$("#blocNote2").rotate({ animateTo:360});						
					});
					//MB. added to the longest time animation of the case 0 (1200 miliseconds)
					setTimeout(function(){
						blockAnimation1 = false;											
					},1200); 
				}
					
				
		    	if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#boule1"), 1, lastSectionNumber);
					rotateUp.init($("#boule2"), -1, lastSectionNumber);
					rotateUp.init($("#boule3"), 1, lastSectionNumber);
					rotateUp.init($("#boule4"), -1, lastSectionNumber);
					rotateUp.init($("#boule5"), 1, lastSectionNumber);
					rotateUp.init($("#boule14"), -1, lastSectionNumber);
					rotateUp.init($("#boule7"), 1, lastSectionNumber);
					rotateUp.init($("#boule6"), -1, lastSectionNumber);		
					rotateUp.init($("#boule8"), 1, lastSectionNumber);
					rotateUp.init($("#boule9"), 1, lastSectionNumber);
					rotateUp.init($("#boule10"), -1, lastSectionNumber);
					rotateUp.init($("#boule11"), -1, lastSectionNumber);
					rotateUp.init($("#boule12"), -1, lastSectionNumber);
					rotateUp.init($("#boule13"), -1, lastSectionNumber);
					rotateUp.init($("#boule"), -1, lastSectionNumber);
					rotateUp.init($(".bonHomme"), -1, lastSectionNumber);					
		    	}
				break;
		/*
		
		*/
				if (blockAnimation2 === false) {					
					blockAnimation2 = true;					
					$('#calculat1').animate({marginTop: '-12%'}, 1000, 'easeInOutElastic');
					$('#calculat2').animate({marginTop: '-3%'}, 1100, 'easeOutElastic');
					$('.bonHomme').show("slow");
					$('#ecran').animate({marginTop: '4%'}, 1200, 'easeInOutElastic');					  					
					$('#pcRight').animate({marginTop: '-8%'}, 1300, 'easeInOutElastic');  					 					
					$('#tablette').animate({marginLeft: '2%'}, 1200, 'easeInOutElastic');
					$('#carnet').animate({marginLeft: '2%'}, 1000, 'easeInOutElastic');
					$('#clavier').animate({marginLeft: '3%'}, 1100, 'easeInOutElastic');
					$('#ecouteur').animate({marginTop:'-1%', "marginRight":"-3%"});
					$('#blocNote1').animate({marginTop:'-6%', "marginRight":"-9%"},function(){
						$("#blocNote1").rotate({ animateTo:360});
					});
					$('#blocNote2').animate({marginBottom:'0%', marginLeft: '-18%'},function(){
						$("#blocNote2").rotate({ animateTo:360});					
					//MB. added to the longest time animation of the case 1 (1300 miliseconds)	
						setTimeout(function(){
							blockAnimation2 = false;	
						},1300);  
					});  
				}				
					
				anim.boulesNoFade();
				
				rotateUp.init($("#map"),-1, lastSectionNumber);
				rotateUp.init($("#contactName"),-1, lastSectionNumber);
				rotateUp.init($("#contactEmail"),1, lastSectionNumber);
				rotateUp.init($("#contactArea"),-1, lastSectionNumber);

				if (visitedSections.indexOf(sectionNumber) != -1) {
					rotateUp.init($("#nuage3"),1, lastSectionNumber);
					rotateUp.init($("#nuage2"),-1, lastSectionNumber);
					rotateUp.init($("#nuage1"),1, lastSectionNumber);
					rotateUp.init($("#bouleNumeroTelephone"),-1, lastSectionNumber);
				}			
				break;						
			
	}},
	
	 		
		after:function(sectionNumber) {//console.log("after");
		lastSectionNumber = sectionNumber; // MB. assign current page no to var lastSectionNumber 
		
		if (lastSection !== sectionNumber) {
			var Y = $(document).scrollTop();
			$('#language').css('visibility', 'visible').zIndex(20000); 			
			TweenMax.to($('#language'), 0, { y : Y - 100 } );			
			TweenMax.to($('#language'), .5, { y : Y + 10 } );
			
		//*********************************************************************	
			var w = window.innerWidth;
		    var h = window.innerHeight;			

			$('#boule-tete').css('visibility', 'visible').zIndex(20000); 				
			TweenMax.to($('#boule-tete'), 0.5, { y : Y + h/1.3 - $('#boule-tete').length });							
			TweenMax.to($('#boule-tete').fadeIn, { y : Y + h/1.3 - $('#boule-tete').length });
			
		
			switch (sectionNumber) {
				case 0 :				
				   	if (typeof(emailSent) !== 'undefined' && emailSent === true) {
						emailSent = false;
						anim.bonhomme();
						anim.emailSent();						
					} else {
						if (lastSection === null) {
							anim.bonhomme();
							anim.boules();
							anim.brasCellulaire();
							anim.tablette();							
						} 						
					}
					if ($.browser.mobile === true) {
						anim.boulesFadeInOut();
					}
					break;
					
					/* MB.  switch case pour chaque page, pour ajouter les pages dans site web (case 1-case 16*/
				case 1 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page2"), 1, lastSectionNumber);					
					break;
				}		
			case 2 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page3"), 1, lastSectionNumber);  							
					break;
				}				
			case 3 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page4"), 1, lastSectionNumber);					
					break;
				}				
			case 4 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page5"), 1, lastSectionNumber);
					break;
				}				
			case 5 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page6"), 1, lastSectionNumber);
					break;
				}				
			case 6 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page7"), 1, lastSectionNumber);
					break;
				}				
			case 7 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page8"), 1, lastSectionNumber);
					break;
				}				
			case 8 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page9"), 1, lastSectionNumber);
					break;
				}				
			case 9 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page10"), 1, lastSectionNumber);
					break;
				}				
			case 10 :
				if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#page11"), 1, lastSectionNumber);
					break;
				}	
						
			case 11 :				
				 var id = $(':focus').attr("id");		
				 switch (id) {
					case 'contactArea':
					case 'contactName':
					case 'contactEmail':
						return;
						break;
				}	

			
			
		
				
				    // ajoute modal
                 	if (modal === false) {
						modal = true;

						var w = window.innerWidth;
						var h = window.innerHeight;
						var o = $("#modal");
						var width  = o.width();
						var height = o.height();
						var posX = w / 2 - width / 2;
						var posY = h / 2 - height / 2;

						TweenMax.to(o, 0, {x: posX, y: posY});
						TweenMax.to(o, 1, {delay: 0.5, opacity: 1, onComplete:function(){
							TweenMax.to(o, 1, {delay: 5, opacity: 0, onComplete:function(){
								o.css({"display":"none"});
							}});
						}});
					}
					

					
					anim.bonhommeContact();
					anim.cellRinging();					

					if (lastSection === null) {
						anim.bonhomme();
						anim.boules();
					}

					if (visitedSections.indexOf(sectionNumber) == -1) {
						anim.bulleTelephoneContact();
						anim.nuagesContact();
						visitedSections.push(sectionNumber);
					}					
					$('#contactArea').focus(); /*MB . ajoutee focus dans contactArea (page Contact)*/
					
					
					
					ga('set', {
						page: '/contact',
						title: 'Contact Us'
					});						
					break;					
			}
			lastSection = sectionNumber; //MB . assign current page no to var lastSectionNumber 			
			
			
			
			
		}		
	},
	afterResize:function() {
		anim.bonhommeContact();
		anim.bonhomme();
		anim.boules();
		anim.bulleTelephoneContact();
		anim.nuagesContact();
			
			
	}	
});



 