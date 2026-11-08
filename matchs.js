
import { ajout_matchs, modal_match, close_match, lieu_match, search, felter_match } from "./doms.js";
import { manipilation_color, ajouter, creer_match, est_passe } from "./matchs_function.js";
import { matchs } from "./data.js"


ajout_matchs.addEventListener("click", function () {
    modal_match.toggleAttribute("hidden");
})
close_match.forEach(function (btn) {
    btn.addEventListener("click", function () {
        modal_match.setAttribute("hidden", "");
    });
});
manipilation_color(lieu_match);
ajouter();
manipilation_color(felter_match);
let choice = "tous";

function afficher() {
    const texte = search.value.trim().toLowerCase();
    document.querySelector("#all").innerHTML = "";   

    for (const m of matchs) {
        const passe = est_passe(m);

        const ok_filtre = choice === "tous" ||(choice === "avenir" && !passe) || (choice === "joues" && passe);

        const ok_search = m.advensair.toLowerCase().includes(texte);

        if (ok_filtre && ok_search) creer_match(m);     
    }
}

felter_match.forEach(function (e) {
    e.addEventListener("click", function () {
        choice = e.dataset.filtre;                      
        afficher();
    });
});

search.addEventListener("input", afficher);
afficher();