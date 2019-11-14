let { mainTraffic, hourlyButton, buttonArray, dailyButton, weeklyButton, monthlyButton } = letCombine();
let hourlyTrafficData = {
    type: 'line',
    _data: {
        labels: ['10am', '11am', '12pm', '1pm',
                 '2pm', '3pm', '4pm', '5pm'],
        datasets: [{
            data: [112, 276, 412, 320, 100, 96, 112, 453],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
        }]
    },
    get data() {
        return this._data;
    },
    set data(value) {
        this._data = value;
    },
    options: {
        legend: {display: false},
        scales: {yAxes: [{ticks: {min: 0,max: 500,stepSize: 50,padding: 20,},
                 gridLines: {drawTicks: false}}],
        }
    }
};

let dailyTrafficData = {
    type: 'line',
    _data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            data: [75, 115, 175, 125, 225, 215, 115],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
        }]
    },
    get data() {
        return this._data;
    },
    set data(value) {
        this._data = value;
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 250,
                    stepSize: 50,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

let weeklyTrafficData = {
    type: 'scatter',
    data: {
        datasets: [{
            data: [{x: 0,y: 0},{x: 7,y: 500},{x: 14,y: 1000},{x: 17,y: 750},{x: 24,y: 1250},
                   {x: 31,y: 1750},{x: 38,y: 1250},{x: 42,y: 1500},{x: 49,y: 1000},
                   {x: 56,y: 1500},{x: 63,y: 2000},{x: 70,y: 1500},{x: 77,y: 2000}],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    padding: 20,
                    min: 0,
                    stepSize: 7,
                    gridLines: {
                        drawTicks: false,
                    }
                }
                    }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 2500,
                    stepSize: 500,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

let monthlyTrafficData = {
    type: 'line',
    data: {
        labels: ['January','February','March','April','May','June',
                 'July','August','September','October','November','December'],
        datasets: [{
            data: [12943,11311,8356,7284,6700,18982,21300,17224,9010,7550,14428,22675],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
            }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 25000,
                    stepSize: 3125,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

$(document).ready(function () {
    let mainTrafficChart = new Chart(mainTraffic, weeklyTrafficData);
});

hourlyButton.click(function () {
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    {
        hourlyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, hourlyTrafficData);
});

dailyButton.click(function () {
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    {
        dailyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, dailyTrafficData);
});

weeklyButton.click(function () {
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    {
        weeklyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, weeklyTrafficData);
});

monthlyButton.click(function () {
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    {
        monthlyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, monthlyTrafficData);
});

let dailyTraffic = document.querySelector('#daily-traffic-chart');

let dailyTrafficChartData = {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
        datasets: [{
            data: [75, 115, 175, 125, 225, 215, 115],
            backgroundColor: 'rgba(115, 120, 186, 1)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 250,
                    stepSize: 50,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

let dailyTrafficChart = new Chart(dailyTraffic, dailyTrafficChartData);

let mobileUsers = document.querySelector('#mobile-users-chart');

let mobileUsersChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: [
            'Phones',
            'Tablets',
            'Desktop'
        ],
        datasets: [{
            data: [96, 152, 409],
            backgroundColor: ['#80b0bd',
                              '#90c694',
                              '#7378ba']
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {boxWidth: 26,fontSize: 24,}
        }
    },
});

function letCombine() {
    let mainTraffic = document.querySelector('#traffic-chart').getContext('2d');
    let hourlyButton = $('#hourly-traffic-button');
    let dailyButton = $('#daily-traffic-button');
    let weeklyButton = $('#weekly-traffic-button');
    let monthlyButton = $('#monthly-traffic-button');
    let buttonArray = [hourlyButton, dailyButton, weeklyButton, monthlyButton];
    return { mainTraffic, hourlyButton, buttonArray, dailyButton, weeklyButton, monthlyButton };
}
