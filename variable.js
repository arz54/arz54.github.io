
//catégorie_piscicole=1 et categorie_piscicole=2
var categorie1 = water.features.filter(x => x.properties.categorie_piscicole == "1");
var mapcategorie1 = L.geoJSON(categorie1, { style: { color: "#2fff00",weight:'2' } })
var categorie2 = water.features.filter(x => x.properties.categorie_piscicole == "2");
var mapcategorie2 = L.geoJSON(categorie2, { style: { color: "#006eff",weight:'2'} })
//reserve de pêche
var reserve_peche = water.features.filter(x => x.properties.fishing_restriction == "no_fishing");
var reserve_peche = L.geoJSON(reserve_peche, { style: { color: "#e30909",weight:'2',pane: 'shadowPane'} })
var reserve_tempo = water.features.filter(x => x.properties.fishing_restriction == "temporary_no_fishing");
var reserve_tempo = L.geoJSON(reserve_tempo, { style: { color: "#e88c23",weight:'2',pane: 'shadowPane'} })

