let ejeX = [], ejeY = [], ejeY2 = []

//'https://api.themoviedb.org/3/trending/all/day?api_key=
// api_key = 617fd88a44663150d05a15b5b030d50e 
// language = &language=es-LA



console.log('hola');

export async function showGraphic() {
  let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'
let url1 = 'https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=617fd88a44663150d05a15b5b030d50e&page=1'
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
      
        ejeX = nameMovie
        ejeY = popularity
        ejeY2 = votacion

       
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
        backgroundColor: 'purple',
        borderColor:  'purple',
        data: ejeY,
      }, 
      {
        label: 'Nota promedio',
        backgroundColor: 'pink',
        borderColor: 'pink',
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
 