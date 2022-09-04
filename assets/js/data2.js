let ejeX = [], ejeY = [], ejeY2 = []

//'https://api.themoviedb.org/3/trending/all/day?api_key=
// api_key = 617fd88a44663150d05a15b5b030d50e 
// language = &language=es-LA



console.log('hola');

export async function showGraphic() {
  let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'

  let config1 = {
    header :{
        'Content-Type' : 'application/json'
    }
}
  const getMovie = async () => {
      try{
        const response = await axios.get(url, config1)
        let nameMovie = response.data.results.map(x => x.title)
        let votacion = response.data.results.map(x => x.vote_average)
        let popularity = response.data.results.map(x => x.popularity)
      //  let poster=response.data.results.map(x => x.poster_path)
        ejeX = nameMovie
        ejeY = popularity
        ejeY2 = votacion
       
        let peliculas = '';
			  response.data.results.forEach(pelicula => {
          console.log(pelicula.poster_path)
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

       
      } catch(error){
        console.log(error);
      }
}
  await getMovie()
    
    const labels = ejeX

    const data = {
      labels: ejeX,
      datasets: [{
        label: 'Más Vistas',
        backgroundColor: 'rgb(144,206,161)',
        borderColor:  'rgb(30,213,169)',
        data: ejeY,
      }, 
      {
        label: 'Nota promedio',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        data: ejeY2,
      } 
    ]
    }
      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              grace: '5%'
            }
          }
        }
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
}
//showGraphic()
 

//eventListener


/*const getMovie2 = async () => {
  try{
    const response = await axios.get(url1, config1)
    console.log(response.data);
  } catch(error){
    console.log(error);
  }}
getMovie2()*/
 