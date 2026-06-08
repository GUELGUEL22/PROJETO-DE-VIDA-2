const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const datasObjetivos = [
  new Date("2026-12-31T23:59:59"),
  new Date("2026-12-25T23:59:59"),
  new Date("2026-11-01T23:59:59"),
  new Date("2026-12-10T23:59:59")
];

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    botoes.forEach((item) => item.classList.remove("ativo"));
    textos.forEach((item) => item.classList.remove("ativo"));

    botao.classList.add("ativo");
    textos[indice].classList.add("ativo");
  });
});

function calculaTempo(tempoObjetivo) {
  const tempoAtual = new Date();
  const tempoFinal = tempoObjetivo - tempoAtual;

  if (tempoFinal <= 0) {
    return "Objetivo concluído!";
  }

  let segundos = Math.floor(tempoFinal / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  segundos %= 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;

  return `${dias} dias ${horasRestantes} horas ${minutosRestantes} minutos ${segundos} segundos`;
}

function atualizarContadores() {
  contadores.forEach((contador, indice) => {
    const dataObjetivo = datasObjetivos[indice] || datasObjetivos[0];
    contador.textContent = calculaTempo(dataObjetivo);
  });
}

atualizarContadores();
setInterval(atualizarContadores, 1000);