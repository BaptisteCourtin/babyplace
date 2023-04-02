import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import PropTypes from "prop-types";

import { BsCardList } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import redPointer from "@assets/app parents/redPointer.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Carousel } from "react-responsive-carousel";
import CardMarker from "./CardMarker";
import CardCrecheMap from "./CardCrecheMap";

import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BaseMap({
  setCompo,
  Allstructure,
  dataBasique,
  dataServices,
  dataAggrements,
  familleId,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // --- likes des familles ---
  const [familleLiked, setFamilleLiked] = useState();

  const getFamilleLiked = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/likes/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setFamilleLiked(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getFamilleLiked(source);
  }, [familleId]);

  // --- position user ---
  const [center, setCenter] = useState([47.2135655, -1.5496263]);

  const getVraiPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter([position.coords.latitude, position.coords.longitude]);
    });
  };

  useEffect(() => {
    getVraiPosition();
  }, []);

  // --- get position suivant demande ---
  const [ville, setVille] = useState(); // donné par utilisateur

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

  useEffect(() => {
    getVraiPosition();
  }, []);

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
    familleLiked !== undefined && (
      <>
        <div className="content">
          <div className="appli-filtres">
            <div className="left-filter">
              <button
                className="search-filtres"
                type="button"
                onClick={() => setCompo(3)}
              >
                <span>{BiFilterAlt()}Filtres</span>
              </button>

              <div className="vrai-localisation">
                <button
                  type="button"
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
                attribution='<a ="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />
              {Allstructure
                // creche, assmat ou les 2
                .filter(
                  (each) =>
                    dataBasique.isCreche === each.isCreche ||
                    dataBasique.isCreche === 2
                )
                // false = tout le monde = pas de filtre
                // true = filtrer pour avoir seulement ceux qui l'ont
                .filter(
                  (each) =>
                    (dataServices.pcsc1 === false ||
                      dataServices.pcsc1 == each.pcsc1) &&
                    (dataServices.handi === false ||
                      dataServices.handi == each.handi) &&
                    (dataServices.bilingue === false ||
                      dataServices.bilingue == each.bilingue) &&
                    (dataServices.jardin === false ||
                      dataServices.jardin == each.jardin) &&
                    // si ass mat
                    (each.isCreche === 0
                      ? (dataServices.animaux === false ||
                          dataServices.animaux == each.animaux) &&
                        (dataServices.nonFumeur === false ||
                          dataServices.nonFumeur == each.nonFumeur) &&
                        (dataServices.zeroPollution === false ||
                          dataServices.zeroPollution == each.zeroPollution) &&
                        (dataServices.hygiene === false ||
                          dataServices.hygiene == each.hygiene) &&
                        (dataServices.repas === false ||
                          dataServices.repas == each.repas)
                      : true)
                )
                // aggrements
                .filter(
                  (each) =>
                    (dataAggrements.handi === false || each.maxHandi > 0) &&
                    (dataAggrements.mois === false || each.max18Mois > 0) &&
                    (dataAggrements.nuit === false || each.maxNuit > 0)
                )
                .map((each, index) => (
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
              {Allstructure
                // creche, assmat ou les 2
                .filter(
                  (each) =>
                    dataBasique.isCreche === each.isCreche ||
                    dataBasique.isCreche === 2
                )
                // false = tout le monde = pas de filtre
                // true = filtrer pour avoir seulement ceux qui l'ont
                .filter(
                  (each) =>
                    (dataServices.pcsc1 === false ||
                      dataServices.pcsc1 == each.pcsc1) &&
                    (dataServices.handi === false ||
                      dataServices.handi == each.handi) &&
                    (dataServices.bilingue === false ||
                      dataServices.bilingue == each.bilingue) &&
                    (dataServices.jardin === false ||
                      dataServices.jardin == each.jardin) &&
                    // si ass mat
                    (each.isCreche === 0
                      ? (dataServices.animaux === false ||
                          dataServices.animaux == each.animaux) &&
                        (dataServices.nonFumeur === false ||
                          dataServices.nonFumeur == each.nonFumeur) &&
                        (dataServices.zeroPollution === false ||
                          dataServices.zeroPollution == each.zeroPollution) &&
                        (dataServices.hygiene === false ||
                          dataServices.hygiene == each.hygiene) &&
                        (dataServices.repas === false ||
                          dataServices.repas == each.repas)
                      : true)
                )
                // aggrements
                .filter(
                  (each) =>
                    (dataAggrements.handi === false || each.maxHandi > 0) &&
                    (dataAggrements.mois === false || each.max18Mois > 0) &&
                    (dataAggrements.nuit === false || each.maxNuit > 0)
                )
                .map((each, index) => (
                  <CardCrecheMap
                    key={index}
                    data={each}
                    familleLiked={familleLiked}
                    familleId={familleId}
                  />
                ))}
            </Carousel>
          </div>
        </main>
        <NavbarApp />
      </>
    )
  );
}

BaseMap.propTypes = {
  setCompo: PropTypes.func.isRequired,
  Allstructure: PropTypes.array.isRequired,
  dataBasique: PropTypes.object.isRequired,
  dataServices: PropTypes.object.isRequired,
  dataAggrements: PropTypes.object.isRequired,

  familleId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BaseMap;
