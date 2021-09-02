var ctx = document.getElementById('myAreaChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true
  }
});

// Repsonsive Javascript for main content(e.g.sidenav and desktop content)
function mainContent(x) {
  if (x.matches) {
    document.getElementById('main-container').classList.remove('two')
    document.getElementById('main-container').classList.remove('column')
    document.getElementById('main-container').classList.remove('ui')
    document.getElementById('main-container').classList.remove('grid')
  } else {
    document.getElementById('main-container').classList.add('two')
    document.getElementById('main-container').classList.add('column')
    document.getElementById('main-container').classList.add('ui')
    document.getElementById('main-container').classList.add('grid')
  }
}

var x = window.matchMedia("(max-width: 1050px)")
mainContent(x)
x.addListener(mainContent)