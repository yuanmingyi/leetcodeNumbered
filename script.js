jQuery('#problemset > div').each(function(index) {jQuery(this).children('.question-title').prepend('<span class="ext_no">'+(index+1)+': </span>')});
jQuery('a.sort-link').click(function() {
var prob = jQuery('#problemset > div').find('span.ext_no');
if (prob.length > 0) {
	prob.remove();
	jQuery(this).click();
	jQuery('#problemset > div').each(function(index) {jQuery(this).children('.question-title').prepend('<span class="ext_no">'+(index+1)+': </span>')});
}
});