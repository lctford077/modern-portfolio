$(function() {

	const burger = $('#burger'),
	      menu = $('#menu'),
	      branding = $('.menu-header__branding'),
	      navList = $('.menu-header__list'),
	      navItem = $('.menu-header__item'),
	      body = $('body'),
	      overlay = $('.overlay');
	
	burger.click(function() {
	    burger.toggleClass('active');
	    menu.toggleClass('active');
	    navItem.toggleClass('open');
	    branding.toggleClass('open');
	    navList.toggleClass('open');
	    // overlay.fadeIn();
	    body.toggleClass('lock');
	});

	const navLink = $('#menu [href]');
	
	navLink.each(function() {
	    if (this.href == window.location.href) {
	        $(this).addClass('active');
	    }
	});

	const backToTop = $('.back-to-top');
	
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 270) {
	        backToTop.fadeIn();
	    } else {
	        backToTop.fadeOut();
	    }
	});
	
	backToTop.click(function(event) {
	    event.preventDefault();
	    $("html, body").animate({
	        scrollTop: 0
	    }, 800);
	});

});