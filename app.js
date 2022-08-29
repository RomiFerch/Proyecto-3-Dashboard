/*let employeeLabel = [], employeeSalaryData = [], employeeAgeData = [], employeeChildsData = []

async function dummyChart() {
  await getDummyData() // llamamos al fetch al comienzo para que se llenen los array vacios de la variable

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    // tipo de grafico que deseamos crear
    type: 'bar',

    // data de nuestro datasets
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData // ojo tomamos la data de los array vacios ya que se llenan gracias al fecth y el map que hacemos
        },
        {
          label: 'Employee Age',
          backgroundColor: 'pink',
          borderColor: 'rgb(255, 99, 132)',
          data: employeeAgeData // ojo tomamos la data de los array vacios ya que se llenan gracias al fecth y el map que hacemos
      },
       label: '....',
       backgroundColor: '#000',
       data: employeeChildsData,
      ]
    },

    // Configuracion de opciones
    options: {
      tooltips: {
        mode: 'index'
        text: 
      }
    }
})}

dummyChart() // se llama a la funcion


//Fetch ddesde la api

async function getDummyData() {
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees" // tomamos la url de la api

  const response = await fetch(apiUrl) // fecth
  const barChatData = await response.json() // Tomamos toda data para el grafico
  
  const salary = barChatData.data.map((x) => x.employee_salary) //map a cada dato que qusieramos obtener de la api
  
  const age = barChatData.data.map((x) => x.employee_age)
  const name = barChatData.data.map((x) => x.employee_name)

 employeeSalaryData = salary // igualamos los arrays vacios con los maps
 employeeAgeData = age
 employeeLabel = name
}
*/