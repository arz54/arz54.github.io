function popupcourseau(feature, layer) {
    var popupContent = 
    '<table>\
        <tr>\
            <td> <strong>Nom</strong><br />' + (feature.properties['name']) + '</td>\
        </tr>\
        <tr>\
            <td> <strong>Code sandre</strong><br />' + (feature.properties['ref_sandre']) + '</td>\
        </tr>\
    </table>';
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