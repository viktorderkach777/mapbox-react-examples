import React from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
//import data from './data.json'
import './myLayer.css';
import mapMarkerIcon from './marker.png';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

// const options = [{
//   name: 'Population',
//   description: 'Estimated total population',
//   property: 'pop_est',
//   stops: [
//     [0, '#f8d5cc'],
//     [1000000, '#f4bfb6'],
//     [5000000, '#f1a8a5'],
//     [10000000, '#ee8f9a'],
//     [50000000, '#ec739b'],
//     [100000000, '#dd5ca8'],
//     [250000000, '#c44cc0'],
//     [500000000, '#9f43d7'],
//     [1000000000, '#6e40e6']
//   ]
// }, {
//   name: 'GDP',
//   description: 'Estimate total GDP in millions of dollars',
//   property: 'gdp_md_est',
//   stops: [
//     [0, '#f8d5cc'],
//     [1000, '#f4bfb6'],
//     [5000, '#f1a8a5'],
//     [10000, '#ee8f9a'],
//     [50000, '#ec739b'],
//     [100000, '#dd5ca8'],
//     [250000, '#c44cc0'],
//     [5000000, '#9f43d7'],
//     [10000000, '#6e40e6']
//   ]
// }]

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

  //markerContainer;
  //markerRef = null;

  // LinkClick;
  // arr;

  createMarker(lng, lat) {
    let popup = null;

    const coordX = lng;
    const coordY = lat;
    //console.log("coordY", coordX, coordY);

    const markerContainer = document.createElement('div');
    const marker = ReactDOM.render(
      <div className='mapboxgl-marker' onClick={(e) => console.log("marker", e)}>
        {/* <marker /> */}
        {/* <h1>Hello</h1> */}
        <img alt="marker" src={mapMarkerIcon} height="45px" width="25px" />
      </div>, markerContainer);

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMi0QnVvJROe-0oXg0a29J9mJLk2c9JMnuC3F893xeKMa2R_ou";
    const name = 'Hotel Name'

    popup = new mapboxgl.Popup()
      .setLngLat([coordX, coordY])
      .setHTML(
        '<div>' +
        '<h2 style="text-align: center">' + name + '</h2>' +
        '<img alt="marker" + src="' + image + '" height="150px" width="auto" />'
        + '</div>'
      )
      .addTo(this.map);

    new mapboxgl.Marker(marker, {
      draggable: false,
    })
      .setLngLat([coordX, coordY])
      .setPopup(popup)
      .addTo(this.map);

    //markerRef.togglePopup();
    //console.log("markerRef", markerRef);

    //   this.marker = new MapboxGl.Marker({
    //     draggable: this.props.draggable,
    //     element: this.refs.wrapper
    //   })
    //     .setLngLat([this.props.coordinate.lon, this.props.coordinate.lat])
    //     .addTo(map);


  }

  load = () => {
    const res = (stores.features.map((element) => {
      this.createMarker(element.geometry.coordinates[0], element.geometry.coordinates[1]);
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

    // const load = ()=>{
    //   return(stores.features.map((element) => {
    //   this.createMarker(element.geometry.coordinates[0], element.geometry.coordinates[1]);
    // }))}

    this.map.on('load', () => {

      // Add the data to your map as a layer icon-hotel
      // this.map.addLayer({
      //   id: 'locations',
      //   type: 'symbol',
      //   // Add a GeoJSON source containing place coordinates and information.
      //   source: {
      //     type: 'geojson',
      //     data: stores
      //   },
      //   layout: {
      //     'icon-image': 'lodging-15',
      //     'icon-allow-overlap': true,
      //   }
      // });



      this.map.addSource('places', {
        type: 'geojson',
        data: stores
      });

      this.load();
    });





    // Add an event listener for when a user clicks on the map
    this.map.on('mousedown', (e) => {


      // Query all the rendered points in the view
      var features = this.map.queryRenderedFeatures(e.point, { layers: ['locations'] });
      //console.log("e", e);
      const { lng, lat } = e.lngLat;
      //const features = this.map.queryRenderedFeatures(e.point);
      // console.log("features", features);
      if (features.length) {
        var clickedPoint = features[0];

        // 1. Fly to the point
        this.flyToMarker(lng, lat, 15);
        //console.log("clickedListing - index", element);

        // Check if there is already a popup on the map and if so, remove it        
        if (this.state.popup) this.state.popup.remove();

        let popup = new mapboxgl.Popup({ closeOnClick: false, offset: [14, 0] })
          .setLngLat([lng, lat])
          .setHTML('<h3>Sweetgreen</h3>' +
            '<h4>' + clickedPoint.properties.address + '</h4>')
          .addTo(this.map);

        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;
        let selectedFeatureIndex = -1;
        for (var i = 0; i < stores.features.length; i++) {
          if (stores.features[i].properties.address === selectedFeature) {
            selectedFeatureIndex = i;
          }
        }

        //3. Highlight listing in sidebar (and remove highlight for all other listings)
        this.setState({
          popup,
          active: "listing-" + selectedFeatureIndex
        });
      }
    });


    this.map.on('mousemove', (e) => {
      const features = this.map.queryRenderedFeatures(e.point);
      if (features[0] && features[0].layer && features[0].layer.layout
        && features[0].layer.layout.hasOwnProperty('icon-image')) {

        let s = Object.values(features[0].layer.layout);
        console.log("s", s);
        if (s && s.includes('lodging-15')) {
          this.map.getCanvas().style.cursor = 'pointer';
        }
      }
      else {
        this.map.getCanvas().style.cursor = 'grab';
      }
    });







  }

  flyToMarker(lng, lat, zoom) {
    this.map.flyTo({
      center: [lng, lat],
      zoom
    });
  }



  render() {

    // Update the currentFeature to the store associated with the clicked link  
    const LinkClick = (element, index) => {

      // 1. Fly to the point associated with the clicked link
      this.flyToMarker(element.geometry.coordinates[0], element.geometry.coordinates[1], 15);

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


    const arr = stores.features.map((element, index) => {
      let currentFeature = element;
      //console.log("currentFeature", currentFeature);
      // Shorten data.feature.properties to `prop` so we're not
      // writing this long form over and over again.
      let prop = currentFeature.properties;
      // console.log("prop", prop);
      // console.log("index", index);     

      let det = prop.city;
      if (prop.phone) {
        det += ' · ' + prop.phoneFormatted;
      }

      //this.createMarker(element.geometry.coordinates[0], element.geometry.coordinates[1]);

      //let markerContainer = document.createElement('div');
      //     markerContainer.className = 'marker';
      // console.log("element.geometry.coordinates", element.geometry.coordinates);  
      //     let mark =new mapboxgl.Marker(markerContainer, { offset: [0, -23] })
      //     .setLngLat(element.geometry.coordinates)
      //     .addTo(this.map);




      // const marker = ReactDOM.render(
      //   <div className='marker'>
      //     {/* <marker /> */}
      //     <h1>Hello</h1>
      //     {/* <img alt="marker" src={mapMarkerIcon} height="45px" width="25px" /> */}
      //   </div>, markerContainer);

      // new mapboxgl.Marker(marker, {
      //   draggable: false,
      // })
      //   .setLngLat(element.geometry.coordinates)       
      //   .addTo(this.map);

      return (
        <div key={index} className={this.state.active === 'listing-' + index ? 'item active' : 'item'} id={'listing-' + index}>
          <a tabIndex="0" className="title" onClick={() => LinkClick(element, index)}>{prop.address}</a>
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
