let ejeX = [], ejeY = [], indicator = []

let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'

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
      console.log(response.data);
      
      let nameMovie = response.data.results.map(pelicula => pelicula.title)
      console.log(nameMovie);
      
      let ranking = response.data.results.map(pelicula => pelicula.vote_average)
      console.log(ranking);

      ejeX = nameMovie.slice(0,10)
      ejeY = ranking.slice(0,10)
      
    }catch(error){
      console.log(error);
    }
  }
  
    await getMovie()
    
    const labels = ejeX

    const data = {
      labels: ejeX,
      datasets: [{
        label: 'Top Rated',
        backgroundColor: 'purple',
        borderColor:  'blue',
        data: ejeY,
      }, 
      /*{
        label: 'Mas Valoradas',
        backgroundColor: 'pink',
        borderColor: 'pink',
        data: ejeY,
      } */
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
/* global bootstrap: false 
(() => {
  'use strict'
   const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   tooltipTriggerList.forEach(tooltipTriggerEl => {
     new bootstrap.Tooltip(tooltipTriggerEl)
   })
 })()
*/

//eventListener

let menu = document.getElementById('menu')

menu.addEventListener('click', (e) =>{

  if (e.target && e.target.tagName === ('A')) {
    
    showGraphic()
    
  }
  
})