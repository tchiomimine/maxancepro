function readCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function deleteCookie( name ) {
	document.cookie = name + '=no; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value+"; path=/";
	
}

$(document).ready(function(){
	

// sous-menu : style du premier �l�ment de liste par d�faut

		$('#menu-produits > li > .sous-menu > li.first').addClass('default');
		$('#menu-produits > li > .sous-menu > li').hover(function(){
			$('#menu-produits > li > .sous-menu > li.first').removeClass('default')	
		},function(){
			$('#menu-produits > li > .sous-menu > li.first').addClass('default')
		});

// show/hide pages produits
if($('.item-page.produit').length > 0) {
	//alert($('.item-page.produit').height());

	 var titres = $('.item-page h2.showLink').detach();
	  titres.insertAfter('h1');
	 
	  var hauteurs = new Array();
	  
 
	  //recup�ration des hauteurs des divs � afficher
	  var diffHauteur = parseInt( $('.item-page.produit').outerHeight()) ;

	  $('.item-page div.showContent').each(function(){
		
		diffHauteur -=  parseInt($(this).outerHeight() );
		
		hauteurs[$(this).attr('id')] =  $(this).outerHeight();
	  });

	  
	  // positionnement des div. Defaut : tableau des formules sauf si lien video demand� (hash video)
	  $('.showContent').css({ "display": "none"} ) ;
 	var ancre = window.location.hash;
	if( ancre == "#video"){
		var position = $('article').offset().top;

		$('html,body').animate({scrollTop:position}, 1);
		$('.item-page h2.video').addClass('active');
		$('.item-page #video').css({'display' : 'block'});
		$('.item-page.produit').height(parseInt(hauteurs['video']) + diffHauteur);


	} else {
		if ($('.item-page h2.formules').length > 0){
			$('.item-page h2.formules').addClass('active');
			$('.item-page #formules').css({'display' : 'block'});
			$('.item-page.produit').height(parseInt(hauteurs['formules']) + diffHauteur);			
		} else {
			var idActive =  $('.item-page div.showContent').first().attr('id');

			$('.item-page h2.' + idActive).addClass('active');
			$('.item-page #'+ idActive).css({'display' : 'block'});
			$('.item-page.produit').height(parseInt(hauteurs[idActive]) + diffHauteur);		}

	}



	  
	  titres.click(function(){
		  titres.removeClass('active');
		  var classe = $(this).attr('class').replace('showLink ', '');
		  
		 $('.item-page .showContent').fadeOut('300');
		  
	  	$('.item-page.produit').animate({ height: parseInt(hauteurs[classe]) + diffHauteur }, 500);
		  $( '#' + classe).fadeIn('300' );		  
		  $(this).addClass('active');
	  });
	  
	} 
	
});