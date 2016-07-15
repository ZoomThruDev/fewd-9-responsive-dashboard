
var line_chart_area = document.getElementById("web-traffic-line-chart");
var line_chart = new Chart(line_chart_area, {
    type: 'line',
    data: {
        labels: ["S", "M", "W", "T", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [15, 14, 20, 11, 16, 10, 13],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var bar_chart_area = document.getElementById("daily-traffic-bar-chart");
var bar_chart = new Chart(bar_chart_area, {
    type: 'bar',
    data: {
        labels: ["S", "M", "W", "T", "T", "F", "S"],
        datasets: [{
            label: 'AM',
            data: [15, 14, 20, 11, 16, 10, 13],
            backgroundColor: '#2e6da4'
        },
        {
            label: 'PM',
            data: [11, 15, 22, 30, 12, 8, 22],
            backgroundColor: '#AEEE00'
        }]
    },
    options: {
        stacked: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var donut_chart_area = document.getElementById("source-traffic-donut-chart");
var donut_chart = new Chart(donut_chart_area, {
    type: 'doughnut',
    data: {
        labels: [
            "Desktop",
            "Tablet",
            "Mobile",
            "Others"
            ],
        datasets: [
            {
                data: [300, 50, 100, 20],
                backgroundColor: [
                    "#FF358B",
                    "#01B0F0",
                    "#AEEE00",
                    "#333333"
                ],
                hoverBackgroundColor: [
                    "#FF358B",
                    "#01B0F0",
                    "#AEEE00",
                    "#333333"
                ]
            }]

    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontFamily: 'Roboto, sans-serif',
                boxWidth: 10
            }
        }
    }
});
