import React from "react";
import { Link } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";

import { MapContainer, TileLayer } from "react-leaflet";
import CardMarker from "./CardMarker";

import "leaflet/dist/leaflet.css";

const center = [47.2113302, -1.5474466];
function BaseMap({ setCompo, setTri, tri, Allstructure }) {
  console.log(Allstructure);
  return (
    <>
      <div className="content">
        <div className="lieu-date">Ville - date - heure</div>

        <div className="appli-filtres">
          <div className="left-filter">
            <div className="search-filtres">
              <Link to="/appli/search/filtres">
                <span>
                  <BiFilterAlt />
                  Filtres
                </span>
              </Link>
            </div>
          </div>
          <button className="map" type="button" onClick={() => setCompo(0)}>
            <BsCardList />
          </button>
        </div>
      </div>

      <main className="big-map">
        <MapContainer
          center={center}
          zoom={12}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url=" https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=JV4eU3swHqD1YPZtc09q"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {Allstructure.map((each) => (
            <CardMarker data={each} />
          ))}
        </MapContainer>
      </main>
    </>
  );
}

export default BaseMap;
