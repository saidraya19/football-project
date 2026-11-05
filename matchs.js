
import { ajout_matchs, modal_match, close_match, lieu_match } from "./doms.js";
import { manipilation_color, ajouter, creer_match, getitems } from "./matchs_function.js";
const array = getitems();

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
for (const mt of array  ) {
    creer_match(mt);
}