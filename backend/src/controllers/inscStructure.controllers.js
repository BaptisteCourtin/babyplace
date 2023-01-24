const inscStructureModels = require("../models/inscStructure.models.js");

const getIsCreche = (req, res) => {
  const email = req.query.email;
  inscStructureModels
    .getIsCreche(email)
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const getCrecheInfo = (req, res) => {
  const table = "creche";
  const email = req.query.email;
  inscStructureModels
    .getCrecheInfo(table, email)
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const getAssmatInfo = (req, res) => {
  const table = "assMat";
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

const assmatExist = (req, res) => {
  const table = "assMat";
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

const inscriptionAssmat1 = (req, res) => {
  const {
    isCreche,
    nomNaissance,
    nomUsage,
    prenom,
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
            .createAssmat(nomNaissance, nomUsage, prenom, structureId)
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

const updateAssmat1 = (req, res) => {
  const {
    isCreche,
    nomNaissance,
    nomUsage,
    prenom,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  inscStructureModels
    .updateAssmat1(
      isCreche,
      adresseStructure,
      telephone,
      nomNaissance,
      nomUsage,
      prenom,
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

const updateDescription = (req, res) => {
  const { description, email } = req.body;
  inscStructureModels
    .updateDescription(description, email)
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

const calendrierExist = (req, res) => {
  const id = req.query.id;
  inscStructureModels
    .calendrierExist(id)
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const horairesExist = (req, res) => {
  const id = req.query.id;
  inscStructureModels
    .horairesExist(id)
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
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

const optionsAccueilAssmat = (req, res) => {
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
    enfants,
    experience,
    animaux,
    nonFumeur,
    zeroPollution,
    repas,
    hygiene,
    albumPhoto,
    photoConnecte,
    email,
  } = req.body;
  inscStructureModels
    .optionsAccueilAssmat(
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
      enfants,
      experience,
      animaux,
      nonFumeur,
      zeroPollution,
      repas,
      hygiene,
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

const resaInst = (req, res) => {
  const { resaInst, email } = req.body;
  inscStructureModels
    .resaInst(resaInst, email)
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
  getIsCreche,
  getCrecheInfo,
  getAssmatInfo,
  crecheExist,
  assmatExist,
  inscriptionCreche1,
  updateCreche1,
  inscriptionAssmat1,
  updateAssmat1,
  updateDescription,
  calendrierExist,
  horairesExist,
  optionsAccueilCreche,
  optionsAccueilAssmat,
  resaInst,
};
