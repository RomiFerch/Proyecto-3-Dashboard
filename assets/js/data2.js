let ejeX = [], ejeY = [], ejeY2 = []

//'https://api.themoviedb.org/3/trending/all/day?api_key=
// api_key = 617fd88a44663150d05a15b5b030d50e 
// language = &language=es-LA


let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'
let config1 = {
    header :{
        'Content-Type' : 'application/json'
    }
}
console.log('hola');

async function showGraphic() {
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

let menu = document.getElementById('menu')

menu.addEventListener('click', (e) =>{

    console.log(e.target);
  if (e.target && e.target.id === ('top')) {
    
    showGraphic()
    
  }
  else if (e.target && e.target.id === ('cine')) {
    console.log('cine');
  
}
})
