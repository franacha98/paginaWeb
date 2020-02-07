alert("Bienvenidos");
function plegar(){
  document.getElementById('vertical-menu').hidden=true;
}

function desplegar(){
  document.getElementById('vertical-menu').hidden=false;
}

function mostrarMenu(){
  if(document.getElementById('vertical-menu').hidden==true){
    desplegar();
  }else{
    plegar();
  }
}
