async function consultarMoedas() {
    const numCedulas = document.getElementById("nome").value;
    const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(response);
        const resultadoElement = document.getElementById("h2");

        for (const moeda in data) {
            if (data.hasOwnProperty(moeda)) {
                let valor = Number(data[moeda].bid);
                valor = valor * numCedulas;
                resultadoElement.innerHTML = "";
                resultadoElement.innerHTML += `<p>${moeda}: ${valor.toFixed(2)}</p>`;
           
            }
        }
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

document.getElementById("btn").addEventListener("click", consultarMoedas)