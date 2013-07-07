function createNode(tagName, options) {
	var node = document.createElement(tagName);
	for(var key in options) {
		if(options.hasOwnProperty(key)) {
			node.setAttribute(key, options[key]);
		}
	}
	return node;
}

$(function() {
	var twitterScript = createNode("script", {
		id: "twitter-wjs",
		src: (/^http:/.test(document.location)?'http':'https') + "://platform.twitter.com/widgets.js",
		defer: true
	});
	document.querySelector("head").appendChild(twitterScript);
});