const inscStructureModels = require("../models/inscStructure.models.js");
const inscCrecheModels = require("../models/inscCreche.models.js");

const getCrecheInfo = (req, res) => {
  const table = "creche";
  const email = req.query.email;
  inscStructureModels
    .getStructureInfo(table, email)
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const crecheExist = (req, res) => {
  const table = "creche";
  const email = req.query.email;
  inscStructureModels
    .structureExist(table, email)
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const inscriptionCreche1 = (req, res) => {
  const {
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  const isCreche = 1 ;
  inscStructureModels
    .inscriptionStructure1(isCreche, adresseStructure, telephone, email)
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        inscStructureModels.getStructureId(email).then(([[id]]) => {
          const structureId = id.structureId;
          inscCrecheModels
            .createCreche(typeCreche, nomStructure, structureId)
            .then(() => {
              res.sendStatus(204);
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("Modification impossible");
            });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const updateCreche1 = (req, res) => {
  const {
    // isCreche,
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  const isCreche = 1;
  inscCrecheModels
    .updateCreche1(
      isCreche,
      adresseStructure,
      telephone,
      typeCreche,
      nomStructure,
      email
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const optionsAccueilCreche = (req, res) => {
  const {
    PCSC1,
    nesting,
    montessori,
    handi,
    jardin,
    sorties,
    promenades,
    eveil,
    musique,
    art,
    bilingue,
    bibli,
    transport,
    albumPhoto,
    photoConnecte,
    email,
  } = req.body;
  inscCrecheModels
    .optionsAccueilCreche(
      PCSC1,
      nesting,
      montessori,
      handi,
      jardin,
      sorties,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      albumPhoto,
      photoConnecte,
      email
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const agrementsCreche = (req, res) => {
  const { nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, email } =
    req.body;
  inscCrecheModels
    .agrementsCreche(nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, email)
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const tarifsCreche = (req, res) => {
  const {
    financementPaje,
    tarifHeure,
    tarifHoraireSpec,
    indemnRepas,
    tarifAtelier,
    email,
  } = req.body;
  inscCrecheModels
    .tarifsCreche(
      financementPaje,
      tarifHeure,
      tarifHoraireSpec,
      indemnRepas,
      tarifAtelier,
      email
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const verifsCreche = (req, res) => {
  const { numAgrement, dateAgrement, siret, email } = req.body;
  inscCrecheModels
    .verifsCreche(numAgrement, dateAgrement, siret, email)
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

module.exports = {
  getCrecheInfo,
  crecheExist,
  inscriptionCreche1,
  updateCreche1,
  optionsAccueilCreche,
  agrementsCreche,
  tarifsCreche,
  verifsCreche,
};
