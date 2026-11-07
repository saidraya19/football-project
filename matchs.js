
import { ajout_matchs, modal_match, close_match, lieu_match } from "./doms.js";
import { manipilation_color, ajouter, creer_match, } from "./matchs_function.js";
import { matchs} from "./data.js"

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
for (const mt of matchs) {
    creer_match(mt);
}