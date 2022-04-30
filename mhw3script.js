const map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{cl2lquojr094w3lmazoaggrwz}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoibWljaGVsZW1hbnVzIiwiYSI6ImNsMmxxdW9qcjA5NHczbG1hem9hZ2dyd3oifQ.rBcSyu0ddUF4_SUmEPf4uw}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGVsZW1hbnVzIiwiYSI6ImNsMmxxdW9qcjA5NHczbG1hem9hZ2dyd3oifQ.rBcSyu0ddUF4_SUmEPf4uw'
}).addTo(map);