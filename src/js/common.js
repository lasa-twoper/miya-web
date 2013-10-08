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
  //ga
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42301947-1', 'suppa.jp');
  ga('send', 'pageview');

  //add tweet
  var twitterScript = createNode("script", {
    id: "twitter-wjs",
    src: (/^http:/.test(document.location)?'http':'https') + "://platform.twitter.com/widgets.js",
    defer: true
  });

  var facebookScript = createNode("script", {
    id: "facebook-jssdk",
    src: (/^http:/.test(document.location)?'http':'https') + "://connect.facebook.net/ja_JP/all.js#xfbml=1",
    defer: true
  });

  var head = document.querySelector("head");

  head.appendChild(twitterScript);
  head.appendChild(facebookScript);
});