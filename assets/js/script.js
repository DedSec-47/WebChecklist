var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('myUL');
  list.addEventListener('change', function(ev) {
    if (ev.target.tagName === 'INPUT' && ev.target.type === 'checkbox') {
      var listItem = ev.target.parentNode; 
      if (ev.target.checked) {
        listItem.classList.add('checked'); 
      } else {
        listItem.classList.remove('checked');
      }
    }
  }, false);
});