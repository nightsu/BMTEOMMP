import React, { Component } from 'react';
import {message} from 'antd';
import { Scene as ESRIScene } from '@esri/react-arcgis';

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  handleMapLoad(map, view) {
    // this.props.dispatch({
    //   type: `${namespace}/mapLoad`,
    //   payload: {
    //     view: view,
    //     map: map,
    //   }
    // });
    view.on("click", (event) => {
      // Search for graphics at the clicked location. View events can be used
      // as screen locations as they expose an x,y coordinate that conforms
      // to the ScreenPoint definition.
      view.hitTest(event).then((response) => {
        console.log("hitResponse", response);
        var result = response.results[0];

        if (result) {
          var lon = result.mapPoint.longitude;
          var lat = result.mapPoint.latitude;

          console.log("Hit graphic at (" + lon + ", " + lat + ")", result.graphic);
        } else {
          console.log("Did not hit any graphic");
        }
      });
    });
    console.log("map loaded");
  }

  handleFail(e) {
    message.error(e);
  }

  render() {
    const ESRI_CONFIG_OPTIONS = {
      // url: 'http://localhost/arcgis_js_api/library/4.10/dojo/dojo.js',
      url: 'https://js.arcgis.com/4.11/'
    }

    const mapProperties = {
    }
    const viewProperties = {
      center: [-51.6857432, -3.1029902],
      zoom: 15,
      ui: {
        components: [] // empty the UI, except for attribution
      }
    }
    return (
      <div style={styles.container}>
        <ESRIScene style={styles.scene} onLoad={this.handleMapLoad.bind(this)} onFail={this.handleFail.bind(this)} loaderOptions={ESRI_CONFIG_OPTIONS}
          mapProperties={mapProperties} viewProperties={viewProperties} >
        </ESRIScene>
      </div>
    );
  }
}

export default Scene;

const styles = {
  container:{
    width: "100%",
    height: "100%"
  },
  scene:{
    width: "100%",
    height: "100%"
  }
}