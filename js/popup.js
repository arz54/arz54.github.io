var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});


function popupcourseau(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>name</strong><br />' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>ref:sandre</strong><br />' + (feature.properties['ref_sandre'] !== null ? autolinker.link(feature.properties['ref_sandre'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';

        layer.bindPopup(popupContent);
    }
