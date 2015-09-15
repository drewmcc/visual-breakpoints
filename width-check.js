// Define yo breakpoints
var breakPoints = [{
  width: 0,
  name: "Mobile",
  hex: '#E6C229'
}, {
  width: 420,
  name: "Phablet",
  hex: '#F17105'
}, {
  width: 768,
  name: "Tablet",
  hex: '#D11149'
}, {
  width: 960,
  name: "Notebook",
  hex: '#6610F2'
}, {
  width: 1100,
  name: "Desktop",
  hex: '#1A8FE3'
}];

// Add our element
document.body.innerHTML += '<div id="screen-width"></div>';

// Add a stylesheet using snippet from http://davidwalsh.name/add-rules-stylesheets
var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");
  // WebKit hack :(
  style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page
  document.head.appendChild(style);
  return style.sheet;
})();

// Style Basics
sheet.insertRule("body{ margin: 0; margin-top: 1.55rem !important;}", 0);
sheet.insertRule("#screen-width { font-family: sans-serif; font-size: 13px; color: white; position: fixed; top: 0; width: 100%; padding: 0.3rem 0.6rem; box-sizing: border-box; }", 1);
sheet.insertRule("#screen-width:after{position: absolute; top: 5px; right: 0.6rem; color: white;}", 2);

// Add breakpoints to style element
var breaks = breakPoints.length;
var i = 0;
while (i < breaks) {
  document.querySelector('style').textContent += "@media screen and (min-width:" + breakPoints[i].width + "px) { #screen-width { background-color:" + breakPoints[i].hex + "; } #screen-width:after { content: \"" + breakPoints[i].name + " " + breakPoints[i].width + "px +\" } }";
  i++;
}

function screenWidthPrint() {
  // Get the window width
  var windowWidth = window.innerWidth;
  // Print the window width
  document.getElementById("screen-width").innerHTML = windowWidth + 'px';
}

screenWidthPrint();

window.addEventListener('resize', function(event) {
  screenWidthPrint();
});
