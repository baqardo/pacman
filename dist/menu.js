let animation_speed = 'medium';

$('.play-button-js').click(function() {
	$('.menu__item').slideUp(animation_speed, function() {
		$('.maps').slideDown(animation_speed, function() {});
	});
});

$('.how-to-item-js').click(function() {
	$('.menu__item').slideUp(animation_speed, function() {
		$('.how-to-play').slideDown(animation_speed, function() {
			$(this).css({
				display: 'flex'
			});
		});
	});
});

$('.info-js').click(function() {
	$('.menu__item').slideUp(animation_speed, function() {
		$('.info').slideDown(animation_speed, function() {
			$(this).css({
				display: 'flex'
			});
		});
	});
});

$('.return-js').click(function() {
	$('.maps,.how-to-play, .info').slideUp(animation_speed, function() {
		$('.menu__item').slideDown(animation_speed, function() {
			$(this).css({
				display: 'flex'
			});
		});
	});
});
