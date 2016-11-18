var ar = $("svg path");

var html = '';
for (var i = 0; i < ar.length; i++) {
	html += "<li>";
	html += "#" + ar[i].id + ",";
	html += "</li>";
}
console.log(html);
// $("#list").html(html);
$('body').append("<ul id='list'">" + html + "</ul>");