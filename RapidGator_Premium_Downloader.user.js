// ==UserScript==
// @name        RapidGator Premium Downloader
// @namespace   https://github.com/ohec/RapidGator-Premium-Downloader
// @description Downloads from RapidGator account
// @downloadURL https://github.com/ohec/RapidGator-Premium-Downloader/raw/master/RapidGator_Premium_Downloader.user.js
// @include     http://rapidgator.net/file/*
// @include     http://www.rapidgator.net/file/*
// @include     */fhn.html
// @include     */s.html
// @version     0.2
// ==/UserScript==

var $;

// Add jQuery
(function(){
	if (typeof unsafeWindow.jQuery == 'undefined') {
		console.log('Load jQuery');
		var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
			GM_JQ = document.createElement('script');

		GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js';
		GM_JQ.type = 'text/javascript';
		GM_JQ.async = true;

		GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
	}
	GM_wait();
})();

/**
 * Check if jQuery's loaded
 * @constructor
 */
function GM_wait() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		console.log('undefined');
		unsafeWindow.setTimeout(GM_wait, 100);
	} else {
		console.log('defined');
		$ = unsafeWindow.jQuery.noConflict(true);
		letsJQuery();
	}
}

/**
 *
 */
function letsJQuery() {
	/*var i, x;
	for (i = 0; x = document.styleSheets[i]; ++i) {
		x.disabled = true;
	}*/

	if(document.title == "File not found") {
		console.log('File not found - Closing');
		unsafeWindow.close();
	} else {
		var link = $('.btm > p > a');
		var url = $.trim(link.attr('href'));

		//$('body').html('<pre style="margin-left:30px;margin-top:20px;">Downloading ' + $.trim(link.html()) + '...</pre>');
		unsafeWindow.location.href = url;

		// Window location seems better.
		// link.click();
	}

	//setTimeout(function() { window.close(); }, 10000);
}
