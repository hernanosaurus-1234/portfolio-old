const addEvents = (function() {
	// let $projectLink = $('.outer');
	// let $emailLink = $('#email-link');

	// let downloadCV = $('#download-cv');

	let arrowButton   = $('.arrow-button');
	let projectButton = $('.card-button');

	function init() {

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

		$(projectButton).mouseenter(function(e) {
			e.preventDefault();

            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: -10, z:0.01, boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.8)", duration: 0.1 });
            
            let forwardArrow = '#' + this.id + ' .arrow';
			gsap.to($(forwardArrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		});

		$(projectButton).mouseleave(function(e) {
            e.preventDefault();
            
            let projectId    = '#' + this.id;
            gsap.to($(projectId), { y: 0, z:0.01, boxShadow: "0px 0px 0px 0px rgba(33, 33, 33, 0)", duration: 0.1 });

			let forwardArrow = '#' + this.id + ' .arrow';
			gsap.to($(forwardArrow), { x: 0, overwrite: true, duration: 0.3 });
		});
	}

	return {
		init : init
	};
})();

addEvents.init();