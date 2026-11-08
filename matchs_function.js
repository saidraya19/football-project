import { adversair, date, heure, lieu, lieu_match, 
  ajout_matchs, modal_match , btn_sub, 
  modal_delete, msg_dlt, confirm_delete, 
  cancel_delete, edit_modal_match, close_edit_match,
    edit_adversaire, edit_date, edit_heure, edit_lieu, edit_lieu_btn,
    edit_score_nous, edit_score_adv,
    edit_error_adv, edit_error_lieu, edit_error_score,
    btn_edit_submit, btn_score, btn_cancel_score, btn_save, 
    modif_btn_score,modif_score_nous, modif_score_adv, edit_btn_save, modif_error_score,btn_cancel   }from "./doms.js"
import {matchs } from "./data.js";
import { regex_nom } from "./data.js"


close_edit_match.forEach(function (btn) {
    btn.onclick = function () {
        edit_modal_match.setAttribute("hidden", "");
    };
});


const key = "my_key_matchs";
export function setitems(users) {
    localStorage.setItem(key, JSON.stringify(users));
}
export function getitems() {
    const saved_players = localStorage.getItem(key);
    return saved_players ? JSON.parse(saved_players) : [];
}
matchs.push(...getitems());
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
  manipilation_color(edit_lieu_btn);
