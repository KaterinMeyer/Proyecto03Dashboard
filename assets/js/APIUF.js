
const getValorUF = async () => {
const url = new URL (`https://mindicador.cl/api/uf/2023`);

const fetchResponse = await fetch( url )

const dataUF = await fetchResponse.json()

return dataUF

}

export default getValorUF;



