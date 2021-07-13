$(document).ready(function(){
	
	// fix pour accès à l'espace partenaire après formulaire prospect
	//si cookie alors passage par deconnexion.do avant d'accéder à l'espace parteniare
	if (window.location.pathname == '/Proximeo/creerProspectForWeb.do') {
		setCookie('formulairePartenaire','yes',365);
	}
		
	if (readCookie('formulairePartenaire') == 'yes') {
			$('.connexion-partenaire').attr('href', '/Proximeo/deconnexion.do?typeConnexion=CRTCNX');
	}

	//  creation cookie si clic sur devenir partenaire  ou si on est sur la page devenir partenaire
	//alert();

	
	$('.form-partenaire').click(function(){
		setCookie('formulairePartenaire','yes',365);
	}); 
	
	
	$('.connexion-partenaire').click(function(){
		
		 deleteCookie( 'formulairePartenaire' ) ;
		
	});

	$('a.pathway').click(function(e){
			e.preventDefault();
	})

//page assurance pro details 
 	$('.plus').click(function(){
		if (  ( !  $(this).parent('.bloc-3').hasClass('shover') ) && ( $('.shover').length > 0 ) ) {
			$('.shover').removeClass('shover');
			$('.plus').text('+');
			
		};
			
	 	$(this).parent('.bloc-3').toggleClass('shover');
		if ($(this).text() == '+' ) { $(this).text('-') ;} else {$(this).text('+') }

	 
	 })	
	

		


	
});