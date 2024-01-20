import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array fro coach ... initially empty

let theCoachs: Coach[] = [];

// add  the coach into the array
 theCoachs.push(myCricketCoach);
 theCoachs.push(myGolfCoach);

 for (let tempCoach of theCoachs){
    console.log(tempCoach.getDailyWorkout());
 }