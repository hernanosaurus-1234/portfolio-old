let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const addButtonEvents = (function() {

	let dNavButton  	 = $('.nav-button');

	let arrowButton      = $('.arrow-button');
	let projectButton    = $('.card-button');

	function init() {

		// Navigation Button
		$(dNavButton).mouseenter(function(e) {
			e.preventDefault();
			
			let arrow = '#' + this.id + ' .arrow';

			gsap.to($(arrow), { left: 0, opacity: 1, duration: 0.3 });
		});

		$(dNavButton).mouseleave(function(e) {
			e.preventDefault();
			
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

		gsap.set('.mobile-nav', {x: '101%'});
		gsap.set('.mobile-nav .color-overlay', {x: '101%'});

		tl.timeScale(1);

		tl.to($('.mobile-nav'), 0.75, {x:'0%', ease: Power2.easeInOut})
		.to($('.mobile-nav .color-overlay'), 1.25, {x:'0%', ease: Power2.easeInOut}, '-=1.0')
		.fromTo($('#m-nav-item-1'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-item-2'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-item-3'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-item-4'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-resume'), 0.5, {y:-10, opacity:0}, { y:0, opacity:1, ease: Power1.easeInOut}, '-=0.3');

		tl.reversed( true );

		$('.hamburger').on('click', function(e) {

			toggleMenu();

			if (isOpen === false) {
				isOpen = true;

				$('#hamburger .hamburger').addClass('is-active');
				$('#hamburger').addClass('menu-active');

			} else {
				isOpen = false;

				$('#hamburger .hamburger').removeClass('is-active');
				$('#hamburger').removeClass('menu-active');
			}
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