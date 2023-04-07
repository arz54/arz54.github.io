function popupcourseau(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>name</strong><br />' + (feature.properties['name']) + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>ref:sandre</strong><br />' + (feature.properties['ref_sandre']) + '</td>\
                    </tr>\
                </table>';

        layer.bindPopup(popupContent);
    };
