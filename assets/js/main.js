
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
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

  const myChart = new Chart(document.getElementById('myChart'),config);

  const url = 'https://mindicador.cl/api'


    const options = {
      method: 'GET',
      url: 'https://mindicador.cl/api',
      params: {format: 'json'},
      headers: {
        
      }
    };


    async function getData() {
    
      try {
        const response = await axios.request(options).then(function (response) {
          console.log(response.data);
        })
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    getData()
    const showData = (codigo) => {
      codigo.forEach(element =>{
        myChart.data['labels'].push(element.nombre)
        myChart.data['datasets'][0].data.push(element.valor)
      })
    }
    async function getDolar(){
  
    const barChartData = await axios(url, config )
    const valueIndicator = barChartData.dolar.map((x)=> x.valor)
  }
  getDolar()
  console.log(valueIndicator);