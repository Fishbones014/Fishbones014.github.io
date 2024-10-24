
function modoEscuro() {
    var element = document.body;
    element.classList.toggle("escuro");
 
    var x = document.getElementById("botao");
  if (x.innerText === "modo escuro") {
    x.innerText = "modo claro";
  } else {
    x.innerText = "modo escuro";
  }
}