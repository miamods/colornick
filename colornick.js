/*
 * Colornick by user
 * Copyright (c) 2021 José Antonio Riaza Valverde
 * Released under the BSD 3-Clause License
 * https://github.com/miamods/colornick
 * 
 * Usage:
 * 
 * Download this script, upload it to the web space of your board, and insert
 * the following code in the html footer (control panel > appearance > HTML): 
 * 
 * <script type="text/javascript" src="/path/to/colornick.js"></script>
 * <script type="text/javascript">
 * colornick([
 * {name: "Group 1", color: "#FF0000", bold: true, italic: false, users: ["Usernick1", "Usernick2", ...more users]},
 * {name: "Group 2", color: "#00FF00", bold: true, italic: false, users: ["Usernick3", "Usernick4", ...more users]},
 * ...more groups
 * ]);
 * </script>
 * 
 */
function colornick(groups) {
	// make styles and legend
	var styles = "";
	var legend = "";
	for(var i = 0; i < groups.length; i++) {
		var group = groups[i];
		var group_styles =
			"color:" + group.color + "!important;" +
			"border-color:" + group.color + "!important;" +
			"font-weight:" + (group.bold ? "bold" : "normal") + "!important;" +
			"font-style:" + (group.italic ? "italic" : "normal") + "!important";
		legend += " <span style=\"" + group_styles + "\">[" + group.name + "]</span>";
		for(var j = 0; j < group.users.length; j++) {
			var nick = groups[i].users[j].toLowerCase();
			styles +=
				// miarroba toolbar nicklink
				"#ma_toolbar a[href='/users/" + nick + "/']," +
				// board nicklinks
				"a[itemprop='author'][href='/users/" + nick + "/']," +
				// board nicknames
				"a[itemprop='author'][href='/users/" + nick + "/'] span[itemprop='name']," +
				// mention nicklinks
				".mia_nicklink[href='https://miarroba.com/" + nick + "']" +
				// group styles
				"{" + group_styles + "}";
		}
	}
	// append styles
	var style = document.createElement("style");
	style.setAttribute("type", "text/css");
	style.innerHTML = styles;
	document.body.parentNode.insertBefore(style, document.body);
	// append legend
	var online = document.getElementById("ForoCajaOnline");
	if(online)
		online.getElementsByClassName("texto_mini")[0].innerHTML = legend;
}