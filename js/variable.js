//categorie piscicole
var categoriepiscicole = L.geoJSON(json_categorie_piscicole, {
    style: function(feature) {
        switch (feature.properties.categorie_piscicole) {
            case '1': return {color: "#2fff00", weight: '2'};
            case '2':   return {color: "#006eff", weight: '2'};
        }
    }
});
//réserve de peche
var reservepeche = L.geoJSON(json_fishing_restriction, {
    style: function(feature) {
        switch (feature.properties.fishing_restriction) {
            case 'temporary_no_fishing': return {color: "#e88c23",weight:'2',pane: 'shadowPane'};
            case 'no_fishing':   return {color: "#e30909",weight:'2',pane: 'shadowPane'};
        }
    }
});

var reserveoverlay = L.layerGroup();
var categoriepiscicoleoverlay = L.layerGroup();

var overlays = {
    'réserve de pêche': reserveoverlay,
    'catégorie piscicole' : categoriepiscicoleoverlay
};