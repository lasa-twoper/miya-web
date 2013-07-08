var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function createArticlePost(data) {
	var imgpath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEUAAADq4tjlUicxAAAAAXRSTlMAQObYZgAAABpJREFUeF4NwQENAAAIArBHMgbBCI67invRAQvcAfkcWtJIAAAAAElFTkSuQmCC";
	if(data.content && data.content.indexOf("img") !== -1) {
		var pathArray = $.parseHTML(data.content).filter(function(dom) {
			return (dom.nodeType === 1);
		}).filter(function(dom) {
			return dom.tagName.toLowerCase() === "img" || $(dom).find("img").length !== 0;
		}).map(function(dom) {
			if(dom.tagName.toLowerCase() === "img") {
				return dom.src;
			} else {
				return $(dom).find("img").attr("src");
			}
		});
		if(pathArray.length !== 0) {
			imgpath = pathArray[0];
		}
	}
	var date = new Date(data.publishedDate);
	var dateString = date.getFullYear() + "." + ('0' + (date.getMonth() + 1)).slice(-2) + "." + ('0' + date.getDate()).slice(-2) + " " + weekArray[date.getDay()];
	var html = '';
	html += '<section class="archive-post">';
	html += 	'<a href="' + data.link + '" target="_blank">';
	html += 		'<i class="thumbnail archive-thumbnail" style="background-image: url(' + imgpath + ');">';
	html += 			'<img src="images/pix.png" width="276" height="96" alt="">';
	html += 		'</i>';
	html += 		'<header>';
	html += 			'<h2 class="archive-headline">' + data.title + '</h2>';
	html += 			'<time class="archive-postdate" datetime="' + date.toString() + '">' + dateString + '</time>';
	html += 		'</header>';
	html += 		'<p>' + data.contentSnippet + '</p>';
	html += 		'<div class="archive-more">続きを読む&nbsp;&raquo;</div>';
	html += 	'</a>';
	html += '</section>';
	return html;
}

$(function() {
	var container = $("#js-archive-container");
	var rss = "http://miya-illust.jugem.jp/?mode=rss";
	var count = 6;
	var url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=" + rss + "&num=" + count;
	$.ajax(url, {
		async: true,
		dataType: "jsonp"
	}).done(function(data) {
		if(data.responseStatus === 200) {
			var html = "";
			var entries = data.responseData.feed.entries;
			for(var i = 0, len = entries.length;i < len;i++) {
				html += createArticlePost(entries[i]);
			}
			container.html(html);
		}
	}).fail(function(data) {
		container.empty();
	});
});