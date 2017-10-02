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


var bar1 = L.marker([37.1916462, -3.711131]).bindPopup('Bar d`tapas'),
    bar2 = L.marker([37.1915012, -3.7118028]).bindPopup('Bar santi'),
    bar3 = L.marker([37.1899571, -3.7166183]).bindPopup('Taberna el arco');
//    bar4 = L.marker([37., -3.]).bindPopup('');
//    bar5 = L.marker([37., -3.]).bindPopup('');

var bus1 = L.marker([37., -3.]).bindPopup(''),
var bus2 = L.marker([37., -3.]).bindPopup(''),
var bus3 = L.marker([37., -3.]).bindPopup(''),
var bus4 = L.marker([37., -3.]).bindPopup(''),
var bus5 = L.marker([37., -3.]).bindPopup(''),
var bus6 = L.marker([37., -3.]).bindPopup(''),
var bus7 = L.marker([37., -3.]).bindPopup(''),

var bares = L.layerGroup([bar1, bar2, bar3]);



var baseMaps = {
    "Santa Fe": osmBase,
    "Catastro": catastroBase
};

var overlayMaps = {
    "Bares": bares,

};
var overlayMaps = {
    "Transporte": transporte,
};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright',
	collapsed: false
}).addTo(map);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();
document.getElementById('map').style.cursor='default';
