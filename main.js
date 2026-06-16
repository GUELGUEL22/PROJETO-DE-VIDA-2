const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        botoes.forEach((item, itemIndex) => {
            item.classList.remove("ativo");
            textos[itemIndex].classList.remove("ativo");
        });

        botao.classList.add("ativo");
        textos[index].classList.add("ativo");
    });
});

const tempos = [
    new Date("2027-04-24T00:00:00"),
    new Date("2026-11-01T00:00:00"),
    new Date("2026-11-15T00:00:00"),
    new Date("2027-01-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const tempoFinal = tempoObjetivo - agora;

    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }

    const totalSegundos = Math.floor(tempoFinal / 1000);
    const segundos = totalSegundos % 60;
    const totalMinutos = Math.floor(totalSegundos / 60);
    const minutos = totalMinutos % 60;
    const totalHoras = Math.floor(totalMinutos / 60);
    const horas = totalHoras % 24;
    const dias = Math.floor(totalHoras / 24);

    return [dias, horas, minutos, segundos];
}

function formatarValor(valor) {
    return String(valor).padStart(2, "0");
}

function atualizaCronometro() {
    tempos.forEach((tempoObjetivo, index) => {
        const [dias, horas, minutos, segundos] = calculaTempo(tempoObjetivo);

        document.getElementById(`dias${index}`).textContent = formatarValor(dias);
        document.getElementById(`horas${index}`).textContent = formatarValor(horas);
        document.getElementById(`min${index}`).textContent = formatarValor(minutos);
        document.getElementById(`seg${index}`).textContent = formatarValor(segundos);
    });
}

atualizaCronometro();
setInterval(atualizaCronometro, 1000);