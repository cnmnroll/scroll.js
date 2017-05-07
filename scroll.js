(function(win, doc) {
	// event fire var pre_direction = 0;
	var timer;
	var pre_direction = 0;
	console.log('init');
	win.addEventListener('scroll', function(){
		console.log('start');
		clearTimeout(timer);
		var post_direction = win.pageYOffset;
		//var _target = event.target || e.srcElement;
		var _target = win;
		console.log("" + pre_direction + "-" + post_direction);
		if (post_direction > pre_direction) {
			_target.dispatchEvent(new Event('scrollDown'));
		} else if (pre_direction > post_direction) {
			_target.dispatchEvent(new Event('scrollUp'));
		}
		timer = setTimeout(function() {
			var stop_event = new Event('scrollStop');
			_target.dispatchEvent(stop_event);
		}, 300);
		pre_direction = post_direction;
	}, false);
})(this, document);
