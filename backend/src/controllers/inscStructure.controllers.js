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

const getStructureId = (req, res) => {
  const email = req.body.email;
  inscStructureModels
    .getStructureId(email)
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const getPhotoProfil = (req, res) => {
  const id = req.query.id;
  inscStructureModels
    .getPhotoProfil(id)
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const updatePhotoProfil = (req, res) => {
  const { photoProfil, email } = req.body;
  inscStructureModels
    .updatePhotoProfil(photoProfil, email)
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

const getPhotosStructure = (req, res) => {
  const id = req.query.id;
  inscStructureModels
    .getPhotosStructure(id)
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
};

const updatePhotosStructure = (req, res) => {
  const { column, photoStructure, email } = req.body;
  inscStructureModels
    .updatePhotosStructure(column, photoStructure, email)
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

const createHoraires = (req, res) => {
  const {
    lundiOuvert,
    mardiOuvert,
    mercrediOuvert,
    jeudiOuvert,
    vendrediOuvert,
    samediOuvert,
    dimancheOuvert,
    lundiMin,
    lundiMax,
    mardiMin,
    mardiMax,
    mercrediMin,
    mercrediMax,
    jeudiMin,
    jeudiMax,
    vendrediMin,
    vendrediMax,
    samediMin,
    samediMax,
    dimancheMin,
    dimancheMax,
    email,
  } = req.body;
  inscStructureModels
    .getStructureId(email)
    .then(([[id]]) => {
      const structureId = id.structureId;
      inscStructureModels.createHoraires(
        "lundi",
        1,
        lundiOuvert,
        lundiMin,
        lundiMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "mardi",
        2,
        mardiOuvert,
        mardiMin,
        mardiMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "mercredi",
        3,
        mercrediOuvert,
        mercrediMin,
        mercrediMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "jeudi",
        4,
        jeudiOuvert,
        jeudiMin,
        jeudiMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "vendredi",
        5,
        vendrediOuvert,
        vendrediMin,
        vendrediMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "samedi",
        6,
        samediOuvert,
        samediMin,
        samediMax,
        structureId
      );
      inscStructureModels.createHoraires(
        "dimanche",
        7,
        dimancheOuvert,
        dimancheMin,
        dimancheMax,
        structureId
      );
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
};

const updateHoraires = (req, res) => {
  const {
    lundiOuvert,
    mardiOuvert,
    mercrediOuvert,
    jeudiOuvert,
    vendrediOuvert,
    samediOuvert,
    dimancheOuvert,
    lundiMin,
    lundiMax,
    mardiMin,
    mardiMax,
    mercrediMin,
    mercrediMax,
    jeudiMin,
    jeudiMax,
    vendrediMin,
    vendrediMax,
    samediMin,
    samediMax,
    dimancheMin,
    dimancheMax,
    structureId,
  } = req.body;
  inscStructureModels.updateHoraires(
    1,
    lundiOuvert,
    lundiMin,
    lundiMax,
    structureId
  );
  inscStructureModels.updateHoraires(
    2,
    mardiOuvert,
    mardiMin,
    mardiMax,
    structureId
  );
  inscStructureModels.updateHoraires(
    3,
    mercrediOuvert,
    mercrediMin,
    mercrediMax,
    structureId
  );
  inscStructureModels.updateHoraires(
    4,
    jeudiOuvert,
    jeudiMin,
    jeudiMax,
    structureId
  );
  inscStructureModels.updateHoraires(
    5,
    vendrediOuvert,
    vendrediMin,
    vendrediMax,
    structureId
  );
  inscStructureModels.updateHoraires(
    6,
    samediOuvert,
    samediMin,
    samediMax,
    structureId
  );
  inscStructureModels
    .updateHoraires(7, dimancheOuvert, dimancheMin, dimancheMax, structureId)
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const dureeAccueil = (req, res) => {
  const { dureeMin, dureeMax, email } = req.body;
  inscStructureModels
    .dureeAccueil(dureeMin, dureeMax, email)
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

const deleteDate = (req, res) => {
  const { structureId, date } = req.query;
  inscStructureModels
    .deleteDate(structureId, date)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Suppression impossible");
    });
};

module.exports = {
  getIsCreche,
  getStructureId,
  getPhotoProfil,
  getPhotosStructure,
  updatePhotoProfil,
  updatePhotosStructure,
  updateDescription,
  calendrierExist,
  horairesExist,
  resaInst,
  createHoraires,
  updateHoraires,
  dureeAccueil,
  deleteDate,
};
