//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){


  var manager = [
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  ]

  return manager;
}
createManager(managerName,managerAge,currentTeam,trophiesWon);


try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [2, 3, 1];

//write your function here
function createFormation(defender,midfield,forward){
  if(defender === undefined || midfield === undefined ){
    return null;
  }
  return{
    defender:defender,
    midfield:midfield,
    forward:forward,
  };
}
createFormation(formation);

// ject({ defender: 2, midfield: 3, forward: undefined }).
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let result = [];
  players.some((player) => {
    if(player.debut === parseInt(year))
    result.push(player)
  });
  return result;
}
filterByDebut();
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let re = [];
  players.some((player) => {
    if(player.position === position)
    re.push(player);
  });
  return re;
}
filterByPosition()
//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  let yoo = [];
  players.some((player) => {
    let awardStatus = false;
    player.awards.some((playerAward) => {
      if(playerAward.name === awardName){
        awardStatus = true;
      }
    });
    if(awardStatus) yoo.push(player);
  });
  return yoo;
}
//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes){
  let ro = [];
  players.some((player) => {
    let noOfSameAward = 0;
    player.awards.some((playerAward) => {
      if(playerAward.name === awardName){
        noOfSameAward += 1;
      }
    });
    if(noOfSameAward === parseInt(noOfTimes))
    ro.push(player);
  });
  return ro;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName,country){
  let result = [];
  players.some((player) => {
    let awardStatus = false;
    player.award.some((playerAward) => {
      if(playerAward.name === awardName && player.country === country){
        awardStatus = true;
      }
    });
    if(awardStatus){
      result.push(player);
    };
  });
  return result;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamAge(noOfAwards, team, age){
  let result = [];
  players.some((player) =>{
    if(
      player.award.length >= parseInt(noOfAwards) &&
      player.team === team &&
      player.age <= parseInt(age)
    ){
      result.push(player);
    }
  });
  return result;
}

//Progression 9 - Sort players in descending order of their age

function ageSort (){
  return players.sort((a,b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards (team) {
  let result = [];
  players.some((player) =>{
    if(player.teamm === team){
      result.push(player);
    }
  });
  return result.sort((a,b) => b.awards.length - a.awards.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let result = players.filter((player) => {
    let awardCount = 0;
    for (let playerAward of player.awards) {
      if (playerAward.name === awardName) {
        awardCount++;
      }
    }
    return awardCount === parseInt(noOfTimes) && player.country === country;
  });

  return result.sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let result = players
    .filter((player) => player.age >= parseInt(age))
    .map((player) => ({
      ...player,
      awards: [...player.awards].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return result;
}