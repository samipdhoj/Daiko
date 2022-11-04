        
        var map = L.map('map').setView([27.895272229457277, 86.81966012071672],11);
        L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=o2VLYCHRTvTzJxnvngdA', {attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);
        // '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);
        
var map_hotel_icon = L.icon({
                iconUrl: 'Icon_hotel.svg',
                iconSize: [20,20],
                iconAnchor: [4,62],
                popupAnchor: [-3,-76]
        });

       
        var locations= [
                ["Lukla hotel",27.688923732715143, 86.7303262289564,"hotel_lukla_A1.jpg"],
                ["Monjo hotel",27.744938111499323, 86.71209191552522,"hotel_monjo_A1.jpg"],
                ["Namchee hotel",27.80409985110442, 86.71214994089198,"hotel_namchee_A1.jpg"],
                ["Hotel Yak",27.813076101761848, 86.71819023955796,"hotel_yak_A1.jpg"],
                ["Tengboche hotel",27.835627413242154, 86.76464969994562,"hotel_tengboche_A1.jpg"],
                ["Pheriche hotel",27.894186051530873, 86.82066976318394,"hotel_pheriche_A1.jpg"]
        ];
        
        for (var i=0; i<locations.length;i++)
                {
                        marker=new L.marker([locations[i][1],locations[i][2]],{icon: map_hotel_icon}
                                ).addTo(map);
                        
                        
                        var hotel = '<h1>'+locations[i][0]+'</h1><div style="text-align:center"> <img width="150" height="150" src="'+locations[i][3]+'"/></div>'
                        marker.bindPopup(hotel);
                        
                        //var hotel = '<h1>Pheriche hotel</h1> <div style="text-align:center"> <img width="150" height="150" src="hotel_pheriche_A1.jpg"/></div>'
                
                }

var map_rs_icon = L.icon({
                iconUrl: 'Icon_recommended_site.png',
                iconSize: [20,20],
                iconAnchor: [4,62],
                popupAnchor: [-3,-76]
                });

        var r_sites= [
                ["view around Lukla",27.688098497805246, 86.73211289309947,"rs_lukla.jpg"],
                ["view around Namchee",27.80891716078922, 86.72111626965246,"rs_namchee.jpg"],
                ["view around Tengboche",27.83610182477686, 86.76394161320162,"rs_tengboche.jpg"],
                ["view around Pheriche",27.895077432068526, 86.81971487292175,"rs_pheriche.jpg"]
        ];
 
        for (var j=0; j<r_sites.length;j++)
                {
                        marker=new L.marker([r_sites[j][1],r_sites[j][2]],{icon: map_rs_icon}
                                ).addTo(map); 
                        
                        var sites = '<h1>'+r_sites[j][0]+'</h1><div style="text-align:center"> <img width="150" height="150" src="'+r_sites[j][3]+'"/></div>'
                                marker.bindPopup(sites);
                                                
                        }