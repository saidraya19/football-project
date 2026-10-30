import { list_of_players } from "./data.js";
import { creer_carte_effectif } from "./functions.js";
import { add } from "./functions.js";

const rand = document.querySelector("#rand");

for (const player of list_of_players) {
    rand.append(creer_carte_effectif(player));
}
add();