<?php
require_once __DIR__ . '/mailer/PHPMailerAutoload.php';

include      __DIR__ . '/php/ocius-mail2.php';

if (isset($_GET['lang'])) {
	$lang = $_GET['lang'];
	if ($lang === "fr") {
		$language = "fr";
	} else {
		$language = "en";
	}
} else if (isset($_COOKIE['ocius_language']) === true) {
  $language = $_COOKIE['ocius_language'];
} else {
  $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
}

if ($language !== "fr" && $language !== "en") {
  $language = 'en';

  setcookie('ocius_language', $language, time() + 3600 * 24 * 365 * 20);
}

?>

<!DOCTYPE html>


<html>
  <head>
	<?php
		if ($language === "en") {
			$title = "OCIUS Group";
		} else {
			$title = "Groupe OCIUS";
		}
	?>				
	<title><?php echo $title; ?></title>

	<meta charset = "utf-8">
	<meta name = "description" content = "Ocius">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/favicon.ico" type="image/x-icon">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/boule.css">
	<link rel="stylesheet" href="css/modal.css">
	<link rel="stylesheet" href="css/media_mobile.css">
	<link rel="stylesheet" href="css/media_tablet.css">
	<link rel="stylesheet" href="qaptcha/jquery/QapTcha.jquery.css">
	<link rel="stylesheet" href="js/jquery-ui.min.css">

	<style type="text/css">
		@font-face {
	    font-family: Dosis-Regular;
	    src: url(objets/Dosis-Regular.otf) ;
		}
		circle:hover{
			fill:#F4901F;
			fill-opacity:0.25;
			transition:0.35s;
		}
		.bouleNew svg{
			height: 187px;
		}
		
	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="https://maps.google.com/maps/api/js?sensor=false"></script>
	<script src="js/markerwithlabel_packed.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="qaptcha/jquery/jquery.ui.touch.js"></script>
	<script src="qaptcha/jquery/QapTcha.jquery.min.js"></script>
	<script src="js/ocius-analytics.js"></script>
	<script src="js/TweenMax.min.js"></script>
		
  </head>

  
	<body>
		<img src="objets/OC001_ICONE-bonhomme_blancV2.png" class="bonHomme hidden-xs">

		<!--SVG Boule-->				
						
		<?php
			if ($language === "en") {
				include 'php/svgEn.php';
			} else {
				include 'php/svgFr.php';
			}
		?>

		<span id="language">
			<?php
				if ($language === "en") {							
					echo "En français svp!";							
				} else {
					echo "English please";
				}
			?>
		</span>
		<img src="objets/boule-vide.svg" id="boule-tete" class="boule-tete">
		<section data-section-name="page-1" id="section1" class="overflowHidden">
			<div class="container-fluid div100Relative">
				<div id="ocius-div-h1-first-page" class="text-center">
					<h1 id="h1-first-page" class="text-center ocius-h1-first-page">
					<?php
						if ($language === "en") {
							echo "Whether you want us to manage your  IT<br />or assist your IT department,<br />Ocius can help you.";
						} else {
							echo "Que ce soit pour gérer votre parc<br />informatique ou assister votre département TI,<br />Ocius peut vous aider.";
						}
					?>
					</h1>
				</div>
				<img src="objets/_OC001_siteWeb-mains12.png" class="hidden-xs " id="clavier">
				<img src="objets/_OC001_siteWeb-ordi2.png" class="hidden-xs " id="ecran">
				<img src="objets/_OC001_siteWeb-cleUsb50.png" class="hidden-xs " id="usb">
				<img src="objets/_OC001_siteWeb-cafe1V2.png" class="hidden-xs " id="cafe">
				<img src="objets/_OC001_siteWeb-mains2V2.png" class ="hidden-xs hidden-sm" id="pcRight">
				<img src="objets/_OC001_siteWeb-calculatrice1V2.png" class="hidden-xs hidden-sm" id="calculat1">
				<img src="objets/_OC001_siteWeb-mains5V2.png" class="hidden-xs hidden-sm" id="pcLeft">
				<img src="objets/_OC001_siteWeb-cafe3V2.png" class="hidden-xs hidden-sm" id="cafe3">
				<img src="objets/_OC001_siteWeb-ecouteursV2.png" class="hidden-xs " id="ecouteur">
				<img src="objets/_OC001_siteWeb-blocnote1V2.png" class="hidden-xs hidden-sm" id="blocNote1">
				<img src="objets/_OC001_siteWeb-calculatrice2V2.png" class="hidden-xs hidden-sm" id="calculat2">
				<img src="objets/_OC001_siteWeb-cafe2V2.png" class="hidden-xs " id="cafe2">
				<img src="objets/_OC001_siteWeb-blocnote2V2.png" class="hidden-xs hidden-sm" id="blocNote2">
				<div id="tablette">
					<img src="objets/_OC001_siteWeb-mains4V2.png" class="hidden-xs " id="tabletteImg">
				</div>
				<div id="cell">
					<img src="objets/_OC001_siteWeb-mains3V2.png" class="hidden-xs hidden-sm" id="cellImg">
				</div>
				<img src="objets/_OC001_siteWeb-carnetV2.png" class="hidden-xs hidden-sm" id="carnet">
				<img src="objets/thinkCircle.svg" id="pensee_1">
				<img src="objets/thinkCircle.svg" id="pensee_2">
				<?php
					if ($language === "en") {
						$image = 'objets/pensee3En.svg';
					} else {
						$image = 'objets/pensee3Fr.svg';
					}
				?>
				<img src="<?php echo $image; ?>" id="pensee_3">

				<img src="objets/bonhomme_blanc_carte50.png" class="visible-xs" id="bonhommeSection1">
				<div id="ocius-div-h2-first-page" class="text-center">
					<h2 id="h2-first-page" class="ocius-h2-first-page">
					<?php
						if ($language === "en") {
							echo "Want to do it yourself? Use our self-serve tools!";
						} else {
							echo "Vous souhaitez faire le tout vous même?<br />Utilisez nos outils libre service!";
						}
					?>
					</h2>
				</div>
			</div>
		</section>
		
		<!--
		MB. J ai cree  les page suivantes, leur donne nom et id, et lie a chaque boule du page principale.
		Maintenant chaque boule a sa propre page. 15 boules = 15 pages, ca commence avec page numero 2. 
		-->
		<?php					
			if ($language === "en") {
				$title2 = "Automated maintenance-2 </br> Managed updates and Security  Patches-2 </br> Managed Security. Anti-virus Protection -2" ;
			} else  {
				$title2 = "Maintenance automatisée-2 </br> Mise à jour-2 </br> Protection Antivirus-2";
			}									
		?>
		<a name="page-2"></a>			
		<section data-section-name="page-2" id="section2">
		    <div class="container-fluid div100Relative">            			
				<h1 id="page2"><?php echo $title2 ?></h1>
				<div class="bottomDiv ligneNoir"></div>	
				<div class="bottomDiv bottomDiv2"></div>
			</div>
		</section>		
		
		<?php					
			if ($language === "en") {
				$title3 = "System health-3 </br> Hardware and Software Inventory Management-3 </br> Infrastructure Documentation-3";				
			} else {
				$title3 = "Rapports analyse-3 </br> Gestion Inventaire-3 </br> Documentation du parc informatique-3";
			}									
		?>
		<a name="page-3"></a>
		<section data-section-name="page-3" id="section3">
			<div class="container-fluid div100Relative">			
				<h1 id="page3"><?php echo $title3 ?></h1>
			<div class="bottomDiv bottomDiv3"> 
			</div>	</div>		
		</section>
		
		<?php					
			if ($language === "en") {
				$title4 = "Incident Reporting-4 </br> Real-time Monitoring and performance optimisation-4 </br>
				           User Support and troubleshooting-4  </br>  Users and Rights Management-4 ";
			} else {
				$title4 = "Prévention Incident-4 </br> Monitoring et optimisations des performances en temps reel-4 </br>
                           Soutien utilisateurs-4 </br> Gestion des utilisateurs et des droits d acces-4 ";
			}									
		?>
		<a name="page-4"></a>	
		<section data-section-name="page-4" id="section4">
			<div class="container-fluid div100Relative">			 
				<h1 id="page4"><?php echo $title4 ?></h1>
            <div class="bottomDiv bottomDiv4">				
			</div>	</div>		
		</section>
		
		<?php					
			if ($language === "en") {
				$title5 = "On-Demand IT Consulting-5 </br> Project Management, Quality Control-5 ";           
			} else {
				$title5 = "Consultation ponctuelle-5 </br> Gestion Projets-5 ";
			}									
		?>	
		<a name="page-5"></a>
		<section data-section-name="page-5" id="section5">
			<div id="erica" class="container-fluid div100Relative backDiv5">
				<img src="objets/bg_p5_haut2.svg" class="bgP5">
				<h1 id="page5"><?php echo $title5 ?></h1>
	</div>		
		</section>
		
		<?php					
			if ($language === "en") {
				$title6 = "Mobile Devices Management-6";
			} else {
				$title6 = "Gestion d'appareils mobiles-6";
			}									
		?>	
		<a name="page-6"></a>
		<section data-section-name="page-6" id="section6">
			<div class="container-fluid div100Relative">			
				<h1 id="page6"><?php echo $title6 ?></h1>
			<div class="bottomDiv bottomDiv6">
			</div>	</div>		
		</section>
		
		<?php					
			if ($language === "en") {
				$title7 = "Managed Backups-7";
			} else {
				$title7 = "Sauvegarde des données-7";
			}									
		?>	
		<a name="page-7"></a>
		<section data-section-name="page-7" id="section7">
			<div class="container-fluid div100Relative">			  
				<h1 id="page7"><?php echo $title7 ?></h1>	
			<div class="bottomDiv bottomDiv7">
			</div>	</div>		
		</section>
		
		<?php					
			if ($language === "en") {
				$title8 = "Hardware Installation and Maintenance-8";
			} else {
				$title8 = "Implementation et Entretien Materiel-8";
			}									
		?>	
		<a name="page-8"></a>
		<section data-section-name="page-8" id="section8">
			<div class="container-fluid">
				<h1 id="page8"><?php echo $title8 ?></h1>	
			</div>			
		</section>		
		
		<?php					
			if ($language === "en") {
				$title9 = "Customer Area-9";
			} else {
				$title9 = "Espace client-9";
			}									
		?>
        <a name="page-9"></a>		
		<section data-section-name="page-9" id="section9">
			<div class="container-fluid">
				<h1 id="page9"><?php echo $title9 ?></h1>	
			</div>			
		</section>
		
		<?php					
			if ($language === "en") {
				$title10= "Assistance-10";
			} else {
				$title10 = "Assistence-10";
			}									
		?>	
		<a name="page-10"></a>
		<section data-section-name="page-10" id="section10">
			<div class="container-fluid">
				<h1 id="page10"><?php echo $title10 ?></h1>	
			</div>			
		</section>
		
		<?php					
			if ($language === "en") {
				$title11= "About us-11";
			} else {
				$title11 = "A propos de nous-11";
			}									
		?>	
		<a name="page-11"></a>
		<section data-section-name="page-11" id="section11">
			<div class="container-fluid">
				<h1 id="page11"><?php echo $title11 ?></h1>	
			</div>			
		</section>		
		
		 <!-- Page Contact -->
		<section data-section-name="page-12" id="section12"> 		    
		    <div id="modal"> <!-- ajoute modal -->
			<h1>
				<?php
					if ($language === "en") {
						echo "In construction";
					} else {
						echo "En construction";
					}
				?>
			</h1>
			<p>
				<?php
					if ($language === "en") {
						echo "This site is in construction process and has only limited functionality.";
					} else {
						echo "Ce site est en processus de construction et ne possède que des fonctionalités limitées.";
					}
				?>
			</p>
		</div>
			<div class="overflowHidden">
				<div id="spin"></div>
				<?php
					if ($language === "en") {
						include 'php/telEn.php';
					} else {
						 include 'php/telFr.php';
					}?>
				
				<img src="objets/nuage1-2.svg" id="nuage1" class="nuage1 hidden-xs">
				<img src="objets/nuage1-2.svg" id="nuage2" class="nuage2 hidden-xs">
				<img src="objets/nuage3v2.svg" id="nuage3" class="nuage3 hidden-xs">


				<div class="container-fluid">
					<div class="col-sm-6 hidden-xs" id="bonhommeContact">
						<img src="objets/bonhomme_coul_orange.png" class="bonhommeContactImg" id="bonHomCell">
										<img src="objets/cell3.png" class="bonhommeCell" id="cellContact">
					</div>
					<div class="col-sm-6 col-xs-12" id="contactDetails">
       
						<div class="col-xs-12" id="slide3">
							<form id="commentForm" class="form-horizontal" method="post" data-toggle="validator" role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>">
								<div id="contactAreaDiv" class="form-group">
								
								<?php
									if ($language === "en") {
										$messageArea = "What can we do for you? Write us here or call us!";
									} else {
										$messageArea = "Que peut-on faire pour vous? Ecrivez-nous ici ou appellez nous!";
									}									
								?>
									<textarea rows="4" class="form-control inputT" id="contactArea" name="comment" data-minlength="1" required  placeholder="<?php echo $messageArea; ?>"></textarea>
								</div>

								<?php
									if ($language === "en") {
										$nom = "Your name";
										$nomError = "Your name is required";
									} else {
										$nom = "Votre nom";
										$nomError = "Votre nom est requis";
									}
								?>
								<div id="contactNameDiv" class="form-group">
									<input type="text" class="form-control inputT" name="from" id="contactName" placeholder="<?php echo $nom; ?>" data-fv-row=".col-xs-12" data-minlength="1" pattern="^[a-zA-Z\s]+$" 
									  required data-fv-notempty="true" data-fv-notempty-message="<?php echo $nomError; ?>"/>
								</div>

								<?php
									if ($language === "en") {
										$email = "Your email";
										$emailError = "A valid email address is required";
									} else {
										$email = "Votre courriel";
										$emailError = "Une adresse courriel valide est requis";
									}
								?>
								<div id="contactEmailDiv" class="form-group">
									<input type="email" class="form-control inputT" id="contactEmail" name="email" data-fv-notempty="true" data-fv-notempty-message="<?php echo $emailError; ?>" data-minlength="1"
									  required placeholder="<?php echo $email; ?>" data-fv-emailaddress="true" data-fv-emailaddress-message="The input is not a valid email address"/>
								</div>

								<div id="qaptcha" class="QapTcha"></div>

								<?php
									if ($language === "en") {
										$submitBtn = "Send";
									} else {
										$submitBtn = "Envoyer";
									}
								?>
								<input id="submitBtn" class="btn ocius-btn" type="submit" name="submit" value="<?php echo $submitBtn; ?>" />
							</form>
							<p id="numeroTel" class="visible-xs"><span class="glyphicon glyphicon-earphone"></span><b> +1 (514) 500-3985</b></p>
						</div>

						<div class="row col-sm-12 hidden-xs" id="carte">
							<div id="map">                          
							</div>
						</div>
					</div>
				</div>
				
				<img src="arrow2.png" id="bonhommeSection2">
				
				<?php
					$copyright = " 2015 OCIUS";
				?>
				<p id="copyright"><span class="glyphicon glyphicon-copyright-mark"></span><b><?php echo $copyright; ?></b></p>
			</div>			
		</section>
		
		
		
		<?php if (isset($message)) echo $message; ?>
		<script src="js/boule.js"></script>
		<script src="js/jquery.scrollify.js"></script>
		<script src="js/jquery.cookie.js"></script>
		<script src="js/spin.min.js"></script>
		<script src="js/animation.js"></script>
		<script src="js/ocius-general.js"></script>
		<script src="js/ocius_languages.js"></script>
		<script src="js/ocius-scroll-2.js"></script>
		<script src="js/carteOcius.js"></script>
		<script src="js/rotate.js"></script>		
	</body>
</html>