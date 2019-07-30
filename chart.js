let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       datasets: [{
//         label: 'Equation Plotted',
//         data: [{
//           x: 0,
//           y: 2
//         }, {
//           x: 1,
//           y: 3
//         }, {
//           x: 2,
//           y: 2
//         }, {
//           x: 1.02,
//           y: 0.4
//         }, {
//           x: 0,
//           y: -1
//         }],
//         backgroundColor: [
//           'rgba(123, 83, 252, 0.8)',
//           'rgba(123, 83, 252, 0.8)',
//           'rgba(123, 83, 252, 0.8)',
//           'rgba(123, 83, 252, 0.8)',
//           'rgba(123, 83, 252, 0.8)',
//           'rgba(123, 83, 252, 0.8)'
//         ],
//         borderColor: [
//           'rgba(33, 232, 234, 1)',
//           'rgba(33, 232, 234, 1)',
//           'rgba(33, 232, 234, 1)',
//           'rgba(33, 232, 234, 1)',
//           'rgba(33, 232, 234, 1)',
//           'rgba(33, 232, 234, 1)'
//         ],
//         borderWidth: 1
//       }],
//     },
//     options: {
//       scales: {
//         xAxes: [{
//           type: 'linear',
//           position: 'bottom',
//           ticks: {
//             min: -1,
//             max: 8,
//             stepSize: 1,
//             fixedStepSize: 1,
//           }
//         }],
//         yAxes: [{
//           ticks: {
//             min: -2,
//             max: 4,
//             stepSize: 1,
//             fixedStepSize: 1,
//           }
//         }]
//       }
//     }
//   });