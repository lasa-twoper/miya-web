$(function() {
	// default
	$(".boxer.boxer-default").boxer();
	// fashion
	$(".boxer.boxer-fashion").boxer({
		formatter: function($target) {
			return '<a href="' + $target.data("link") + '" target="_blank">&raquo;&nbsp;more...</a>';
		}
	});
});