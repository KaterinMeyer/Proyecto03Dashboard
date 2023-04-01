
const getValorEuro = async () => {
const url = new URL (`https://mindicador.cl/api/euro/2023`);

const fetchResponse = await fetch( url )

const dataEuro = await fetchResponse.json()

return dataEuro

}

export default getValorEuro;



