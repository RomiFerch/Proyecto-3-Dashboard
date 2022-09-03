let url='https://api.themoviedb.org/3/movie/popular?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'
let tituloPelicula=[]
let promedioPelicula=[]

async function obtenerDatos(){
    let respuesta= await axios.get(url,JSON);
    let datos= await respuesta.data
    titulo=datos.results.map((pelicula) =>pelicula.title)
    promedio=datos.results.map((pelicula)=>pelicula.vote_average)  
    tituloPelicula=titulo
    promedioPelicula=promedio
}
obtenerDatos()

  let labels = [
    tituloPelicula
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
