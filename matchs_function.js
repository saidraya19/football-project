import { adversair, date, heure, lieu, lieu_match, ajout_matchs, modal_match, matchs }from "./doms.js"
import { regex_nom } from "./data.js"
ajout_matchs.addEventListener("click", function(){
modal_match.toggleAttribute("hidden")
})
import { close_match } from "./doms.js"
close_match.forEach(function(btn){
    btn.addEventListener("click", function(){
        modal_match.toggleAttribute("hidden")
    })  
})
export function manipilation_color(classe) {
    classe.forEach(function (btn) {
        btn.addEventListener("click", function () {
            classe.forEach(function (b) {
                b.classList.remove("bg-green-500");
            });
            btn.classList.add("bg-green-500");
        });
    });
}
function ajouter(){
     const valid_advensair = regex_nom.test(adversair.value.trim());
     let advensair_ = advensair.value.tri 


}
function creer_match(match) {
    const grand = document.querySelector("#all");
    const cart = `html
    <div class="flex items-center gap-4">
    <div class="flex w-14 flex-col items-center rounded-lg border border-slate-600 bg-slate-700 py-2 text-center">
      <span class="text-[10px] font-semibold uppercase opacity-60">Sam</span>
      <span class="text-xl font-bold leading-none">10</span>
      <span class="text-[10px] font-semibold uppercase opacity-60">Oct</span>
      <span class="text-[10px] text-slate-400">15:00</span>
    </div>

    <div>
      <span class="rounded bg-slate-700 px-2 py-0.5 text-[10px] font-semibold text-green-400">Domicile</span>
      <h2 class="mt-1 text-base font-semibold">Atlas FC vs Union Oasis</h2>
      <p class="text-xs text-slate-400">
        <i class="fa-solid fa-location-dot"></i> Stade Municipal Oasis
      </p>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <div class="flex flex-col items-end gap-2">
      <div class="flex items-center gap-3">
        <h2 class="text-2xl font-bold text-green-400">3 - 1</h2>
        <span class="rounded bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-400">Victoire</span>
        <span class="text-[10px] text-slate-400">Modifier le score</span>
      </div>
      <button class="rounded-md border border-slate-600 bg-slate-700 px-3 py-1 text-xs hover:bg-slate-600">
      voire la composition</button>
    </div>

    <div class="flex items-center gap-2">
      <button class="rounded-md border border-slate-600 bg-slate-700 p-2 hover:border-green-500">✏️</button>
      <button class="p-2 text-slate-400 hover:text-red-500">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
  `
  grand.insertAdjacenthmtl("beforeend", cart);






}