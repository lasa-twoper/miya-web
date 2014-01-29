$(function() {
	$(".boxer").boxer({
		formatter: function($target) {
			var targetInfo = "",
				title = $target.attr("title"),
				links = $target.data("link");
			if (title && links) {
				targetInfo = '<a href="' + links + '" target="_blank">' + title + '</a>';
			} else if (title) {
				targetInfo = title;
			}
			return targetInfo;
		}
	});
});