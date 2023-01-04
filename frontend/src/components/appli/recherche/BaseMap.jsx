import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { BsCardList } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";

import { MapContainer, TileLayer } from "react-leaflet";
import CardMarker from "./CardMarker";
import CardCrecheMap from "./CardCrecheMap";

import "leaflet/dist/leaflet.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function BaseMap({ setCompo, Allstructure }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // demander la ville voulu pour changer la position de base de la carte
  // faire un mini form
  const center = [47.2113302, -1.5474466];

  // const [center, setCenter] = useState();
  // // api convertir adresse en position gps
  // const getAdresseCenter = () => {
  //   axios
  //     .get(`https://api-adresse.data.gouv.fr/search/?q=${data.adresse}`)
  //     .then((res) => {
  //       setCenter(res.data.features[0].geometry.coordinates.reverse());
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   getAdresseCenter();
  // }, [ville]);

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