function edit(match){
  edit_modal_match.removeAttribute("hidden");
  edit_adversaire.value = match.advensair;
  edit_date.value = match.date;
  edit_heure.value = match.heure;
  edit_lieu.value  = match.lieu;
let lieu_choisi = match.location.trim();

edit_lieu_btn.forEach(function (b) {
  b.onclick = function () {
    lieu_choisi = b.textContent.trim();
  };

  if (b.textContent.trim() === lieu_choisi) {
    b.click();
  }
});
    btn_edit_submit.onclick =  function(){
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
     if(valid_advensair && valide_lieu && edit_date.value !== "" && edit_heure.value !== "" && lieu_choisi !== "")
     {
      match.advensair = advensair_;
      match.date = date_;
      match.heure = h;
      match.lieu = lieu_;
      match.location = lieu_choisi;

        setitems(matchs);
         edit_modal_match.setAttribute("hidden", "");
         document.querySelector("#all").innerHTML = "";
         for (const m of matchs)
          { creer_match(m);
          }
     }
    }


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
 function edit_scor(match){
modif_score_nous.value = match.nous_score ?? "";
  modif_score_adv.value = match.score_adv ?? "";
  modif_error_score.textContent = "";
  modif_btn_score.classList.remove("hidden");
  edit_btn_save.onclick = function(){
  let n = modif_score_nous.value;
  let a = modif_score_adv.value;
    let valid_score =   Number.isInteger(Number(n)) && Number.isInteger(Number(a)) &&  Number(n) >= 0 && Number(a) >= 0 && Number(n) <= 99 && Number(a) <= 99;             
    if(valid_score)
    {
    match.nous_score =  modif_score_nous.value;
    match.score_adv = modif_score_adv.value;
    setitems(matchs);
    document.querySelector("#all").innerHTML = "";
    for (const m of matchs) creer_match(m);
    modif_btn_score.classList.add("hidden");
    }
    else
    {
      modif_error_score.textContent = "this score inpossible"
      modif_error_score.classList.add("text-red-500");
      modif_error_score.classList.remove("hidden");
    }
  }
 }
 export function est_passe(match) {
  const wa9t_match = new Date(`${match.date}T${match.heure}`).getTime();
  return Date.now() >= wa9t_match;
}
export function creer_match(match) {
    const grand = document.querySelector("#all");
    const d = new Date(match.date); 
    const year = d.getFullYear();  
    const nhar = d.getDate();
    const jour = d.toLocaleDateString("fr-FR", { weekday: "short" });
    const mois = d.toLocaleDateString("fr-FR", { month: "short" });
const matchDate = new Date(`${match.date}T${match.heure}`);
    const card = document.createElement("div")
    card.className = "flex items-center justify-between rounded-xl bg-slate-800 p-4 text-white ";
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
    <div class="flex  flex-col items-end gap-2">
      <div class="relative  flex items-center gap-3">
        <h2 class=" result text-2xl font-bold min-h-10 text-green-400"></h2>
        <button class="absolute inset-0 w-full h-full rounded-md border cursor-pointer border-slate-600 bg-green-500  w-10 px-3 py-1 text-xs hover:bg-yellow-500 hidden saisir" >saisir le score</button>
        
        <span class=" who_won rounded  px-2 py-0.5 text-[10px] font-semibold "></span>
        <span class="text-[10px] text-slate-400 rounded-md border border-slate-600 modif p-2 hover:bg-slate-500 cursor-pointer">Modifier le score</span>
      </div>
      
      <button class="rounded-md  border border-slate-600 bg-slate-700 px-3 py-1 text-xs  cursor-pointer hover:bg-slate-600">
      voire la composition</button>
      <button class=" rounded-md border border-slate-600 px-3 py-1 text-xs hidden time "  ></button>
    </div>
    <div class="flex items-center gap-2">
      <button class="rounded-md border border-slate-600 bg-slate-700 p-2 hover:border-green-500 edit_btn cursor-pointer">✏️</button>
      <button class=" delet_btn p-2 text-slate-400 hover:text-red-500  cursor-pointer">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
  `
  const modif = card.querySelector(".modif")
function afficher_resultat() {
  
who_won.classList.remove("bg-green-500/20", "text-green-500","bg-red-500/20", "text-red-500","bg-slate-500/20", "text-slate-300")
      if(Number(match.nous_score) > Number(match.score_adv))
      {
        who_won.textContent = "victoire";
        who_won.classList.add("bg-green-500/20",  "text-green-500");
      }
      else if(Number(match.nous_score) < Number(match.score_adv))
      {
         who_won.textContent = "Défaite";
         who_won.classList.add("bg-red-500/20",  "text-red-500");
      }
      else{
         who_won.textContent = "Nul";
         who_won.classList.add("bg-gray-500",  "text-white");
      }
  who_won.classList.remove("hidden");
  modif.classList.remove("hidden");
cancel(btn_cancel, modif_btn_score)
}
  const who_won = card.querySelector(".who_won")
  const saisir = card.querySelector(".saisir")
  const times = card.querySelector(".time")
  const res =card.querySelector(".result")
     if (match.nous_score !== undefined) {
  res.textContent = `${match.nous_score} - ${match.score_adv}`;
  times.textContent = "Joué";
  times.classList.add("bg-red-500")
  times.classList.remove("hidden");
 afficher_resultat()

}
  function verefie(){
  if(new Date() >= matchDate.getTime())
{
  if(match.nous_score === undefined){
    modif.classList.remove("hidden");
  saisir.classList.remove("hidden")
  times.classList.add("hidden");
 
  }
}
else{
  modif.classList.add("hidden");
  times.textContent = "Á Venir"
  times.classList.remove("hidden")
  times.classList.add("bg-blue-400")
}
  }
// take input score
saisir.onclick =  function(){
   edit_score_nous.value = "";
    edit_score_adv.value = "";
  btn_score.classList.remove("hidden")
const res =card.querySelector(".result")
  btn_save.onclick =  function(){
   if(edit_score_nous.value !== "" &&  edit_score_adv.value !== "")
    {
      match.nous_score = edit_score_nous.value.trim();
      match.score_adv = edit_score_adv.value.trim();
      setitems(matchs)
      res.textContent = `${match.nous_score} - ${match.score_adv}`;
      times.textContent = "Joué";
      

      times.classList.remove("hidden", "bg-blue-400");

      times.classList.add("bg-red-500");
      btn_score.classList.add("hidden")
      saisir.classList.add("hidden")
      afficher_resultat()
    }
  }
  }
  modif.onclick = function(){
    edit_scor(match);
   
  }
  function cancel(clas, modal){
  clas.forEach((e) =>{
   e.onclick =  function(){
    modal.classList.toggle("hidden")}
 })
}
verefie();
cancel(btn_cancel_score, btn_score);
  card.querySelector(".delet_btn").addEventListener("click", function(){
    remove_match(match, card);
  })
 card.querySelector(".edit_btn").addEventListener("click", function(){
    edit(match);
 })
  grand.append(card);
  setInterval(verefie, 1000)
}
