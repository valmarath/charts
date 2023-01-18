var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/data/testData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.response);
		//console.log(data)
		date = data.date_population.map(function(elem){
			return elem.date;
		});
		week = data.date_population.map(function(elem){
			return elem.week;
		});
		population = data.date_population.map(function(elem){
			return elem.population;
		});

		const ctx = document.getElementById('canvas').getContext('2d');

		const myChart = new Chart(ctx, {
		  type: 'bar',
		  data: {
			labels: week,
			datasets: [{
			  label: 'Materiais 3DL criados (acumulado)',
			  data: population,
			  borderWidth: 1,
			  backgroundColor: "#005886"
			}]
		  },
		  options: {
			scales: {
			  y: {
				beginAtZero: true
			  }
			}
		  }
		});

	}
}

var xmlhttp2 = new XMLHttpRequest();
var url2 = "http://localhost/data/testDataMensal.json";
xmlhttp2.open("GET", url2, true);
xmlhttp2.send();
xmlhttp2.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.response);
		//console.log(data)
		date = data.date_population.map(function(elem){
			return elem.date;
		});
		week = data.date_population.map(function(elem){
			return elem.week;
		});
		population = data.date_population.map(function(elem){
			return elem.population;
		});

		const ctx = document.getElementById('canvas2').getContext('2d');

		const myChart2 = new Chart(ctx, {
		  type: 'bar',
		  data: {
			labels: week,
			datasets: [{
			  label: 'Materiais 3DL criados (acumulado)',
			  data: population,
			  borderWidth: 1,
			  backgroundColor: "#009EFF"
			}]
		  },
		  options: {
			scales: {
			  y: {
				beginAtZero: true
			  }
			}
		  }
		});

	}
}

var xmlhttp3 = new XMLHttpRequest();
var url3 = "http://localhost/data/testDataMensal.json";
xmlhttp3.open("GET", url3, true);
xmlhttp3.send();
xmlhttp3.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.response);
		//console.log(data)
		date = data.date_population.map(function(elem){
			return elem.date;
		});
		team = data.date_population.map(function(elem){
			return elem.team;
		});
		population = data.date_population.map(function(elem){
			return elem.population;
		});
		let sum = 0;

		for(var i = 0; i < population.length; i++){
			sum += population[i];
		}

		const ctx = document.getElementById('canvas3').getContext('2d');

		const myChart3 = new Chart(ctx, {
		  type: 'pie',
		  data: {
			labels: team,
			datasets: [{
			  label: 'Materiais 3DL criados (acumulado)',
			  data: population,
			  borderWidth: 1,
			  backgroundColor: [
				"#005886",
				"#CF1E5D",
				"#009EFF",
				"#4BC0C0",
				"#F544FC",
				"#FFCD56",
				"#FF9F40",
				"#9966FF",
			  ],
			}]
		  },
		  options: {
			scales: {
			},
			plugins: {
				datalabels: {
					formatter: (value, context) => {
						const percentageValue = ((value / sum) * 100).toFixed(1);
						return `${percentageValue}%`;
					},
				},
				legend: {
					labels: {
						render: 'label',
						font: {
							size: 15,
						},
						fontWeight: 'bold',
					},
				}
			},
		  },
		  plugins: [ChartDataLabels]
		});

	}
}

var xmlhttp4 = new XMLHttpRequest();
var url4 = "http://localhost/data/testDataMensal.json";
xmlhttp4.open("GET", url4, true);
xmlhttp4.send();
xmlhttp4.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.response);
		//console.log(data)
		date = data.date_population.map(function(elem){
			return elem.date;
		});
		week = data.date_population.map(function(elem){
			return elem.week;
		});
		population = data.date_population.map(function(elem){
			return elem.population;
		});
		team = data.date_population.map(function(elem){
			return elem.team;
		});

		const ctx = document.getElementById('canvas4').getContext('2d');

		const myChart2 = new Chart(ctx, {
		  type: 'bar',
		  data: {
			labels: team,
			datasets: [{
			  label: 'Materiais 3DL criados (acumulado)',
			  data: population,
			  borderWidth: 1,
			  backgroundColor: "#CF1E5D"
			}]
		  },
		  options: {
			indexAxis: 'y',
			scales: {
			  y: {
				beginAtZero: true
			  }
			}
		  }
		});

	}
}