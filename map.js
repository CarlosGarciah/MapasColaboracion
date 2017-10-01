var map = L.map('map').setView([37.1880, -3.7180], 15);

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


var catastroBase = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Dirección General de Catastro</a>',
    maxZoom: 20
});


var punto = L.marker([37.18974, -3.71918]).bindPopup('Soy un puntazo');

var punto2 = L.marker([37.18661, -3.72427]).bindPopup('Soy un puntazo2');


punto.addTo(map);

var baseMaps = {
    "OSM": osmBase,
    "Catastro": catastroBase
};

var overlayMaps = {
    "Parada 1": punto,
    "Parada 2" :punto2

};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright',
	collapsed: false
}).addTo(map);
