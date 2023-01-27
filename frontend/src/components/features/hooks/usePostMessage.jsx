import axios from "axios";

export const onSubmit = (d) => {
    const { prenom, nom, email, optionSelected, texte } = d;
    axios
        .post(`${import.meta.env.VITE_PATH}/contact/message`, {
            prenom,
            nom,
            email,
            optionSelected,
            texte,
        })
        .then((res) => {
            console.warn(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    return { onSubmit };
};