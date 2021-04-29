let draftRound = [1, 2, 3, 4, 5, 6, 7];
let draftTeam = ["Ravens", "Chiefs", "Rams", "Giants", "Falcons", "Bengals", "Jaguars", "Jets"];
let outcome = ["ROTY", "OROTY", "DROTY", "the SuperBowl", "MVP","your division", "your conference"];

let drafted = draftRound[Math.floor(Math.random() * draftRound.length)];
let team = draftTeam[Math.floor(Math.random() * draftTeam.length)];
let season = outcome[Math.floor(Math.random() * outcome.length)];

console.log(`You were drafted in round ${drafted} to the ${team}. You ended up winning ${season}`);
