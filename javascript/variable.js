var reserveoverlay = L.layerGroup();
var categoriepiscicoleoverlay = L.layerGroup();

//categorie piscicole
var categoriepiscicole = L.geoJSON(json_categorie_piscicole, {
    style: style_catpiscicole,
    onEachFeature: popupcategoriepiscicole}
    ).addTo(categoriepiscicoleoverlay);

//plan d'eau reserve
var planeaureserve = json_plandeau.features.filter(x => x.properties.fishing_restriction == "no_fishing");
var mapplaneaureserve = L.geoJSON(planeaureserve, { 
    style: { color: "#e30909",weight:'2'},
    popupplan_eau_reserve }).addTo(reserveoverlay);

var planeaureservetempo = json_plandeau.features.filter(x => x.properties.fishing_restriction == "temporary_no_fishing");
var mapplaneaureservetempo = L.geoJSON(planeaureservetempo, { 
    style: { color: "#e88c23",weight:'2'},
    popupplan_eau_reserve}).addTo(reserveoverlay);

//reserve peche
var reservepeche = L.geoJSON(json_fishing_restriction, {
    style: style_reservepeche,
    onEachFeature :popupreserve}
    ).addTo(reserveoverlay);

