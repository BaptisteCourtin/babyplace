const inscStructureModels = require("../models/inscStructure.models.js");
const inscAssmatModels = require("../models/inscAssmat.models.js");

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
          inscAssmatModels
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
  inscAssmatModels
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
  inscAssmatModels
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

const agrementsAssmat = (req, res) => {
  const { maxPlaces, maxHandi, max18Mois, maxNuit, email } = req.body;
  inscAssmatModels
    .agrementsAssmat(maxPlaces, maxHandi, max18Mois, maxNuit, email)
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

const tarifsAssmat = (req, res) => {
  const {
    tarifHeure,
    tarifHoraireSpec,
    indemnRepas,
    indemnKm,
    indemnEntretien,
    tarifHeureSup,
    email,
  } = req.body;
  inscAssmatModels
    .tarifsAssmat(
      tarifHeure,
      tarifHoraireSpec,
      indemnRepas,
      indemnKm,
      indemnEntretien,
      tarifHeureSup,
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

const getJustificatifs = (req, res) => {
  const id = req.query.id;
  inscAssmatModels
    .getJustificatifs(id)
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const justificatifsAssmat = (req, res) => {
  const { column, doc, email } = req.body;
  inscAssmatModels
    .updateJustificatif(column, doc, email)
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

const verifsAssmat = (req, res) => {
  const {
    numSecu,
    numAgrement,
    dateAgrement,
    assHabitNom,
    assHabitNumero,
    assHabitAdresse,
    assAutoNom,
    assAutoNumero,
    assAutoAdresse,
    email,
  } = req.body;
  inscAssmatModels
    .verifsAssmat(
      numSecu,
      numAgrement,
      dateAgrement,
      assHabitNom,
      assHabitNumero,
      assHabitAdresse,
      assAutoNom,
      assAutoNumero,
      assAutoAdresse,
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

module.exports = {
  getAssmatInfo,
  assmatExist,
  inscriptionAssmat1,
  updateAssmat1,
  optionsAccueilAssmat,
  agrementsAssmat,
  tarifsAssmat,
  getJustificatifs,
  justificatifsAssmat,
  verifsAssmat,
};
