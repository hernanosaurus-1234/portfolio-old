let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const addButtonEvents = (function() {

	let navButton  	 = $('.nav-button');

	let arrowButton      = $('.arrow-button');
	let projectButton    = $('.card-button');

	function init() {

		// Navigation Button
		$(navButton).mouseenter(function(e) {
            e.preventDefault();
            
            let navText = '#' + this.id + ' p';
            gsap.to($(navText), { x: 14, duration: 0.3 });
			
            let arrow = '#' + this.id + ' .arrow';
        
			gsap.to($(arrow), { left: 0, opacity: 1, duration: 0.3 });
		});

		$(navButton).mouseleave(function(e) {
            e.preventDefault();
            
            let navText = '#' + this.id + ' p';
            gsap.to($(navText), { x: 0, duration: 0.3 });
			
			let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { left: -14, opacity: 0, overwrite: true, duration: 0.3 });
		});

		// Arrow Butons
		$(arrowButton).mouseenter(function(e) {
			e.preventDefault();
			
			let arrow = '#' + this.id + ' .arrow';

			gsap.to($(arrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		});

		$(arrowButton).mouseleave(function(e) {
			e.preventDefault();
			
			let arrow = '#' + this.id + ' .arrow';

			gsap.to($(arrow), { x: 0, overwrite: true, duration: 0.3 });
		});

		// Project Buttons
		$(projectButton).mouseenter(function(e) {
			e.preventDefault();

            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: -10, z:0.01, boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1)', duration: 0.1 });
            
            let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		});

		$(projectButton).mouseleave(function(e) {
            e.preventDefault();
            
            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: 0, z:0.01, boxShadow: '0px 0px 0px 0px rgba(33, 33, 33, 0)', duration: 0.1 });

			let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { x: 0, overwrite: true, duration: 0.3 });
		});
	}

	return {
		init : init
	};
})();

addButtonEvents.init();

const hambugerMenu = (function() {
	let isOpen = false;
	let tl     = new TimelineMax({paused:true});

	function init() {

		gsap.set('.mobile-nav', {y: '-100%'});
		gsap.set('.overlay', {y: '-100%'});

		tl.timeScale(1);

		tl.to($(".hamburger-inner-01"), 0.5, { y: 10, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut})
		.to($(".hamburger-inner-02"), 0.5, { opacity:0, rotation: 0.01, z:0.01, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-03"), 0.5, { y: -8, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-01"), 0.8, {rotation:585})
		.to($(".hamburger-inner-02"), 0.8, {rotation:585}, "-=0.8")
		.to($(".hamburger-inner-03"), 0.8, {rotation:675}, "-=0.8")
		.to($('main'), 0.75, {y:500, ease: Power2.easeInOut}, "-=1")
		.to($('.mobile-nav'), 0.75, {y:'0%', ease: Power2.easeInOut}, "-=1")
		.fromTo($('#m-nav-button-1'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-2'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-3'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-4'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#mobile-resume'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('.mobile-nav .social-wrapper'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3');

		tl.reversed( true );

		$('.hamburger').on('click', function(e) {

			toggleMenu();

			// if (isOpen === false) {
			// 	isOpen = true;

			// 	// $('#hamburger .hamburger').addClass('is-active');
			// 	// $('#hamburger').addClass('menu-active');

			// } else {
			// 	isOpen = false;

			// 	// $('#hamburger .hamburger').removeClass('is-active');
			// 	// $('#hamburger').removeClass('menu-active');
			// }
		});
	}

	function toggleMenu() {
		tl.reversed() ? tl.play() : tl.reverse();	
	}
	

	return {
		init : init
	};
})();

hambugerMenu.init();