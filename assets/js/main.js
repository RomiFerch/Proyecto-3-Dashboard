let url='https://api.themoviedb.org/3/movie/popular?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'
async function obtenerDatos(){
    let respuesta= await axios.get(url)
    console.log(respuesta.data)
}
obtenerDatos()