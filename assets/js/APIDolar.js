
const getValorDolar = async () => {
const url = new URL (`https://mindicador.cl/api/dolar/2023`);

const fetchResponse = await fetch( url )

const dataDolar = await fetchResponse.json()

return dataDolar

}

export default getValorDolar;



