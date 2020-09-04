let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const addButtonEvents = (function() {

	let navButton  	 = $('.nav-button');

	let arrowButton      = $('.arrow-button');
	let projectButton    = $('.card-button');

	function init() {

		// Navigation Button
		$(navButton).click(function(e) {
			e.preventDefault();
			
			var type = this.id.substring(0, 1);

			if(type === "m")
				hambugerMenu.closeBurger();
		});

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

		tl.timeScale(1);

		tl.to($(".hamburger-inner-01"), 0.5, { y: 10, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut})
		.to($(".hamburger-inner-02"), 0.5, { opacity:0, rotation: 0.01, z:0.01, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-03"), 0.5, { y: -8, rotation: 0.01, z:0.01, yoyo: true, ease: Power1.easeInOut}, "sync -=0.5")
		.to($(".hamburger-inner-01"), 0.8, {rotation:585})
		.to($(".hamburger-inner-02"), 0.8, {rotation:585}, "-=0.8")
		.to($(".hamburger-inner-03"), 0.8, {rotation:675}, "-=0.8")
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
		});
	}


	function toggleMenu() {
		if(isOpen == false)
			isOpen = true;

		tl.reversed() ? tl.play() : tl.reverse();	
	}

	function closeBurger() {
		if(isOpen == true){
			isOpen = false;

			tl.reverse();
		}
	}
	
	return {
		init        : init,
		closeBurger : closeBurger
	};
})();

hambugerMenu.init();


$(document).ready(function(){

	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		// Store hash
		var hash = this.hash;
		
		gsap.to($('html, body'), { scrollTop: $(hash).offset().top - 80, duration: 1.0, ease: Power2.easeInOut });

		} // End if
	});
});

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	gsap.to($('header'), { y: -80, duration: 0.1, overwrite: true });

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		gsap.to($('header'), { y: 0, duration: 0.3 });
		// Run the callback

	}, 500);

}, false);




// Defining event listener function
function displayWindowSize(){
	// Get width and height of the window excluding scrollbars
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	
	// Display result inside a div element
	// console.log("Width: " + w + ", " + "Height: " + h);

	if (w > 728) {
		hambugerMenu.closeBurger();
	}
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();