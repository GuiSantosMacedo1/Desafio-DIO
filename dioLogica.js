let nomeHeroi = "Gui";
let xpHeroi = 7001;
let levelHeroi = "";

if (xpHeroi <= 1000) {
  levelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
  levelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
  levelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
  levelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
  levelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
  levelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
  levelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
  levelHeroi = "Radiante";
}

console.log("O Herói do nome " + nomeHeroi + " Está no level: " + levelHeroi);
