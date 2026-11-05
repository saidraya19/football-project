import { list_of_players } from "./data.js";
import { show } from "./functions.js";

for (const player of list_of_players) {
    show(player);
}
document.querySelector(".length").textContent = list_of_players.length;