// let url='https://api.themoviedb.org/3/movie/popular?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'
// let tituloPelicula=[]
// let promedioPelicula=[]

// async function obtenerDatos(){
//     let respuesta= await axios.get(url,JSON);
//     let datos= await respuesta.data
//     titulo=datos.results.map((pelicula) =>pelicula.title)
//     promedio=datos.results.map((pelicula)=>pelicula.vote_average)  
//     tituloPelicula=titulo
//     promedioPelicula=promedio
// }
// obtenerDatos()

//   let labels = [
//     tituloPelicula
//   ];
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };
//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
  

// let ejeX = [], ejeY = [], indicator = []

// let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=617fd88a44663150d05a15b5b030d50e&language=es-LA'

// let config1 = {
//     header :{
//         'Content-Type' : 'application/json'
//     }
// }
// console.log('hola');
// async function showGraphic() {
  
//   const getMovie = async () => {
//     try{
//       const response = await axios.get(url, config1)
//       console.log(response.data);
      
//       let nameMovie = response.data.results.map(pelicula => pelicula.title)
//       console.log(nameMovie);
      
//       let ranking = response.data.results.map(pelicula => pelicula.vote_average)
//       console.log(ranking);

//       ejeX = nameMovie
//       ejeY = ranking
      
//     }catch(error){
//       console.log(error);
//     }
//   }
  
//     await getMovie()
    
//     labels = ejeX

//     const data = {
//       labels: ejeX,
//       datasets: [{
//         label: 'Top Rated',
//         backgroundColor: 'tomato',
//         borderColor:  'red',
//         data: ejeY,
//       }, 
//       /*{
//         label: 'Mas Valoradas',
//         backgroundColor: 'pink',
//         borderColor: 'pink',
//         data: ejeY,
//       } */
//     ]
//     }
//       const config = {
//         type: 'line',
//         data: data,
//         options: {
//           scales: {
//             y: {
//               grace: '5%'
//             }
//           }
//         }
//       };

//        myChart = new Chart(
//         document.getElementById('myChart'),
//         config
//       );
// }
// showGraphic()
import {showGraphic} from "./data2.js";
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

$('sidebar ul li').on('click', function(){
  $('.sidebar ul li.active').removeClass('active')
  $(this).addClass('active')
})
