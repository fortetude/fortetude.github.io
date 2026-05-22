google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// CSV link  

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6VLPv9g60_gTOxEwQLYhG1A8F2RkILs_lqvpn3qk92ELREkQaoN7wBUox2QjZWGOQ38loPqdCWok-/pub?gid=0&single=true&output=csv';

function drawChart() {
    fetch(CSV_URL)
        .then(response => response.text())
        .then(csvText => {
            const dataArray = [['Date', 'Installs']]; // header row
            const maxInstall = Math.max(...dataArray.slice(1).map(row => row[1]));

            const rows = csvText.trim().split('\n').slice(1); // skip CSV header
            rows.forEach(r => {
                const [date, cumulative] = r.split(',');
                // Convert date string to Date object for Google Charts
                const parts = date.split('-'); // YYYY-MM-DD
                const jsDate = new Date(parts[0], parts[1] - 1, parts[2]);
                dataArray.push([jsDate, parseInt(cumulative)]);
            });

            const data = google.visualization.arrayToDataTable(dataArray);

            const options = {
                title: 'Cumulative PWA Installs Over Time',
                legend: { position: 'bottom' },
                hAxis: {
                    title: 'Date',
                    format: 'MMM dd',
                },
                vAxis: {
                    title: 'Installs',
                    format: '0',              // display numbers as integers
                    minValue: 0,              // start y-axis at 0
                    gridlines: { count: -1 },  // let Google Charts choose
                },
                curveType: 'function',
                pointSize: 5
            };

            const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        })
        .catch(err => console.error('Error fetching CSV:', err));
}