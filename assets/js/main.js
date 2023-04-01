//-----UF
//Importar valores UF
import getValorUF from "./APIUF.js";
const UFdata = (await getValorUF()).serie


//-----DOLAR
//Importar valores Dolar
import getValorDolar from "./APIDolar.js";
const DolarData = (await getValorDolar()).serie

//-----EURO
//Importar valores Euro
import getValorEuro from "./APIEuro.js";
const EuroData = (await getValorEuro()).serie

//Moneda Hoy
import getValorHoy from "./APIHoy.js";
const HoyData = await getValorHoy()
const IndicadoresHoy = ["uf", "dolar", "euro"]

const ValoresHoy = document.getElementById('monedahoy')

IndicadoresHoy.forEach(indicador => {
    const valor = HoyData[indicador].valor

    let CLP = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 2,
    })

    const valoreshoy = `${indicador}: ${CLP.format(valor)}`
    const p = document.createElement('p')
   
    p.textContent = valoreshoy
    ValoresHoy.appendChild(p)

})



//Declaración de Botones
var botonUF = document.getElementById("botonUF")
var botonDolar = document.getElementById("botonDolar")
var botonEuro = document.getElementById("botonEuro")

//GRÁFICO UF
botonUF.addEventListener("click", function (event) {

    let chartStatus = Chart.getChart("indicators");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const indicatorsCanvasNode = document.getElementById('indicators')
    const labels = UFdata.map(uf => new Date(uf.fecha).toLocaleDateString()).reverse()
    const data = {
        labels: labels,
        datasets: [{
            label: 'Valor UF',
            data: UFdata.map(uf => uf.valor).reverse(),
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    }

    const graph = new Chart(indicatorsCanvasNode, config)

});


//GRÁFICO DOLAR
botonDolar.addEventListener("click", function (event) {

    let chartStatus = Chart.getChart("indicators");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const indicatorsCanvasNode = document.getElementById('indicators')
    const labels = DolarData.map(dolar => new Date(dolar.fecha).toLocaleDateString()).reverse()
    const data = {
        labels: labels,
        datasets: [{
            label: 'Valor Dolar',
            data: DolarData.map(dolar => dolar.valor).reverse(),
            fill: false,
            borderColor: 'rgb(0, 102, 0)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    }

    const graph = new Chart(indicatorsCanvasNode, config)
});

//GRÁFICO EURO
botonEuro.addEventListener("click", function (event) {

    let chartStatus = Chart.getChart("indicators");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const indicatorsCanvasNode = document.getElementById('indicators')
    const labels = EuroData.map(euro => new Date(euro.fecha).toLocaleDateString()).reverse()
    const data = {
        labels: labels,
        datasets: [{
            label: 'Valor Euro',
            data: EuroData.map(euro => euro.valor).reverse(),
            fill: false,
            borderColor: 'rgb(0, 128, 255)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    }

    const graph = new Chart(indicatorsCanvasNode, config)
});