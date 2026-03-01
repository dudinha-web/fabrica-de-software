document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     MENU HAMBURGUER
  ===================================== */

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }


  /* =====================================
     BUSCA DE BAIRROS
  ===================================== */

  const input = document.getElementById("bairroInput");
  const lista = document.getElementById("listaBairros");

  if (input && lista) {

    const infoBairro = document.getElementById("infoBairro");
    const infoHorario = document.getElementById("infoHorario");
    const infoEcoponto = document.getElementById("infoEcoponto");

    let dadosBairros = [];

    fetch("bairros.json")
      .then(response => response.json())
      .then(data => {
        dadosBairros = data;
      })
      .catch(error => {
        console.error("Erro ao carregar bairros:", error);
      });

    input.addEventListener("focus", () => {
      mostrarLista(dadosBairros);
    });

    input.addEventListener("input", () => {
      const valor = input.value.toLowerCase();

      const filtrados = dadosBairros.filter(obj =>
        obj.bairro.toLowerCase().includes(valor)
      );

      mostrarLista(filtrados);
    });

    function mostrarLista(listaFiltrada) {
      lista.innerHTML = "";

      if (!listaFiltrada || listaFiltrada.length === 0) {
        lista.style.display = "none";
        return;
      }

      listaFiltrada.forEach(obj => {
        const li = document.createElement("li");
        li.textContent = obj.bairro;

        li.addEventListener("click", () => {
          input.value = obj.bairro;
          lista.style.display = "none";
          preencherInformacoes(obj);
        });

        lista.appendChild(li);
      });

      lista.style.display = "block";
    }

    function preencherInformacoes(bairroSelecionado) {
      if (infoBairro) infoBairro.textContent = bairroSelecionado.bairro;
      if (infoHorario) infoHorario.textContent = bairroSelecionado.horario;
      if (infoEcoponto) infoEcoponto.textContent = bairroSelecionado.ecoponto;
    }

    document.addEventListener("click", (e) => {
      const container = document.querySelector(".inicio-input");
      if (container && !container.contains(e.target)) {
        lista.style.display = "none";
      }
    });

  }


  /* =====================================
     FAQ - ABRIR E FECHAR
  ===================================== */

  const faqBoxes = document.querySelectorAll(".faq-box");

  if (faqBoxes.length > 0) {

    faqBoxes.forEach(box => {

      const pergunta = box.querySelector(".faq-box-duvida");

      pergunta.addEventListener("click", () => {

        // Fecha os outros
        faqBoxes.forEach(item => {
          if (item !== box) {
            item.classList.remove("active");
          }
        });

        // Alterna o atual
        box.classList.toggle("active");
      });

    });

  }


  /* =====================================
     FORMULÁRIO DE DENÚNCIA
  ===================================== */

  const form = document.getElementById("formDenuncia");

  if (form) {

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Obrigado pela denúncia! Vamos analisar sua solicitação.");

      form.reset();
    });

  }

});