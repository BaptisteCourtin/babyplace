const inscStructureModels = require("../models/inscStructure.models.js");

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
    isCreche,
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  inscStructureModels
    .inscriptionStructure1(isCreche, adresseStructure, telephone, email)
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        inscStructureModels.getStructureId(email).then(([[id]]) => {
          const structureId = id.structureId;
          inscStructureModels
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
    isCreche,
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  inscStructureModels
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
  inscStructureModels
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
  inscStructureModels
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
  inscStructureModels
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
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET numAgrement= ?, dateAgrement= ?, siret= ?  WHERE email= ?",
      [numAgrement, dateAgrement, siret, email]
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
