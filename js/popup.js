//popup pour la couche cours d'eau affiche nom + code sandre 
var attributs = [
    {label: 'Nom', value: 'name'},
    {label: 'Code sandre', value:'ref_sandre'},
    ]
    
function popupcourseau(feature, layer) {
        var popupContent = '';
        for (var i = 0; i <attributs.length; i++){
           var current_attribut =   (!feature.properties[attributs[i].value]) ?  'Pas de ' + attributs[i].label +'<br>' : attributs[i].label+' : ' + feature.properties[attributs[i].value] +'<br>';
            popupContent = popupContent + current_attribut; // ou popupname += current_attribut (c'est pareil)
        }
    
            layer.bindPopup(popupContent);  
    };

function popupreserve(feature, layer) {
    var popupContentReserve = 
    '<table>\
        <tr>\
            <td> <strong>Nom</strong><br />' + (feature.properties['name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>Code sandre</strong><br />' + (feature.properties['ref_sandre']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong></strong><br />' + (feature.properties['fishing:fr:description']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong></strong><br />' + (feature.properties['fishing:fr:name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>réference</strong><br />' + (feature.properties['fishing:fr:source:pref:arrete']) + '</td>\
        </tr>\
    </table>';
        layer.bindPopup(popupContentReserve);
        };


function popupcategoriepiscicole(feature, layer) {
    var popupContentcategoriepiscicole = 
    '<table>\
        <tr>\
            <td> <strong>Nom</strong><br />' + (feature.properties['name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>Code sandre</strong><br />' + (feature.properties['ref_sandre']) + '</td>\
        </tr>\
    </table>';
        layer.bindPopup(popupContentcategoriepiscicole);
        };


function popupplan_eau(feature, layer) {
    var popupContentplaneau = 
    '<table>\
        <tr>\
            <td> <strong>Nom</strong><br />' + (feature.properties['name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>catégorie piscicole</strong><br />' + (feature.properties['categorie_piscicole']) + '</td>\
        </tr>\
    </table>';
        layer.bindPopup(popupContentplaneau);
        };

function popupplan_eau_reserve(feature, layer) {
    var popupplaneaureserve = 
    '<table>\
        <tr>\
            <td> <strong>Nom</strong><br />' + (feature.properties['name']) + '</td>\
        </tr>\
        <tr>\
            <td>' + (feature.properties['fishing:fr:name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>reférence</strong><br />' + (feature.properties['fishing:fr:source:pref:arrete']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>description</strong><br />' + (feature.properties['fishing:fr:description']) + '</td>\
        </tr>\
    </table>';
        layer.bindPopup(popupplaneaureserve);
        };
