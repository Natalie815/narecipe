function toggleMenu() {
  var menu = document.getElementById("menu");
  var icon = document.getElementsByClassName("menu-icon")[0];
  if (menu.style.display === "none") {
    menu.style.display = "block";
    icon.style.color = "#fff";
    icon.style.background = "#333";
  } else {
    menu.style.display = "none";
    icon.style.color = "#333";
    icon.style.background = "none";
  }
}

function toggleSearch() {
  var searchForm = document.querySelector('.search-form');
  searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
}

function searchFunction() {
  var input = document.querySelector('.search-form input');
  alert('You searched for: ' + input.value);
  input.value = '';
  return false;
}
