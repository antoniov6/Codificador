function codificar() {
  const fraseNormal = document.getElementById("fraseNormal").value;
  let resultado = "";

  for (let i = 0; i < fraseNormal.length; i++) {
    let char = fraseNormal[i];
    let charCode = fraseNormal.charCodeAt(i);

    let novoCharCode = charCode + 1; // Mapeamento simples, avançando 1 posição
    resultado += String.fromCharCode(novoCharCode);
  }

  document.getElementById("fraseCodificada").value = resultado;
}

function decodificar() {
  const fraseCodificada = document.getElementById("fraseCodificada").value;
  let resultado = "";

  for (let i = 0; i < fraseCodificada.length; i++) {
    let char = fraseCodificada[i];
    let charCode = fraseCodificada.charCodeAt(i);

    let novoCharCode = charCode - 1; // Mapeamento simples, recuando 1 posição
    resultado += String.fromCharCode(novoCharCode);
  }

  document.getElementById("fraseNormal").value = resultado;
}

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "minhasenha") {
    document.getElementById("conteudo").style.display = "block";
  } else {
    alert("Senha incorreta,Tente novamente");
  }
}
