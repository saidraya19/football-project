import { adversair, date, heure, lieu, lieu_match, 
  ajout_matchs, modal_match , btn_sub, 
  modal_delete, msg_dlt, confirm_delete, 
  cancel_delete, edit_modal_match, close_edit_match,
    edit_adversaire, edit_date, edit_heure, edit_lieu, edit_lieu_btn,
    edit_score_nous, edit_score_adv,
    edit_error_adv, edit_error_lieu, edit_error_score,
    btn_edit_submit }from "./doms.js"
import {matchs } from "./data.js";
import { regex_nom } from "./data.js"


close_edit_match.forEach(function (btn) {
    btn.addEventListener("click", function () {
        edit_modal_match.setAttribute("hidden", "");
    });
});

//localStorage.setItem("my_key_matchs", JSON.stringify(matchs));
const key = "my_key_matchs";
export function setitems(users) {
    localStorage.setItem(key, JSON.stringify(users));
}
export function getitems() {
    const saved_players = localStorage.getItem(key);
    return saved_players ? JSON.parse(saved_players) : matchs;
}
export function manipilation_color(classe) {

classe.forEach(function(btn){

    btn.addEventListener("click",function(){
        classe.forEach(function(btn){
          btn.classList.add("bg-slate-700");
    btn.classList.remove("bg-green-500")
        })
        btn.classList.remove("bg-slate-700");
        btn.classList.add("bg-green-500")
    })
})
}
export function show_message(message, error = false) {
    const success = document.querySelector("#msg-success");
    const p = success.querySelector("p");

    p.textContent = message;
    p.classList.remove("bg-green-500", "bg-red-500");
    p.classList.add(error ? "bg-red-500" : "bg-green-500");

    success.removeAttribute("hidden");
    setTimeout(function () {
        success.setAttribute("hidden", "");
    }, 1500);
}
function remove_match(match, cart) {
  msg_dlt.textContent = "Voulez-vous supprimer cett match  ?";
  modal_delete.removeAttribute("hidden");
  cancel_delete.onclick = function(){
  modal_delete.setAttribute("hidden", "");
     return;
  };
  confirm_delete.onclick = function(){
    matchs.splice(matchs.indexOf(match), 1);
    modal_delete.setAttribute("hidden", "");
    setitems(matchs); 
    cart.remove();
    show_message(" match removed successfully");
   }
 
  }
function edit(match){
  edit_modal_match.removeAttribute("hidden");
  edit_adversaire.value = match.advensair;
  edit_date.value = match.date;
  edit_heure.value = match.heure;
  edit_lieu.value  = match.lieu;
  edit_lieu_btn.forEach(function(e){
    if(match.location === e.textContent)
    {
      e.classList.add("bg-green-500");
    }
    })
    let location = "";

  edit_lieu_btn.forEach(function(e){
        e.addEventListener("click", function(){
            location = e.textContent;
        })
      })
    btn_edit_submit.addEventListener("click", function(){
    const valid_advensair = regex_nom.test(edit_adversaire.value.trim());
     const valide_lieu = regex_nom.test(edit_lieu.value.trim()); 
     let advensair_= edit_adversaire.value.trim();
     let date_ = edit_date.value;
     let h = edit_heure.value;
     let lieu_  = edit_lieu.value.trim();
     let msg_error_adv = "";
      let msg_error_lieu = "";
     if(!valid_advensair)
     {
        msg_error_adv = "Veuillez saisir un advensair valide.";
     }
     if(!valide_lieu)
     {
        msg_error_lieu = "Veuillez saisir un advensair valide.";
     }
     if(valid_advensair && valide_lieu && edit_date.value !== "" && edit_heure.value !== "" && location !== "")
     {
      match.advensair = advensair_;
      match.date = date_;
      match.heure = h;
      match.lieu = lieu_;
      match.location = location;

        setitems(matchs);
         edit_modal_match.setAttribute("hidden", "");
     }
    })


}    
  export function ajouter(){ 
  let location_ = "";

  lieu_match.forEach(function(e){
        e.addEventListener("click", function(){
            location_ = e.textContent;
        })
      })
     btn_sub.addEventListener("click", function(){
      const valid_advensair = regex_nom.test(adversair.value.trim());
     const valide_lieu = regex_nom.test(lieu.value.trim()); 
     let advensair_ = adversair.value.trim();
     let date_ = date.value;
     let h = heure.value;
     let lieu_  = lieu.value.trim();
     let msg_error_adv = "";
      let msg_error_lieu = "";
     if(!valid_advensair)
     {
        msg_error_adv = "Veuillez saisir un advensair valide.";
     }
     if(!valide_lieu)
     {
        msg_error_lieu = "Veuillez saisir un advensair valide.";
     }
     if(valid_advensair && valide_lieu && date.value !== "" && heure.value !== "" && location_ !== "")
     {
        let mat = {advensair:advensair_, date:date_, heure:h, lieu:lieu_, location:location_}
        matchs.push(mat);
        setitems(matchs);
         modal_match.setAttribute("hidden", "");
        creer_match(mat);
     }

})
}


export function creer_match(match) {
    const grand = document.querySelector("#all");
    const d = new Date(match.date);   
    const nhar = d.getDate();
    const jour = d.toLocaleDateString("fr-FR", { weekday: "short" });
    const mois = d.toLocaleDateString("fr-FR", { month: "short" });
    const card = document.createElement("div")
    card.className = "flex items-center justify-between rounded-xl bg-slate-800 p-4 text-white";
     card.innerHTML = `<div class="flex items-center gap-4">
    <div class="flex w-14 flex-col items-center rounded-lg border border-slate-600 bg-slate-700 py-2 text-center">
      <span class="text-[10px] font-semibold uppercase opacity-60">${jour}</span>
      <span class="text-xl font-bold leading-none">${nhar}</span>
      <span class="text-[10px] font-semibold uppercase opacity-60">${mois}</span>
      <span class="text-[10px] text-slate-400">${match.heure}</span>
    </div>

    <div>
      <span class="rounded bg-slate-700 px-2 py-0.5 text-[10px] font-semibold text-green-400">${match.location}</span>
      <h2 class="mt-1 text-base font-semibold">${match.advensair}</h2>
      <p class="text-xs text-slate-400">
        <i class="fa-solid fa-location-dot"></i> ${match.lieu}  
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
      <button class="rounded-md border border-slate-600 bg-slate-700 p-2 hover:border-green-500 edit_btn">✏️</button>
      <button class=" delet_btn p-2 text-slate-400 hover:text-red-500">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
  `
  card.querySelector(".delet_btn").addEventListener("click", function(){
    remove_match(match, card);
  })
 card.querySelector(".edit_btn").addEventListener("click", function(){
    edit(match);
 })
  grand.append(card);
}
