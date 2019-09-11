import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import Tooltip from './components/tooltip'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {
  tooltipContainer;

  setTooltip(features) {
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

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div');

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.38, 43.65],
      zoom: 12.5
    });

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    }).setLngLat([0,0]).addTo(map);
    
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      // tooltip.setLngLat(e.lngLat);
      // map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      // this.setTooltip(features);

      if (typeof features[0] !== typeof undefined) {
        //let cityName = features[0].properties.name_en;
        let placeType = features[0].properties.type;
  
  
        if (placeType === "city" || placeType === "town" || placeType === "village") {
          map.getCanvas().style.cursor = 'crosshair';
          placeType += " ";
          tooltip.setLngLat(e.lngLat);          
          this.setTooltip(features);
        }
        else {
          map.getCanvas().style.cursor = 'grab';
          placeType = "";
          this.setTooltip(features);
        }
  console.log("placeType", placeType);
  console.log("cityname", features[0].properties.name_en);
        // $('#weathermap').attr('data-placetype', placeType);
        // $('#weathermap').attr('data-cityname', features[0].properties.name_en);
      }
    });
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
