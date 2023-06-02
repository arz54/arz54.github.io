//popup pour la couche cours d'eau affiche nom + code sandre 
var attributs = [
    {label: 'Nom', value: 'name'},
    {label: 'Code sandre', value:'ref:sandre'},
    ]
    
function popupcourseau(feature, layer) {
        var popupContent = "<a class='btn btn-link btn-sm' href='http.//example.com'>plus d'information</a></br>";
        for (var i = 0; i <attributs.length; i++){
           var current_attribut =   (!feature.properties[attributs[i].value]) ?  'Pas de ' + attributs[i].label +'<br>' : attributs[i].label+' : ' + feature.properties[attributs[i].value]+'<br>';
            popupContent = popupContent + current_attribut;
        }
    
            layer.bindPopup(popupContent);  
    };
 	

 
    