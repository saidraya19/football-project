import {
    list_of_players,
    setitems,
    regexofnumber,
    regex_nom       
} from "./data.js";

import { show, show_message } from "./functions.js";

const btnajouter = document.querySelectorAll(".ajout-btn");
const formajout = document.querySelector("#ajout");

btnajouter.forEach(function (btn) {
    btn.addEventListener("click", function () {
        formajout.toggleAttribute("hidden");
    });
});

const number = document.querySelector("#numberofplayer");
const name_ = document.querySelector("#player");
const error_name = document.querySelector(".error-msg-name");
const error_number = document.querySelector(".msg-number");
const btn_sub = document.querySelector("#btn-submit");
const gardien_chois = document.querySelectorAll(".btn-post");

let post = "";

gardien_chois.forEach(function (even) {
    even.addEventListener("click", function () {
        gardien_chois.forEach(function (btn) {
            btn.classList.remove("bg-[oklch(66.6%_0.179_58.318)]");
        });
        even.classList.add("bg-[oklch(66.6%_0.179_58.318)]");
        post = even.textContent.trim();
    });
});

btn_sub.addEventListener("click", function (event) {
    event.preventDefault();

    let msg_name = "";
    let number_msg = "";

    const nom_valide = regex_nom.test(name_.value.trim());
    const numero_valide = regexofnumber.test(number.value);

    if (!nom_valide) {
        msg_name = "Veuillez saisir un nom valide.";
    }

    if (!numero_valide) {
        number_msg = "Numéro invalide. Veuillez saisir un numéro entre 1 et 99";
    }

    const number_validation = list_of_players.some(function (player) {
        return player.number === Number(number.value);
    });

    if (numero_valide && number_validation) {
        number_msg = "Numéro déjà utilisé";
    }

    error_number.textContent = number_msg;
    error_name.textContent = msg_name;

    if (nom_valide && numero_valide && !number_validation && post !== "") {
        const add_data = {
            name: name_.value.trim(),
            number: Number(number.value),
            post: post
        };

        list_of_players.push(add_data);
        setitems(list_of_players);

        show(add_data);

        document.querySelector(".length").textContent = list_of_players.length;

        show_message("Player added successfully");

        formajout.toggleAttribute("hidden");
    }

    if (error_number.textContent.trim() === "" && error_name.textContent.trim() === "") {
        name_.classList.remove("border-red-400");
        number.classList.remove("border-red-400");
        number.classList.add("border-green-400");
        name_.classList.add("border-green-400");
    } else {
        if (error_number.textContent.trim() === "") {
            number.classList.remove("border-red-400");
            number.classList.add("border-green-400");
        } else {
            number.classList.remove("border-green-400");
            number.classList.add("border-red-400");
        }

        if (error_name.textContent.trim() === "") {
            name_.classList.remove("border-red-400");
            name_.classList.add("border-green-400");
        } else {
            name_.classList.remove("border-green-400");
            name_.classList.add("border-red-400");
        }
    }
});

for (const player of list_of_players) {
    show(player);
}
document.querySelector(".length").textContent = list_of_players.length;