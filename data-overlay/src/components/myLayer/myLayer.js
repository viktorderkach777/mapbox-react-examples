import React from 'react';
import mapboxgl from 'mapbox-gl';
//import 'mapbox-gl/dist/mapbox-gl.css';
//import data from './data.json'
import './myLayer.css';
//import mapMarkerIcon from './marker.png';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


// Id=(++hotelId).ToString(),
// Class=4,
// RegionId="1",
// Name="Royal Paradise Resort",
// Description="Отель расположен в районе Хадаба курорта Шарм-Эль-Шейх на берегу Красного моря." +
// " Был открыт в 1996 году. Реновации в отеле не было, только косметический поточный ремонт. " +
// "Состоит из основного 2-этажного здания (без номеров) и комплекса 2-этажных корпусов. Коралловый" +
// " пляж отеля граничит с уникальными коралловыми рифами. Рядом возле отеля находится развлекательный " +
// "центр Alf Leila Wa Leila, а торговые ряды Il Merkato и Old Market порадуют любителей шопинга и местного" +
// " колорита. Отель расположен в 22 км от международного аэропорта Шарм-эль-Шейх в районе Hadaba | Ras Um El" +
// " Sid. Расстояние до Naama Bay: 7 км; Расстояние до Old Market (Старый Город): 4 км; Расстояние до Soho Square: 20 км.",
// RoomsCount=286,
// Rate=5.0,
// Price=550

const stores = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.034084142948,
          38.909671288923
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 234-7336",
        "phone": "2022347336",
        "address": "1471 P St NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 15th St NW",
        "postalCode": "20005",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.049766,
          38.900772
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 507-8357",
        "phone": "2025078357",
        "address": "2221 I St NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 22nd St NW",
        "postalCode": "20037",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043929,
          38.910525
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 387-9338",
        "phone": "2023879338",
        "address": "1512 Connecticut Ave NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at Dupont Circle",
        "postalCode": "20036",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0672,
          38.90516896
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 337-9338",
        "phone": "2023379338",
        "address": "3333 M St NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 34th St NW",
        "postalCode": "20007",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.002583742142,
          38.887041080933
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 547-9338",
        "phone": "2025479338",
        "address": "221 Pennsylvania Ave SE",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "btwn 2nd & 3rd Sts. SE",
        "postalCode": "20003",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.933492720127,
          38.99225245786
        ]
      },
      "properties": {
        "address": "8204 Baltimore Ave",
        "city": "College Park",
        "country": "United States",
        "postalCode": "20740",
        "state": "MD"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.097083330154,
          38.980979
        ]
      },
      "properties": {
        "phoneFormatted": "(301) 654-7336",
        "phone": "3016547336",
        "address": "4831 Bethesda Ave",
        "cc": "US",
        "city": "Bethesda",
        "country": "United States",
        "postalCode": "20814",
        "state": "MD"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.359425054188,
          38.958058116661
        ]
      },
      "properties": {
        "phoneFormatted": "(571) 203-0082",
        "phone": "5712030082",
        "address": "11935 Democracy Dr",
        "city": "Reston",
        "country": "United States",
        "crossStreet": "btw Explorer & Library",
        "postalCode": "20190",
        "state": "VA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10853099823,
          38.880100922392
        ]
      },
      "properties": {
        "phoneFormatted": "(703) 522-2016",
        "phone": "7035222016",
        "address": "4075 Wilson Blvd",
        "city": "Arlington",
        "country": "United States",
        "crossStreet": "at N Randolph St.",
        "postalCode": "22203",
        "state": "VA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.28784,
          40.008008
        ]
      },
      "properties": {
        "phoneFormatted": "(610) 642-9400",
        "phone": "6106429400",
        "address": "68 Coulter Ave",
        "city": "Ardmore",
        "country": "United States",
        "postalCode": "19003",
        "state": "PA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.20121216774,
          39.954030175164
        ]
      },
      "properties": {
        "phoneFormatted": "(215) 386-1365",
        "phone": "2153861365",
        "address": "3925 Walnut St",
        "city": "Philadelphia",
        "country": "United States",
        "postalCode": "19104",
        "state": "PA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 331-3355",
        "phone": "2023313355",
        "address": "1901 L St. NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 19th St",
        "postalCode": "20036",
        "state": "D.C."
      }
    }
  ]
};

class MyLayer extends React.Component {
  map;

  state = {
    active: null,
    popup: null
  };  

  createMarker(index) {
    var el = document.createElement('div');

    // Add a class called 'marker' to each div
    el.className = 'marker';

    el.onclick= () => this.linkOrMarkerClick(stores.features[index], index);
   
    // By default the image for your custom marker will be anchored
    // by its center. Adjust the position accordingly
    // Create the custom markers, set their position, and add to map
    new mapboxgl.Marker(el, { offset: [17, 0] })
      .setLngLat(stores.features[index].geometry.coordinates)
      .addTo(this.map);
  }

  createAllMarkers = () => {
    const res = (stores.features.map((element, index) => {
      this.createMarker(index);
      return res;
    }))
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-77.034084, 38.909671],
      zoom: 14
    });    

    this.map.on('load', () => {
      this.map.addSource('places', {
        type: 'geojson',
        data: stores
      });

      this.createAllMarkers();
    });
  }

  flyToMarker(center, zoom) {
    this.map.flyTo({
      center,
      zoom
    });
  }

   linkOrMarkerClick = (element, index) => {

    // 1. Fly to the point associated with the clicked link
    this.flyToMarker(element.geometry.coordinates, 15);

    // 2. Close all other popups and display popup for clicked store
    // Check if there is already a popup on the map and if so, remove it
    if (this.state.popup) this.state.popup.remove();

    const popup = new mapboxgl.Popup({ closeOnClick: false, offset: [17, 0] })
      .setLngLat(element.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + element.properties.address + '</h4>')
      .addTo(this.map);

    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    this.setState({
      popup,
      active: "listing-" + index
    });
  };

  render() { 

    const arr = stores.features.map((element, index) => {
      let currentFeature = element;
     
      // Shorten data.feature.properties to `prop` so we're not
      // writing this long form over and over again.
      let prop = currentFeature.properties;       

      let det = prop.city;
      if (prop.phone) {
        det += ' · ' + prop.phoneFormatted;
      }

      return (
        <div key={index} className={this.state.active === 'listing-' + index ? 'item active' : 'item'} id={'listing-' + index}>
          <a tabIndex="0" className="title" onClick={() => this.linkOrMarkerClick(element, index)}>{prop.address}</a>
          <div>{det}</div>
        </div>
      )
    })


    return (
      <div id="body">
        <div ref={el => this.mapContainer = el} id='map' className='map pad2' />
        <div className='sidebar'>
          <div className='heading'>
            <h1>Our locations</h1>
          </div>
          <div id='listings' className='listings'>
            {arr}
          </div>
        </div>
      </div>
    );
  }
}

export default MyLayer;
