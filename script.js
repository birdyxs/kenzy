function disableIE() {
   if (document.all) {
       return false;
   }
}
function disableNS(e) {
   if (document.layers || (document.getElementById && !document.all)) {
       if (e.which==2 || e.which==3) {
           return false;
       }
   }
}
if (document.layers) {
   document.captureEvents(Event.MOUSEDOWN);
   document.onmousedown = disableNS;
}
else {
   document.onmouseup = disableNS;
   document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");

////////////// 

(function($){
$(document).ready(function() {
$("a[title]").style_my_tooltips({
tip_follows_cursor:false,
tip_delay_time:90,
tip_fade_speed:600,
attribute:"title"
});
});
})(jQuery);

$(document).ready(function(){
   $('.photo-slideshow').pxuPhotoset({
       lightbox: true,
       rounded: false,
       gutter: '1px',
       borderRadius: '0px',
       photoset: '.photo-slideshow', 
       photoWrap: '.photo-data',
       photo: '.pxu-photo',
   });
});


function openAlytut(evt, alytutName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("alytut");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tabzact", "");
  }
  document.getElementById(alytutName).style.display = "block";
  evt.currentTarget.className += " tabzact";
}

      document.onkeydown = function(){return false};
        document.oncontextmenu = function(){return false}
