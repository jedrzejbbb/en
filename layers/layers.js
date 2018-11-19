var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'GoogleSatellite_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_pipes_2 = new ol.format.GeoJSON();
var features_pipes_2 = format_pipes_2.readFeatures(json_pipes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pipes_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pipes_2.addFeatures(features_pipes_2);var lyr_pipes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pipes_2, 
                style: style_pipes_2,
    title: 'pipes<br />\
    <img src="styles/legend/pipes_2_0.png" />  0.0000 - 0.0000 <br />\
    <img src="styles/legend/pipes_2_1.png" />  0.0000 - 0.0055 <br />\
    <img src="styles/legend/pipes_2_2.png" />  0.0055 - 0.0375 <br />\
    <img src="styles/legend/pipes_2_3.png" />  0.0375 - 0.1190 <br />\
    <img src="styles/legend/pipes_2_4.png" />  0.1190 - 0.4812 <br />\
    <img src="styles/legend/pipes_2_5.png" />  0.4812 - 1.7830 <br />\
    <img src="styles/legend/pipes_2_6.png" />  1.7830 - 7.1140 <br />\
    <img src="styles/legend/pipes_2_7.png" />  7.1140 - 239.2810 <br />'
        });var format_reservoir_3 = new ol.format.GeoJSON();
var features_reservoir_3 = format_reservoir_3.readFeatures(json_reservoir_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reservoir_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_reservoir_3.addFeatures(features_reservoir_3);var lyr_reservoir_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reservoir_3, 
                style: style_reservoir_3,
                title: '<img src="styles/legend/reservoir_3.png" /> reservoir'
            });var format_junction_4 = new ol.format.GeoJSON();
var features_junction_4 = format_junction_4.readFeatures(json_junction_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junction_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_junction_4.addFeatures(features_junction_4);var lyr_junction_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_junction_4, 
                style: style_junction_4,
    title: 'junction<br />\
    <img src="styles/legend/junction_4_0.png" />  0 - 0 <br />\
    <img src="styles/legend/junction_4_1.png" />  0 - 42 <br />\
    <img src="styles/legend/junction_4_2.png" />  42 - 64 <br />\
    <img src="styles/legend/junction_4_3.png" />  64 - 94 <br />\
    <img src="styles/legend/junction_4_4.png" />  94 - 146 <br />\
    <img src="styles/legend/junction_4_5.png" />  146 - 195 <br />\
    <img src="styles/legend/junction_4_6.png" />  195 - 290 <br />\
    <img src="styles/legend/junction_4_7.png" />  290 - 404 <br />\
    <img src="styles/legend/junction_4_8.png" />  404 - 2398 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_pipes_2.setVisible(true);lyr_reservoir_3.setVisible(true);lyr_junction_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_pipes_2,lyr_reservoir_3,lyr_junction_4];
lyr_pipes_2.set('fieldAliases', {'dc_id': 'ID', 'node1': 'Wezel poczatkowy', 'node2': 'Wezel koncowy', 'Mode_egzer': 'Przeplyw [m3/h]', 'Mode_egz_1': 'Energia wplywajaca [W]', 'Mode_egz_2': 'Energia wyplywajaca [W]', 'Mode_egz_3': 'Straty energii [W]', 'Mode_egz_4': 'Mode_egz_4', });
lyr_reservoir_3.set('fieldAliases', {'dc_id': 'ID', 'Model_egze': 'Zasilanie z rezerwuara [m3/h]', 'Model_eg_1': 'Energia doprowadzona do systemu [W]', 'Model_eg_2': 'Model_eg_2', });
lyr_junction_4.set('fieldAliases', {'dc_id': 'ID', 'demand': 'Q', 'pattern': 'pattern', '%Loss': '% współczynnik strat [%]', 'P_wym': 'Wymagane ciśnienie [mH2O]', 'Model_egze': 'Pobor w wezle [m3/h]', 'Model_eg_1': 'Energia wplywajaca [W]', 'Model_eg_2': 'Energia dostarczona mieszkancow [W]', 'Model_eg_3': 'Straty energii - nadmiar cisnienia [W]', 'Model_eg_4': 'Straty energii - straty wody [W]', 'Model_eg_5': 'Energia przeplywajaca do nastepnego przewodu [W]', 'Model_eg_6': 'Ener', });
lyr_pipes_2.set('fieldImages', {'dc_id': 'TextEdit', 'node1': 'TextEdit', 'node2': 'TextEdit', 'Mode_egzer': 'TextEdit', 'Mode_egz_1': 'TextEdit', 'Mode_egz_2': 'TextEdit', 'Mode_egz_3': 'TextEdit', 'Mode_egz_4': 'Hidden', });
lyr_reservoir_3.set('fieldImages', {'dc_id': 'TextEdit', 'Model_egze': 'TextEdit', 'Model_eg_1': 'TextEdit', 'Model_eg_2': 'TextEdit', });
lyr_junction_4.set('fieldImages', {'dc_id': 'TextEdit', 'demand': 'TextEdit', 'pattern': 'TextEdit', '%Loss': 'TextEdit', 'P_wym': 'TextEdit', 'Model_egze': 'TextEdit', 'Model_eg_1': 'TextEdit', 'Model_eg_2': 'TextEdit', 'Model_eg_3': 'TextEdit', 'Model_eg_4': 'TextEdit', 'Model_eg_5': 'TextEdit', 'Model_eg_6': 'Hidden', });
lyr_pipes_2.set('fieldLabels', {'dc_id': 'inline label', 'node1': 'inline label', 'node2': 'inline label', 'Mode_egzer': 'inline label', 'Mode_egz_1': 'inline label', 'Mode_egz_2': 'inline label', 'Mode_egz_3': 'inline label', });
lyr_reservoir_3.set('fieldLabels', {'dc_id': 'inline label', 'Model_egze': 'inline label', 'Model_eg_1': 'inline label', 'Model_eg_2': 'inline label', });
lyr_junction_4.set('fieldLabels', {'dc_id': 'inline label', 'demand': 'inline label', 'pattern': 'inline label', '%Loss': 'inline label', 'P_wym': 'inline label', 'Model_egze': 'inline label', 'Model_eg_1': 'inline label', 'Model_eg_2': 'inline label', 'Model_eg_3': 'inline label', 'Model_eg_4': 'inline label', 'Model_eg_5': 'inline label', });
lyr_junction_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});