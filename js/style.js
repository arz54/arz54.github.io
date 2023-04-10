//style cours d'eau intermittent
function style_intermittent (feature) {
    if (feature.properties.intermittent != 'yes'){
        return {weight: '2'};
    } else {
        return {weight: '2',dashArray: '7'}
}};

//style catégorie piscicole
function style_catpiscicole (feature) {
    switch (feature.properties.categorie_piscicole) {
        case '1': return {color: "#2fff00", weight: '2'};
        case '2': return {color: "#006eff", weight: '2'};
    }};

//style reserve de peche
function style_reservepeche (feature) {
    switch (feature.properties.fishing_restriction) {
        case 'temporary_no_fishing': return {color: "#e88c23",weight:'2',pane: 'shadowPane'};
        case 'no_fishing': return {color: "#e30909",weight:'2',pane: 'shadowPane',};
    }};