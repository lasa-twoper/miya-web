function createArticlePost(data) {
	var imgpath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==";
	if(data.content && data.content.indexOf("img src=") !== -1) {
		imgpath = $(data.content).find("img").attr("src");
	}
	var html = '';
	html += '<section class="archive-post">';
	html += 	'<i class="thumbnail archive-thumbnail" style="background-image: url(' + imgpath + ');">';
	html += 		'<img src="images/pix.png" width="276" height="116" alt="">';
	html += 	'</i>';
	html += 	'<header>';
	html += 		'<h2 class="archive-headline">' + data.title + '</h2>';
	html += 		'<time class="archive-postdate" datetime="' + data.publishedDate + '">' + data.publishedDate + '</time>';
	html += 	'</header>';
	html += 	'<p>' + data.contentSnippet + '</p>';
	html += '</section>';
	return html;
}

$(function() {
	var container = $("#js-archive-container");
	var rss = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://miya-illust.jugem.jp/?mode=rss&num=5";
	$.ajax(rss, {
		async: true,
		dataType: "jsonp"
	}).done(function(data) {
		if(data.responseStatus === 200) {
			var html = "";
			var imgpath = "";
			var content = "";
			var entries = data.responseData.feed.entries;
			for(var i = 0, len = entries.length;i < len;i++) {
				html += createArticlePost(entries[i]);
			}
			container.html(html);
		}
	}).fail(function(data) {
		console.log(data);
	}).always(function(data) {
		console.log(data);
	});
});