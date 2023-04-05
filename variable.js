var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

var baselayers = {
    'OpenStreetMap': OpenStreetMap_France, 
    'OpenStreetMapHot' : OpenStreetMap_HOT, 
    'ESRI Map': Esri_WorldStreetMap, 
    'ESRI Imagery': Esri_WorldImagery, 
    'CartoDB_DarkMatter' : CartoDB_DarkMatter
    };

//catégorie_piscicole=1 et categorie_piscicole=2
var categorie1 = water.features.filter(x => x.properties.categorie_piscicole == "1");
var mapcategorie1 = L.geoJSON(categorie1, { style: { color: "#2fff00" } })
var categorie2 = water.features.filter(x => x.properties.categorie_piscicole == "2");
var mapcategorie2 = L.geoJSON(categorie2, { style: { color: "#006eff" } })
//reserve de pêche
var reserve_peche = water.features.filter(x => x.properties.fishing_restriction == "no_fishing");
var reserve_peche = L.geoJSON(reserve_peche, { style: { color: "#e30909" } })
var reserve_tempo = water.features.filter(x => x.properties.fishing_restriction == "temporary_no_fishing");
var reserve_tempo = L.geoJSON(reserve_tempo, { style: { color: "#e88c23" } })

