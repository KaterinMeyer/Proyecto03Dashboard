
const getValorHoy = async () => {
const url = new URL (`https://mindicador.cl/api/`);

const fetchResponse = await fetch( url )

const dataUF = await fetchResponse.json()

return dataUF

}

export default getValorHoy;



