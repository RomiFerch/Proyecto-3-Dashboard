let ejeX = [], ejeY = [], indicator = [], posterimg=[]

let url = 'https://api.themoviedb.org/3/movie/popular?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'

let config1 = {
    header :{
        'Content-Type' : 'application/json'
    }
}
export async function showGraphic() {
  
  const getMovie = async () => {
    try{
      const response = await axios.get(url, config1)
      console.log(response.data);
      
      let nameMovie = response.data.results.map(pelicula => pelicula.title)
      console.log(nameMovie);
      
      let ranking = response.data.results.map(pelicula => pelicula.popularity)
      console.log(ranking);
       
      let poster = response.data.results.map(pelicula => pelicula.poster_path)
      console.log(poster)
      


      ejeX = nameMovie.slice(0,5)
      ejeY = ranking.slice(0,5)
     
      
      let peliculas = '';
			posterimg.forEach(pelicula => {
        console.log(posterimg)
        pelicula=response.data.poster_path
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
      document.getElementById('container').innerHTML = peliculas
    }catch(error){
      console.log(error);
    }
  }
  
    await getMovie()
    
    labels = ejeX

    const data = {
      labels: ejeX,
      datasets: [{
        label: 'Most Popular',
        backgroundColor: 'tomato',
        borderColor:  'red',
        data: ejeY,
      }, 
      
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

       myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
       }
      //  async function showPoster(){ 
      //   const response = await axios.get(url, config1)
        
        
        
    
      //     }  
  
//showGraphic()

//showPoster()