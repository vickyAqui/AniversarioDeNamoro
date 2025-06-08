function verificarCodigo() {
  const codigoCorreto = "09051206";
  const codigoDigitado = document.getElementById("codigoInput").value;

  if (codigoDigitado == codigoCorreto) {
    window.location.href = "surpresa.html";
  }
  else {
    document.getElementById("mensagemErro").innerText = "Hmm... tenta de novo minha florzinha! 💖";
  }
}