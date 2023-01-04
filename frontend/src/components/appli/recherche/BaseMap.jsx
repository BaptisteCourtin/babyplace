import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import { BsCardList } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import redPointer from "@assets/app parents/redPointer.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Carousel } from "react-responsive-carousel";
import CardMarker from "./CardMarker";
import CardCrecheMap from "./CardCrecheMap";

import "leaflet/dist/leaflet.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function BaseMap({ setCompo, Allstructure }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // --- position user ---
  const [ville, setVille] = useState(); // donné par utilisateur
  const [center, setCenter] = useState([47.21725, -1.55336]); // donné par api suivant ville ou position de base

  const getVraiPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter([position.coords.latitude, position.coords.longitude]);
    });
  };
  useEffect(() => {
    getVraiPosition();
  }, []);

  const handleVille = (e) => {
    e.preventDefault();
    // api convertir adresse en position gps
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${ville}`)
      .then((res) => {
        setCenter(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // --- icon perso pour vous etes ici ---

  const LeafIcon = L.Icon.extend({
    options: {
      iconSize: [25, 45],
      iconAnchor: [12, 45],
      popupAnchor: [0, -40],
    },
  });
  const pointer = new LeafIcon({
    iconUrl: redPointer,
  });

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

            <div className="vrai-localisation">
              <button
                onClick={() => {
                  getVraiPosition();
                }}
              >
                Votre position
              </button>
            </div>

            <form className="localisation">
              <label htmlFor="ville">
                <input
                  required
                  type="text"
                  name="ville"
                  id="ville"
                  placeholder="une position"
                  onChange={(event) => {
                    setVille(event.target.value);
                  }}
                />
              </label>
              <button
                className="butt-localisation"
                type="submit"
                onClick={(e) => {
                  handleVille(e);
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
          <button
            className="map-butt"
            type="button"
            onClick={() => setCompo(0)}
          >
            <BsCardList />
          </button>
        </div>
      </div>

      <main className="container-map">
        <div className="map">
          <MapContainer
            center={center}
            zoom={12}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=JV4eU3swHqD1YPZtc09q"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {Allstructure.map((each, index) => (
              <CardMarker data={each} key={index} />
            ))}
            <Marker position={center} icon={pointer}>
              <Popup>Vous êtes par ici</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="caroussel">
          <Carousel
            showArrows={false}
            infiniteLoop={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch
            centerMode
            centerSlidePercentage={70}
            axis={screenWidth >= 650 ? "vertical" : "horizontal"}
          >
            {Allstructure.map((each, index) => (
              <CardCrecheMap data={each} key={index} />
            ))}
          </Carousel>
        </div>
      </main>
    </>
  );
}

BaseMap.propTypes = {
  setCompo: PropTypes.func.isRequired,
  Allstructure: PropTypes.array.isRequired,
};

export default BaseMap;
