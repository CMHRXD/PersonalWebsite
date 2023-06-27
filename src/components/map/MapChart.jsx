import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="./features.json"
        fill="#FFFF"
        stroke="#6366f1 "
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-3.9900, 40.000]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#6366f1",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Madrid"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
