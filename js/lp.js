jQuery(function($) {'use strict';

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			type: 'POST',
			url: 'sendemail.php',
			data: form.serialize(),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Enviando E-mail...</p>').fadeIn() );
			}
		}).done(function(){
			form_status.html('<p class="text-success">Obrigado por nos contatar, o mais breve possível retornaremos o contato. </p>').delay(5000).fadeOut();
		});
	});
	
	// *********** FIXED FOOTER ************ //  

	$(document).scroll(footerDisplay);
	$(window).resize(footerDisplay);
	$(document).ready(footerDisplay);
	
	function footerDisplay() {
		var y = $(this).scrollTop();
		var h = $(document).height();
		var x = h - y;
		if ( x < 1200) {
			$('#footer').show();
		} else {
			$('#footer').hide();
		}
	}

	// ************* WA-BTN ************* // 
 
	$(".float").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
		$(this).removeClass("watada")  
	})
	
	$(".float").hover(function(){
		$(this).addClass("watada");        
	})
	
	$(window).on('scroll', function() {
		var section = $( ".getintouch" );
		var wabtn = $( ".float" )
	

		if (wabtn.offset().top > section.offset().top) {
			wabtn.css('opacity', '0.6')
		} else {
			wabtn.css('opacity', '1')
		}
	})

	
	


});

// *************** POPUP FORM *************** //

var form = document.getElementById('popup-form');
var formbox = document.getElementById('form');
var home = document.getElementById('home');

function showForm() {
	home.style.overflowY = "hidden";
	// home.style.marginRight = "17px";
	form.classList.remove('hidden');
    setTimeout(function () {
      form.classList.remove('visHide');
    }, 20);
};

function hideForm() {
	form.classList.add('visHide');  
	home.style.overflowY = "overlay";
	setTimeout(function () {
		form.classList.add('hidden');    
		// home.style.marginRight = "0";
	  }, 450);  
}

// FORM - CLOSE ON ESC
$(document).keydown(function(event) { 
	if (event.keyCode == 27) { 
	  hideForm();
	}
});
// FORM - CLOSE ON OFF-CLICK
$(document).click(function(e) {
	if(!$(e.target).closest("#form, .call").length) {
		hideForm();
	}
})


//************** IMG-NOSELECT ****************/

var img = document.getElementsByTagName('img');
var imgCount = img.length;
for (var i = 0; i < imgCount; i++) {
	img[i].classList.add('no-select')
}

//*************** FAQ LIST *****************/

function showDiv(i) {
	const answerList = document.querySelectorAll('.faqbox .answer');
	const iconList = document.querySelectorAll('.question .fas');
	
	var answer = answerList[i-1];
	var ico = iconList[i-1];
	
	if (answer.style.maxHeight < '1px') {
		answer.style.maxHeight = '914px';
		answer.style.margin = '1.4rem 0';
		ico.style.transform = 'rotate(90deg)'
	} else {
		answer.style.maxHeight = '0';
		answer.style.margin = '0';
		ico.style.transform = 'rotate(0)'
	}
};

//*************** SMOOTH ANCHOR *****************/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});