function myFunction() {
  var input, filter, article, container, y, h, i, j, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  article = document.getElementById('big');
  //container = document.getElementsByClassName('container'); //
  y = article.getElementsByClassName('card');
  h = article.getElementsByTagName('h3');

  for (i = 0; i < h.length; i++) {
    j = y[i].getElementsByTagName("h3")[0];
    txtValue = j.textcard || j.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      y[i].style.display = "";
      //container.style.display = "block"; //.container
    } else {
      y[i].style.display = "none";
    }
  }
}
