
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


$(window).load(function(){          
	$("#contactName").addClass("OciusAnimationLeft ");
	$("#contactEmail").addClass("ociusAnimationCenter");
	$("#contactArea").addClass("OciusAnimationLeft");
	$("#bouton").addClass("ociusAnimationCenter");    
	$('#calculat1').animate({marginTop: '15%'}, 1000, 'easeInOutElastic');
	$('#calculat2').animate({marginTop: '3%'}, 1100, 'easeOutElastic');
	$('#ecran').animate({marginTop: '-4%'}, 1200, 'easeInOutElastic');
	$('#pcRight').animate({marginTop: '8%'}, 1300, 'easeInOutElastic');	
	$('#tablette').animate({marginLeft: '-2%'}, 1200, 'easeInOutElastic');
	$('#cell').animate({right: '0%'}, 1000, 'easeInOutElastic');
    $('#usb').animate({marginLeft: '3%'}, 1000, 'easeInOutElastic');
	$('#carnet').animate({marginLeft: '-2%'}, 1100, 'easeInOutElastic');
	$('#clavier').animate({marginLeft: '-3%'}, 1200, 'easeInOutElastic');
	$('#ecouteur').animate({marginTop:'1%', "marginRight":"3%"});
	$('#blocNote1').animate({marginTop:'6%', "marginRight":"9%"},function(){
		$("#blocNote1").rotate({ animateTo:360});
	});
	$('#blocNote2').animate({marginBottom:'10%', marginLeft: '13%'},function(){
		$("#blocNote2").rotate({ animateTo:360});		
	});	
    anim.boules();	 
	
});

function ociusResetClass(element, myClass) {
	var elm = document.getElementById(element);
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);	
}

window.addEventListener("orientationchange", function(event) {     
	var myTimeout = setTimeout(function(){
		anim.bonhomme();
		anim.boules();		
	}, 1000);	 
}, false);

$(document).ready(function(){
	var allTexts = {
		fr : {
			lock   : "Pour déverouiller, faites glisser la flèche vers la droite.",
			unlock : "Le formulaire peut maintenant être envoyé."
		},
		en : {
			lock   : "To unlock, slide the arrow to the right.",
			unlock : "The form can now be send."
		}
	}

	ociusLanguages.setButton();

	var lang  = ociusLanguages.get();
	var texts = allTexts[lang];
	
    // More complex call
    $('.QapTcha').QapTcha({
      autoSubmit : false,
      autoRevert : true,
      PHPfile : 'qaptcha/php/Qaptcha.jquery.php',
      txtLock : texts.lock,
      txtUnlock : texts.unlock
    });

	$('#language').bind('click', function(){
		ociusLanguages.set($(this).text().toLowerCase());
	});

	$("#commentForm").submit(function(e) {
		var scale = $(window).innerWidth / 1920;

		var opts = {
		  lines: 13 // The number of lines to draw
		, length: 50 // The length of each line
		, width: 14 // The line thickness
		, radius: 42 // The radius of the inner circle
		, scale: .4 // Scales overall size of the spinner
		, corners: 1 // Corner roundness (0..1)
		, color: '#f4901f' // #rgb or #rrggbb or array of colors
		, opacity: 0.25 // Opacity of the lines
		, rotate: 0 // The rotation offset
		, direction: 1 // 1: clockwise, -1: counterclockwise
		, speed: 1 // Rounds per second
		, trail: 60 // Afterglow percentage
		, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
		, zIndex: 2e9 // The z-index (defaults to 2000000000)
		, className: 'spinner' // The CSS class to assign to the spinner
		, top: '50%' // Top position relative to parent
		, left: '50%' // Left position relative to parent
		, shadow: false // Whether to render a shadow
		, hwaccel: false // Whether to use hardware acceleration
		, position: 'absolute' // Element positioning
		};
		var target = document.getElementById('spin');
		var spinner = new Spinner(opts).spin(target);
	});
	$("#bonhommeSection1").on("click", function(e){	
		$.scrollify.move("#page-17");          		
		e.preventDefault();	      		
	});	
		
	
	$("#bonhommeSection2").click(function(){	
		$.scrollify.move("#page-1");
	});
	for (var i = 0; i < boules.length; i += 1) {
		$("#" + boules[ i ].name + " svg circle").css('cursor','pointer');		
	}
	
	
	/* MB. J ai fait jQuerry pour  chaque page cree, pour avoir function "scrollify".
    	Aussi, chaques boule est lie a la page corespondente*/	
	
    $("#" + boules[5].name + " svg circle").click(function(){  			
			anim.boulesMenuShrink( "#page-2" );			
  	});		
	$("#" + boules[7].name + " svg circle").click(function(){  
            anim.boulesMenuShrink( "#page-2" );			
  	});
	$("#" + boules[9].name + " svg circle").click(function(){   
            anim.boulesMenuShrink( "#page-2" );			
  	});
	$("#" + boules[2].name + " svg circle").click(function(){    			
			anim.boulesMenuShrink( "#page-3" );				
  	});	
	$("#" + boules[8].name + " svg circle").click(function(){    
            anim.boulesMenuShrink( "#page-3" );	
  	});
	$("#" + boules[12].name + " svg circle").click(function(){           	
			anim.boulesMenuShrink( "#page-3" );
  	});	
	$("#" + boules[1].name + " svg circle").click(function(){  			
            anim.boulesMenuShrink( "#page-4" );					
  	});
	$("#" + boules[11].name + " svg circle").click(function(){        
            anim.boulesMenuShrink( "#page-4" );				
  	});
	$("#" + boules[3].name + " svg circle").click(function(){  			
			anim.boulesMenuShrink( "#page-4" );				
  	});	
	$("#" + boules[13].name + " svg circle").click(function(){       
            anim.boulesMenuShrink( "#page-4" );			
  	});
	$("#" + boules[0].name + " svg circle").click(function(){       
		anim.boulesMenuShrink( "#page-5" ); 		
  	});	
	$("#" + boules[10].name + " svg circle").click(function(){     
			anim.boulesMenuShrink( "#page-5" );
  	});
	$("#" + boules[4].name + " svg circle").click(function(){ 			
            anim.boulesMenuShrink( "#page-6" );  		
  	});
	$("#" + boules[14].name + " svg circle").click(function(){    
			anim.boulesMenuShrink( "#page-7" );
  	});	
	$("#" + boules[6].name + " svg circle").click(function(){    			
            anim.boulesMenuShrink( "#page-8" );	
  	});
	
	/*		MB		
		Remettre la visibilité pour chaque page 	
	*/
	
	$("#page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9, #page10, #page11").css('visibility', 'visible');	
	
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


