function jump() {
  document.getElementById('current-projects').scrollIntoView(true);
}

function jumpr() {
  document.getElementById('properties').scrollIntoView(true);
}

$(document).on('click', '#apart', function(e) {
  document.querySelector('#gap').click(); 
});

$(document).on('click', '#house', function(e) {
  document.querySelector('#ghl').click(); 
});

$(document).on('click', '#townh', function(e) {
  document.querySelector('#gth').click(); 
});

$(document).on('click', '#rent', function(e) {
  document.querySelector('#gfr').click(); 
});

$(document).on('click', '#sale', function(e) {
  document.querySelector('#gfs').click(); 
});

$(document).on('click', '#sold', function(e) {
  document.querySelector('#gsd').click(); 
});

window.onload=function(){
  document.getElementById("gall").click();
  document.getElementById("fr").click();
};
