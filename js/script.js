const addEvents = (function() {
	// let $projectLink = $('.outer');
	// let $emailLink = $('#email-link');

	// let downloadCV = $('#download-cv');

	let arrowButton = $('.arrow-button');

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

		// $(downloadCV).mouseenter(function(e) {
		// 	e.preventDefault();
			
		// 	let arrow = '#' + this.id + ' .arrow';

		// 	gsap.to($(arrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		// });

		// $(downloadCV).mouseleave(function(e) {
        //     e.preventDefault();

		// 	let arrow = '#' + this.id + ' .arrow';

		// 	gsap.to($(arrow), { x: 0, overwrite: true, duration: 0.3 });
		// });

		// $($emailLink).mouseenter(function(e) {
		// 	e.preventDefault();
            
        //     let forwardArrow = '#' + this.id + ' .forwards';
		// 	gsap.to($(forwardArrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		// });

		// $($emailLink).mouseleave(function(e) {
        //     e.preventDefault();

		// 	let forwardArrow = '#' + this.id + ' .forwards';
		// 	gsap.to($(forwardArrow), { x: 0, overwrite: true, duration: 0.3 });
		// });

		// $($projectLink).mouseenter(function(e) {
		// 	e.preventDefault();

        //     let projectId    = '#' + this.id;
        //     gsap.to($(projectId), { y: -10, z:0.01, boxShadow: "0px 10px 20px 0px rgba(255, 255, 255, 0.1)", duration: 0.1 });

        //     let bar = '#' + this.id + ' .border-bottom';
        //     gsap.to($(bar), { width: '100%', duration: 0.3 });
            
        //     let forwardArrow = '#' + this.id + ' .forwards';
		// 	gsap.to($(forwardArrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
		// });

		// $($projectLink).mouseleave(function(e) {
        //     e.preventDefault();
            
        //     let projectId    = '#' + this.id;
        //     gsap.to($(projectId), { y: 0, z:0.01, boxShadow: "0px 0px 0px 0px rgba(33, 33, 33, 0)", duration: 0.1 });

        //     let bar = '#' + this.id + ' .border-bottom';
        //     gsap.to($(bar), { width: 0, duration: 0.3 });

		// 	let forwardArrow = '#' + this.id + ' .forwards';
		// 	gsap.to($(forwardArrow), { x: 0, overwrite: true, duration: 0.3 });
		// });
	}

	return {
		init : init
	};
})();

// const addEvents = (function() {
// 	let $projectLink = $('.outer');
// 	let $emailLink = $('#email-link');

// 	function init() {

// 		$($emailLink).mouseenter(function(e) {
// 			e.preventDefault();
            
//             let forwardArrow = '#' + this.id + ' .forwards';
// 			gsap.to($(forwardArrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
// 		});

// 		$($emailLink).mouseleave(function(e) {
//             e.preventDefault();

// 			let forwardArrow = '#' + this.id + ' .forwards';
// 			gsap.to($(forwardArrow), { x: 0, overwrite: true, duration: 0.3 });
// 		});

// 		$($projectLink).mouseenter(function(e) {
// 			e.preventDefault();

//             let projectId    = '#' + this.id;
//             gsap.to($(projectId), { y: -10, z:0.01, boxShadow: "0px 10px 20px 0px rgba(255, 255, 255, 0.1)", duration: 0.1 });

//             let bar = '#' + this.id + ' .border-bottom';
//             gsap.to($(bar), { width: '100%', duration: 0.3 });
            
//             let forwardArrow = '#' + this.id + ' .forwards';
// 			gsap.to($(forwardArrow), { x: 10, repeat: -1, yoyo: true, duration: 0.3 });
// 		});

// 		$($projectLink).mouseleave(function(e) {
//             e.preventDefault();
            
//             let projectId    = '#' + this.id;
//             gsap.to($(projectId), { y: 0, z:0.01, boxShadow: "0px 0px 0px 0px rgba(33, 33, 33, 0)", duration: 0.1 });

//             let bar = '#' + this.id + ' .border-bottom';
//             gsap.to($(bar), { width: 0, duration: 0.3 });

// 			let forwardArrow = '#' + this.id + ' .forwards';
// 			gsap.to($(forwardArrow), { x: 0, overwrite: true, duration: 0.3 });
// 		});
// 	}

// 	return {
// 		init : init
// 	};
// })();

addEvents.init();