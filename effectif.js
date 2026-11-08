import { list_of_players, postes, setitems } from "./data.js";
import {
    add, input_search, choice_search,
    set_filtre, set_recherche, init_pagination, render_effectif
} from "./functions.js";

setitems(list_of_players);

choice_search.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const t = btn.textContent.trim();
        set_filtre(t === "tous" ? "tous" : postes[t]);
    });
});

input_search.addEventListener("input", function () {
    set_recherche(input_search.value.trim().toLowerCase());
});

init_pagination();
render_effectif();
add();