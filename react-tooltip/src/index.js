import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import Tooltip from './components/tooltip'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -79.38,
      lat: 43.65,
      zoom: 12.5
    };
  }

  //const placeholder = document.createElement('div');
  // const marker = ReactDOM.render(
  //   <div className='mapboxgl-marker'>
  //     <marker/>
  //   </div>, placeholder);  
  //const markerRef = new mapboxgl.Marker(marker).setLngLat(position).addTo(map);

  tooltipContainer;
  markerContainer;

  setTooltip(features) {
    if (features === null) {
      this.tooltipContainer.innerHTML = '';
      return;
    }

    if (features.length) {
      ReactDOM.render(
        React.createElement(
          Tooltip, {
            features
          }
        ),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = '';
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div');
    this.markerContainer = document.createElement('div');

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    const marker = ReactDOM.render(
      <div className='mapboxgl-marker'>
        {/* <marker /> */}
        <h1>Hello</h1>
      </div>,  this.markerContainer);

    // const marker =  new mapboxgl.Marker(this.markerContainer,{
    //   color: 'blue',
    //   draggable: true
    // })
    //   .setLngLat([
    //     lng, lat
    //   ])
    //   //.setPopup(popup)
    //   .addTo(map);

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    })
      .setLngLat([0, 0])
      .addTo(map);

    map.on('mousedown', function (e) {
      console.log("mousedown", e);
      //console.log("e.originalEvent.view.which", e.originalEvent);
      console.log("e.originalEvent.which", e.originalEvent.which);
      if (e.originalEvent.which === 3) {

        const coordX = e.lngLat.lng;
        const coordY = e.lngLat.lat;
        console.log("coordY", coordX, coordY);
       const markerRef = new mapboxgl.Marker(marker).setLngLat([coordX, coordY]).addTo(map);

      }
    });

    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      // tooltip.setLngLat(e.lngLat);
      // map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      // this.setTooltip(features);

      const { lng, lat } = e.lngLat;
      //const { zoom } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });

      if (typeof features[0] !== typeof undefined) {
        //let cityName = features[0].properties.name_en;
        let placeType = features[0].properties.type;


        if (placeType === "city" || placeType === "town" || placeType === "village") {
          map.getCanvas().style.cursor = 'crosshair';
          placeType += " ";
          tooltip.setLngLat(e.lngLat);
          this.setTooltip(features);
          console.log("placeType", placeType);
          console.log("cityname", features[0].properties.name_en);
          console.log("e.lngLat", e.lngLat.lng, e.lngLat.lat);
          console.log("e", e);
        }
        else {
          map.getCanvas().style.cursor = 'grab';
          placeType = "";
          this.setTooltip(null);
        }

      }
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
