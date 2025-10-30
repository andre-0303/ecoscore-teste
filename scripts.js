const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const peso = document.querySelector("#peso").value;
  const diaAtual = obterDiaSemana();
  const curso = cursosPorDia[diaAtual];

  if (!peso || !curso) return alert("Digite o peso e verifique o dia!");

  await fetch("http://localhost:3000/registros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      peso: Number(peso),
      curso,
      data: new Date().toISOString(),
    }),
  });

  alert(`Registro salvo para ${curso}!`);
  document.querySelector("#peso").value = ""; // limpa input após salvar
});

const cursosPorDia = {
  segunda: "Informática",
  terça: "Administração",
  quarta: "Agropecuária",
  quinta: "Edificações",
};

const diaSpan = document.querySelector("h3 .info");
const cursoSpan = document.querySelector("h4 .info");

function obterDiaSemana() {
  const dias = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];

  const hoje = new Date();
  return dias[hoje.getDay()];
}

function atualizarDiaECurso() {
  const diaAtual = obterDiaSemana();

  diaSpan.textContent = diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1);

  if (diaAtual === "sexta") {
    cursoSpan.textContent = "Calculando campeão...";
    buscarCampeaoSemana();
  } else {
    cursoSpan.textContent = cursosPorDia[diaAtual] || "Sem curso";
  }
}

atualizarDiaECurso();

async function buscarCampeaoSemana() {
  try {
    const res = await fetch("http://localhost:3000/registros");
    const registros = await res.json();

    if (registros.length === 0) {
      cursoSpan.textContent = "Sem registros ainda 😕";
      return;
    }

    const totais = {};
    for (const r of registros) {
      totais[r.curso] = (totais[r.curso] || 0) + r.peso;
    }

    const campeao = Object.entries(totais).sort((a, b) => b[1] - a[1])[0][0];
    cursoSpan.textContent = `🏆 Campeão: ${campeao}`;
  } catch (err) {
    console.error(err);
    cursoSpan.textContent = "Erro ao calcular campeão";
  }
}

//json-server --watch db.json --port 3000
