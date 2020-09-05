gsap.registerPlugin(ScrollTrigger);
gsap.set('.mobile-nav', {y: '-100%'});

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const hambugerMenu = (function() {
	let isOpen = false;
	let tl     = new TimelineMax({paused:true});

	function init() {

		tl.timeScale(1);

		tl.to($(".hamburger-inner-01"), 0.5, { y: 10, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut})
		.to($(".hamburger-inner-02"), 0.5, { autoAlpha:0, rotation: 0.01, z:0.01, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-03"), 0.5, { y: -8, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-01"), 0.8, {rotation:585})
		.to($(".hamburger-inner-02"), 0.8, {rotation:585}, "-=0.8")
		.to($(".hamburger-inner-03"), 0.8, {rotation:675}, "-=0.8")
		.to($('.mobile-nav'), 0.75, {y:'0%', ease: Power2.easeInOut}, "-=1")
		.fromTo($('#m-nav-button-1'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-2'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-3'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#m-nav-button-4'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('#mobile-resume'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3')
		.fromTo($('.mobile-nav .social-wrapper'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, ease: Power1.easeInOut}, '-=0.3');

		tl.reversed( true );

		$('.hamburger').on('click', function(e) {
			toggleMenu();
		});
	}


	function toggleMenu() {
		if(isOpen == false)
			isOpen = true;

		tl.reversed() ? tl.play() : tl.reverse();	
	}

	function close() {
		if(isOpen == true){
			isOpen = false;

			tl.reverse();
		}
	}
	
	return {
		init  : init,
		close : close
	};

})();


// Navigation / Menu Hover Animation
const navigationButtonAnimation = (function() {

	let navButton = $('.nav-button');

	function init() {

		$(navButton).click(function(e) {
			e.preventDefault();
			
			var type = this.id.substring(0, 1);

			if(type === "m")
				hambugerMenu.close();
		});

		$(navButton).mouseenter(function(e) {
			e.preventDefault();

            let navText = '#' + this.id + ' p';
			gsap.to($(navText), { x: 14, duration: 0.3 });
		
			
            let arrow = '#' + this.id + ' .arrow';
        
			gsap.to($(arrow), { left: 0, autoAlpha: 1, duration: 0.3 });
		});

		$(navButton).mouseleave(function(e) {
            e.preventDefault();
            
            let navText = '#' + this.id + ' p';
            gsap.to($(navText), { x: 0, duration: 0.3 });
			
			let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { left: -14, autoAlpha: 0, overwrite: true, duration: 0.3 });
		});
	}

	return {
		init : init
	};
})();

// Call to Action Arrow Animation
const arrowButtonAnimation = (function() {

	let arrowButton = $('.arrow-button');

	function init() {

		$(arrowButton).mouseenter(function(e) {
			e.preventDefault();
			
			let arrow = '#' + this.id + ' .arrow';

			gsap.to($(arrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });

			cursor.toggleCursorSize(true);
		});

		$(arrowButton).mouseleave(function(e) {
			e.preventDefault();
			
			let arrow = '#' + this.id + ' .arrow';

			gsap.to($(arrow), { x: 0, overwrite: true, duration: 0.3 });

			cursor.toggleCursorSize(false);
		});
	}

	return {
		init : init
	};
})();

// Box Arrow Animation
const boxButtonAnimation = (function() {

	let projectButton    = $('.card-button');

	function init() {

		// Project Buttons
		$(projectButton).mouseenter(function(e) {
			e.preventDefault();

            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: -10, z:0.01, boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1)', duration: 0.1 });
            
            let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });

			cursor.toggleCursorSize(true);
		});

		$(projectButton).mouseleave(function(e) {
            e.preventDefault();
            
            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: 0, z:0.01, boxShadow: '0px 0px 0px 0px rgba(33, 33, 33, 0)', duration: 0.1 });

			let arrow = '#' + this.id + ' .arrow';
			gsap.to($(arrow), { x: 0, overwrite: true, duration: 0.3 });

			cursor.toggleCursorSize(false);
		});
	}

	return {
		init : init
	};
})();

// Social Buttons
const socialButtonAnimation = (function() {

	let socialButton    = $('.soc-button');

	function init() {

		// Social Buttons
		$(socialButton).mouseenter(function(e) {
			e.preventDefault();

			cursor.toggleCursorSize(true);
		});

		$(socialButton).mouseleave(function(e) {
            e.preventDefault();

			cursor.toggleCursorSize(false);
		});
	}

	return {
		init : init
	};
})();

// Adding All Button Events
const addButtonEvents = (function() {

	function init() {
		// Hamburger Menu
		hambugerMenu.init();
		// Navigation Menu
		navigationButtonAnimation.init();
		// Arrow Buttons
		arrowButtonAnimation.init();
		// Box Buttons
		boxButtonAnimation.init();
		// Social Buttons
		socialButtonAnimation.init();
	}

	return {
		init : init
	};
})();

