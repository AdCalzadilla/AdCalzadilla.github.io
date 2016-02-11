function displayElemento(e){
  var id = e.srcElement.id;
  if (id == 'btnHome'){
    document.getElementById('home').style.display = 'block';
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('proyecto').style.display = 'none';
  }
  else if (id == 'btnSobreMi') {
    document.getElementById('home').style.display = 'none';
    document.getElementById('sobreMi').style.display = 'block';
    document.getElementById('proyecto').style.display = 'none';
  }
  else if (id == 'btnProyecto') {
    document.getElementById('home').style.display = 'none';
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('proyecto').style.display = 'block';
  }
}
