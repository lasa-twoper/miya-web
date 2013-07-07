$(function() {
	var rss = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://miya-illust.jugem.jp/?mode=rss&num=5";
	$.ajax(rss, {
		async: true,
		dataType: "json"
	}).done(function(data) {
		console.log(data);
	}).fail(function(data) {
		console.log(data);
	}).always(function(data) {
		console.log(data);
	});
});