addButtonEvents.init();

// Intro Animation
const introAnimation = (function() {
	let tl     = new TimelineMax({paused:true});
	// let tl     = new TimelineMax({onComplete: addButtonEvents.init, paused:true});

	function init() {

		tl.timeScale(1);

		if(isMobile) {
			tl.fromTo($('.logo'), 0.5, {scale:0, autoAlpha:0}, { scale:1, autoAlpha:1, z:0.01, ease: Power2.easeInOut})
			.fromTo($('.hamburger'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			// Hero Section Copies
			.fromTo($('#who-am-i .superscript-wrapper .text-ss'), 0.5, {x:-10, autoAlpha:0}, { x:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .superscript-wrapper .line'), 0.5, {width:10, autoAlpha:0}, { width:100, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .text-lg'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .text-sm'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .arrow-button'), 0.5, {x:-10, autoAlpha:0}, { x:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			}
		else {
			tl.fromTo($('.logo'), 0.5, {scale:0, autoAlpha:0}, { scale:1, autoAlpha:1, z:0.01, ease: Power2.easeInOut})
			.fromTo($('.hamburger'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			// Navigation Items
			.fromTo($('#d-nav-button-1'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-nav-button-2'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-nav-button-3'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-nav-button-4'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#desktop-resume'), 0.5, {y:-10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			// Hero Section Copies
			.fromTo($('#who-am-i .superscript-wrapper .text-ss'), 0.5, {x:-10, autoAlpha:0}, { x:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .superscript-wrapper .line'), 0.5, {width:10, autoAlpha:0}, { width:100, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .text-lg'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .text-sm'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#who-am-i .arrow-button'), 0.5, {x:-10, autoAlpha:0}, { x:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			// Social Buttons
			.fromTo($('.desktop-social-wrapper .line'), 0.5, {y:200, autoAlpha:0}, { y:0, autoAlpha:1, overwrite: true, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-soc-button-4'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut})
			.fromTo($('#d-soc-button-3'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-soc-button-2'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
			.fromTo($('#d-soc-button-1'), 0.5, {y:10, autoAlpha:0}, { y:0, autoAlpha:1, z:0.01, ease: Power2.easeInOut}, '-=0.3')
		}

		tl.play();
	}
	
	return {
		init: init
	};

})();


// Calling Intro Animation
introAnimation.init();


// Smooth Scrolling Effect on click of Navigation  Items
$(document).ready(function(){

	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			let hash = this.hash;
			gsap.to($('html, body'), { scrollTop: $(hash).offset().top - 80, duration: 1.0, ease: Power2.easeInOut });
		} 
	});
});

/*

	Detect Scrolling Event to determine to hide/show the Navigation Bar

*/

let isScrolling;

window.addEventListener('scroll', function ( event ) {

	gsap.to($('header'), { y: -80, duration: 0.1, overwrite: true });

	window.clearTimeout( isScrolling );

	isScrolling = setTimeout(function() {
		gsap.to($('header'), { y: 0, duration: 0.3 });
	}, 500);

}, false);


/*

	Detect Windowsize to hide/show the Mobile Navigation

*/


function displayWindowSize(){

	// Get width and height of the window excluding scrollbars
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	
	// Close the Burger Menu when viewing on a Larger Screen
	if (w > 728) {
		hambugerMenu.close();
	}
}
 
window.addEventListener("resize", displayWindowSize);

displayWindowSize();

// What I do Section Scroll Animation
gsap.set(".i-do", {y: 50, autoAlpha: 0})

gsap.to("#i-do-1", {
	scrollTrigger: {
		trigger       : "#who-am-i",
		toggleActions : "play none none none",
		start         : "150% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to("#i-do-2", {
	scrollTrigger: {
		trigger       : "#who-am-i",
		toggleActions : "play none none none",
		start         : "150% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 0.3,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

// About Me
gsap.set(".about-me .superscript-wrapper .text-ss", {x: -10, autoAlpha: 0})
gsap.set(".about-me .superscript-wrapper .line", {width: 0, autoAlpha: 0})

gsap.to(".about-me .superscript-wrapper .text-ss", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".about-me .superscript-wrapper .line", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	width     : 100,
	autoAlpha : 1,
	delay     : 0.3,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.set(".about-me .text-lg", {y: 10, autoAlpha: 0})
gsap.set(".about-me .text-sm", {y: 10, autoAlpha: 0})
gsap.set(".about-me .icon", {x: -10, autoAlpha: 0})
gsap.set(".about-me .text-xs", {x: -10, autoAlpha: 0})

gsap.to(".about-me .text-lg", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	delay     : 0.6,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".about-me .text-sm", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	delay     : 0.9,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".about-me .icon", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	delay     : 1.2,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".about-me .text-xs", {
	scrollTrigger: {
		trigger       : "#what-i-do",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	delay     : 1.5,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

// About Me
gsap.set(".recent-projects .superscript-wrapper .text-ss", {x: -10, autoAlpha: 0})
gsap.set(".recent-projects .superscript-wrapper .line", {width: 0, autoAlpha: 0})

gsap.to(".recent-projects .superscript-wrapper .text-ss", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".recent-projects .superscript-wrapper .line", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	width     : 100,
	autoAlpha : 1,
	delay     : 0.3,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

// What I do Section Scroll Animation
gsap.set("#recent-projects .card-button", {y: 50, autoAlpha: 0})

gsap.set(".recent-projects .card-button .superscript-wrapper .text-ss", {x: 0, autoAlpha: 1, overwrite: true})
gsap.set(".recent-projects .card-button .superscript-wrapper .line", {width: 100, autoAlpha: 1, overwrite: true})

gsap.to("#project-01", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to("#project-02", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 0.3,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});


gsap.to("#project-03", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 0.6,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to("#project-04", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 0.9,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to("#project-05", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 1.2,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to("#project-06", {
	scrollTrigger: {
		trigger       : "#about-me",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	delay     : 1.5,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.set(".recent-projects .text-sm", {y: 10, autoAlpha: 0})


gsap.to(".recent-projects .text-sm", {
	scrollTrigger: {
		trigger       : ".recent-projects .grid-wrapper",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});


// Get in Touch
gsap.set(".get-in-touch .superscript-wrapper .text-ss", {x: -10, autoAlpha: 0})
gsap.set(".get-in-touch .superscript-wrapper .line", {width: 0, autoAlpha: 0})

gsap.to(".get-in-touch .superscript-wrapper .text-ss", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".get-in-touch .superscript-wrapper .line", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	width     : 100,
	autoAlpha : 1,
	delay     : 0.3,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.set(".get-in-touch .text-lg", {y: 10, autoAlpha: 0})
gsap.set(".get-in-touch .text-sm", {y: 10, autoAlpha: 0})
gsap.set(".get-in-touch .icon", {x: -10, autoAlpha: 0})
gsap.set(".get-in-touch .arrow-button", {x: -10, autoAlpha: 0})

gsap.to(".get-in-touch .text-lg", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	delay     : 0.6,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".get-in-touch .text-sm", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	y         : 0,
	autoAlpha : 1,
	delay     : 0.9,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".get-in-touch .icon", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	delay     : 1.2,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});

gsap.to(".get-in-touch .arrow-button", {
	scrollTrigger: {
		trigger       : "#recent-projects",
		toggleActions : "play none none none",
		start         : "100% 50%",
		// markers       : true,
	},
	x         : 0,
	autoAlpha : 1,
	delay     : 1.5,
	duration  : 0.5,
	ease      : "power1.out",
	z         : 0.01,
});



/*

	Cursor

*/

const cursor = (function() {
	let $pointer      = $('.cursor-pointer');
	let $outline      = $('.cursor-outline');
	let delay         = 12;
	let _x            = 0;
	let _y            = 0;
	let endX          = window.innerWidth / 2;
	let endY          = window.innerHeight / 2;
	let cursorVisible = true;

	function init() {

		setupEventListeners();
		animateDotOutline();
	}

	function setupEventListeners() {
		document.addEventListener('mousemove', function(e) {
			cursorVisible = true;
			toggleCursorVisibility();

			endX = e.pageX;
			endY = e.pageY;

			gsap.set($pointer, {top: endY, left: endX});
		});

		document.addEventListener('mouseenter', function(e) {
			cursorVisible = true;
			toggleCursorVisibility();
		});

		document.addEventListener('mouseleave', function(e) {
			cursorVisible = true;
			toggleCursorVisibility();

			gsap.set($pointer, {opacity: 0});
			gsap.set($outline, {opacity: 0});

		});
	}

	function animateDotOutline() {
		_x += (endX - _x) / delay;
		_y += (endY - _y) / delay;

		gsap.set($outline, {top: _y, left: _x});

		requestAnimationFrame(animateDotOutline.bind(self));
	}

	function toggleCursorSize(enlarge) {

		if (enlarge) {
			gsap.to($($pointer), { duration: 0.5, width: 90, height: 90, ease: "elastic.out(1.5, 0.5)"});
			gsap.to($($outline), { duration: 0.25, scale: 2, ease: "power2.inOut"});
		} else {

			gsap.to($($pointer), { duration: 0.25, width: 4, height: 4, overwrite: true, ease: "power2.out"});
			gsap.to($($outline), { duration: 0.25,  scale: 1, ease: "power2.inOut"});
		}
	}

	function toggleCursorVisibility() {
		if (cursorVisible) {
			gsap.set($pointer, {opacity: 0.8});
			gsap.set($outline, {opacity: 0.2});
		} else {
			gsap.set($pointer, {opacity: 0});
			gsap.set($outline, {opacity: 0});
		}
	}

	return {
		init             : init,
		toggleCursorSize : toggleCursorSize
	};
})();

cursor.init();