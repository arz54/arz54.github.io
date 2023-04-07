var reserveoverlay = L.layerGroup();
var categoriepiscicoleoverlay = L.layerGroup();

//categorie piscicole
var categoriepiscicole = L.geoJSON(json_categorie_piscicole, {
    style: function(feature) {
        switch (feature.properties.categorie_piscicole) {
            case '1': return {color: "#2fff00", weight: '2'};
            case '2': return {color: "#006eff", weight: '2'};
        }
    },onEachFeature :popupcategoriepiscicole}
    ).addTo(categoriepiscicoleoverlay);
//réserve de peche
var reservepeche = L.geoJSON(json_fishing_restriction, {
    style: function(feature) {
        switch (feature.properties.fishing_restriction) {
            case 'temporary_no_fishing': return {color: "#e88c23",weight:'2',pane: 'shadowPane'};
            case 'no_fishing': return {color: "#e30909",weight:'2',pane: 'shadowPane',};
        }
    },onEachFeature :popupreserve}
    ).addTo(reserveoverlay);

//plan d'eau reserve
var planeaureserve = json_plandeau.features.filter(x => x.properties.fishing_restriction == "no_fishing");
var mapplaneaureserve = L.geoJSON(planeaureserve, { 
    style: { color: "#e30909",weight:'2' },
    popupplan_eau_reserve }).addTo(reserveoverlay);

var planeaureservetempo = json_plandeau.features.filter(x => x.properties.fishing_restriction == "temporary_no_fishing");
var mapplaneaureservetempo = L.geoJSON(planeaureservetempo, { 
    style: { color: "#e88c23",weight:'2'},
    popupplan_eau_reserve}).addTo(reserveoverlay);



