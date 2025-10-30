const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const peso = document.querySelector("#peso").value;
  const diaAtual = obterDiaSemana();
  const curso = cursosPorDia[diaAtual];

  if (!peso || !curso) return alert("Digite o peso e verifique o dia!");
  const existe = registros.find(
    (r) => r.curso === curso && r.data.startsWith(hojeISO)
  );
  if (existe) return alert("Já existe um registro para este dia!");

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
  terca: "Administração",
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

    // Ordena do menor para o maior (menos resíduos é melhor)
    const campeao = Object.entries(totais).sort((a, b) => a[1] - b[1])[0];

    // Mostra o nome e o peso formatado
    cursoSpan.textContent = `🏆 Campeão: ${campeao[0]} (${campeao[1]} kg)`;
  } catch (err) {
    console.error(err);
    cursoSpan.textContent = "Erro ao calcular campeão";
  }
}

//json-server --watch db.json --port 3000
