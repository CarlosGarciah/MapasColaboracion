var map = L.map('map').setView([37.1880, -3.7180], 14);

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


var baseMaps = {
   "OSM": osmBase,
};

var overlayMaps = {
    "Catastro" : catastroBase
};

L.control.layers(baseMaps, overlayMaps,{
        position: 'topright',
        collapsed: false
}).addTo(map);
