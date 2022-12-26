import "./App.css";
import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geography,
  Geographies,
  Annotation,
  Sphere,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear, ScaleLinear } from "d3-scale";

import jsonData from "./assets/json/db.json";

const geoUrl =
  "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const colorScale = scaleLinear().domain(0, 6300000).range("#a72bb5", "#0376db");

function App() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  // const getData = () => {
  //   fetch("http://localhost:3001/countries", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountries(data);
  //     });
  // };

  // const getContData = () => {
  //   fetch("http://localhost:3001/continent", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setContinents(data);
  //     });
  // };

  useEffect(() => {
    // getData();
    // getContData();
    setCountries(jsonData.countries);
    setContinents(jsonData.continent);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ComposableMap
        width={900}
        height={400}
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        {countries.length > 0 ? (
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
            <Sphere stroke="#000" strokeWidth={0.3} />
            <Graticule stroke="#000" strokeWidth={0.3} />
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  const isos = countries.find(
                    (s) => s.ISO3 === geo.properties.ISO_A3
                  );
                  return (
                    <>
                      <Geography
                        key={index}
                        geography={geo}
                        fill={
                          isos ? colorScale(isos["population_density"]) : "#333"
                        }
                      />
                      <Annotation
                        subject={[-100.4173, 38.9071]}
                        dx={70}
                        dy={-40}
                        connectorProps={{
                          stroke: "#999",
                          strokeWidth: 1,
                        }}
                      >
                        <rect
                          width="66"
                          height="30"
                          style={{
                            x: 2,
                            y: -17,
                            fill: "rgb(0,0,0)",
                            fillOpacity: 0.01,
                            stroke: "rgb(0,0,0)",
                            strokeWidth: 1,
                            strokeOpacity: 0.03,
                          }}
                        />
                        <text
                          x="8"
                          textAnchor="start"
                          alignmentBaseline="middle"
                          style={{
                            fontSize: 8,
                            fill: "#C1C0CB",
                            fontFamily: "barflow",
                            fontWeight: 100,
                            backgroundColor: "#000",
                            width: 200,
                            height: 40,
                          }}
                        >
                          {continents[0].name}, {`${continents[0].data}`}
                        </text>
                      </Annotation>
                      <Annotation
                        subject={[10.4173, 44.9071]}
                        dx={70}
                        dy={-40}
                        connectorProps={{
                          stroke: "#999",
                          strokeWidth: 1,
                        }}
                      >
                        <rect
                          width="66"
                          height="30"
                          style={{
                            x: 2,
                            y: -17,
                            fill: "rgb(0,0,0)",
                            fillOpacity: 0.01,
                            stroke: "rgb(0,0,0)",
                            strokeWidth: 1,
                            strokeOpacity: 0.03,
                          }}
                        />
                        <text
                          x="8"
                          textAnchor="start"
                          alignmentBaseline="middle"
                          style={{
                            fontSize: 8,
                            fill: "#C1C0CB",
                            fontFamily: "barflow",
                            fontWeight: 100,
                            backgroundColor: "#000",
                            width: 200,
                            height: 40,
                          }}
                        >
                          {continents[1].name}, {`${continents[1].data}`}
                        </text>
                      </Annotation>
                      <Annotation
                        subject={[-60.4173, -18.9071]}
                        dx={70}
                        dy={-40}
                        connectorProps={{
                          stroke: "#999",
                          strokeWidth: 1,
                        }}
                      >
                        <rect
                          width="66"
                          height="30"
                          style={{
                            x: 2,
                            y: -17,
                            fill: "rgb(0,0,0)",
                            fillOpacity: 0.01,
                            stroke: "rgb(0,0,0)",
                            strokeWidth: 1,
                            strokeOpacity: 0.03,
                          }}
                        />
                        <text
                          x="8"
                          textAnchor="start"
                          alignmentBaseline="middle"
                          style={{
                            fontSize: 8,
                            fill: "#C1C0CB",
                            fontFamily: "barflow",
                            fontWeight: 100,
                            backgroundColor: "#000",
                            width: 200,
                            height: 40,
                          }}
                        >
                          {continents[2].name}, {`${continents[2].data}`}
                        </text>
                      </Annotation>
                      <Annotation
                        subject={[78.4173, 18.9071]}
                        dx={70}
                        dy={-40}
                        connectorProps={{
                          stroke: "#999",
                          strokeWidth: 1,
                        }}
                      >
                        <rect
                          width="66"
                          height="30"
                          style={{
                            x: 2,
                            y: -17,
                            fill: "rgb(0,0,0)",
                            fillOpacity: 0.01,
                            stroke: "rgb(0,0,0)",
                            strokeWidth: 1,
                            strokeOpacity: 0.03,
                          }}
                        />
                        <text
                          x="8"
                          textAnchor="start"
                          alignmentBaseline="middle"
                          style={{
                            fontSize: 8,
                            fill: "#C1C0CB",
                            fontFamily: "barflow",
                            fontWeight: 100,
                            backgroundColor: "#000",
                            width: 200,
                            height: 40,
                          }}
                        >
                          {continents[3].name}, {`${continents[3].data}`}
                        </text>
                      </Annotation>
                    </>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        ) : (
          <p>Loading...</p>
        )}
      </ComposableMap>
    </div>
  );
}

export default App;
