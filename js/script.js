const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 0;

let e = "east";
let w = "west";
let n = "north";
let s = "south";

var audio = new Audio('media/monster.mp3');
var audiov = new Audio('media/victory.mp3');
audio.volume = 0.1;


let locations = [];
//Row 1
locations[0] = "Café Leblanc";                  //real world
locations[1] = "Metro Sation";                  //real world
locations[2] = "Dead End";                      //real world
locations[3] = "Palace R.2";                                  //meta verse
locations[4] = "Shadow!!";                                    //meta verse
//Row 2
locations[5] = "Hallway 1";                     //real world
locations[6] = "School Entrance";               //real world
locations[7] = "Distorion";                     //real world
locations[8] = "Palace R.1";                                  //meta verse
locations[9] = "Palace R.3";                                  //meta verse
//Row 3
locations[10] = "Hallway 2";                     //real world
locations[11] = "Hallway 3";                     //real world
locations[12] = "Hide-out";                      //real world & Hide-out
locations[13] = "Palace Entrance";                            //meta verse
locations[14] = "Palace R.4";                                 //meta verse
//Row 4
locations[15] = "Key Room";                      //real world
locations[16] = "Hallway 4";                     //real world
locations[17] = "Hallway 5";                     //real world
locations[18] = "Velvet room entrance";                       //meta verse
locations[19] = "Locked Room";                                //meta verse
//Row 5
locations[20] = "Hallway 6";                     //real world
locations[21] = "Hallway 7";                     //real world
locations[22] = "Hallway 8";                     //real world
locations[23] = "Velvet Room";                                // Meta Verse
locations[24] = "Treasure!!!";                                // Meta Verse
locations[25] = "Victory" ;

images = [];
//Row 1
images[0] = "room0.jpg";
images[1] = "room1.jpg";
images[2] = "room2.jpg";
images[3] = "room3.jpg";//
images[4] = "room4.jpg";//
//Row 2
images[5] = "room5.jpg";
images[6] = "room6.jpg";
images[7] = "room7.jpg";
images[8] = "room8.jpg";//
images[9] = "room9.jpg";//
//Row 3
images[10] = "room10.jpg";
images[11] = "room11.jpg";
images[12] = "room12.jpg";
images[13] = "room13.jpg";//
images[14] = "room14.jpg";//
//Row 4
images[15] = "room15.jpg";
images[16] = "room5.jpg";
images[17] = "room17.jpg";
images[18] = "room18.jpg";//
images[19] = "room19.jpg";//
//Row 5
images[20] = "room5.jpg";
images[21] = "room10.jpg";
images[22] = "room22.jpg";
images[23] = "room23.jpg";//
images[24] = "room24.jpg";//
images[25] = "vict.jpg"; 


directions = [];
//Row 1 
directions[0] = [e];
directions[1] = [w, e, s];
directions[2] = [w];
directions[3] = [e, s];//
directions[4] = [w, s];//
//Row 2 
directions[5] = [e, s];
directions[6] = [n, w];
directions[7] = [s];
directions[8] = [n, s];//
directions[9] = [n, s];//
//Row 3 
directions[10] = [n, e];
directions[11] = [w, e, s];
directions[12] = [w, n];
directions[13] = [n, s, "back"];//
directions[14] = [n, s];//
//Row 4 
directions[15] = [s];
directions[16] = [n,s,e];
directions[17] = [w, s];
directions[18] = [n, s];//
directions[19] = [n];//
//Row 5
directions[20] = [n,e];
directions[21] = [w, n];
directions[22] = [n];
directions[23] = [n];//
directions[24] = [n];//
directions[25] = ["next"];



descriptions = [];
//Row 1
descriptions[0] = "Sojiro: What are you still doing here, go to school";
descriptions[1] = "You're standing at the metro station waiting for the metro, the train is headed \"south\" ";
descriptions[2] = "You're standing in an empty alleyway, theres nothing to see here, maybe come back later.";
descriptions[3] = "Mona:Hmmmm i think i hear somebody in the next room.";
descriptions[4] = "Morgana: JOKER! There's a shadow. you can sneak around it or try to take it's mask.";
//Row 2
descriptions[5] = "You're in the school hallway, you hear the school bell toll and people rush into their classrooms.";
descriptions[6] = "You're at the school entrance.";
descriptions[7] = "Ryuji: What the eff dude. I was walking trough the halls and komoshida just bumped in to me and sayd watch out where your walking kiddo."+
" Who does he think he is the king of a castle. Morgana: KING!!! Joker that should be his distortion!";
descriptions[8] = "you see nothing of intrest. just a bookshelf";
descriptions[9] = "Skull: Geez that shadow almost got us. Let's keep going";
//Row 3
descriptions[10] = "You're standing in the second floor hallway, theres some vending machines here.";
descriptions[11] = "You're standing in the music club hallway, music students are making music here.";
descriptions[12] = "Morgana: Hey Joker let's go to the palace! (Use The metanav)";
descriptions[13] = "We are at the palace entrance let's go in!!";
descriptions[14] = "Mona: I can feel the treasure getting closer. Lets keep going!";
//Row 4
descriptions[15] = "You walk into the teacher lounge. nobody is here. you walked to komoshida's desk and saw a key.";
descriptions[16] = "Another hallway. there's not much of intrest here.";
descriptions[17] = "As you walk you spot the men's bathroom";
descriptions[18] = "You see a blue gate with a girl next to it.";
descriptions[19] = "This door is locked. looks like we need a key for it";
//Row 5
descriptions[20] = "your walking past the teacher lounge.";
descriptions[21] = "Hey this hallway is right next to Ryuji's class";
descriptions[22] = "This is the men's bathroom. there's no one here.";
descriptions[23] = "Igor: Welcome back, i see it's goig wel with you're rehabilitation. (there isn't much to do here let's go back)";
descriptions[24] = "Morgana: WE DID IT JOKER!!! WE GOT THE TREASURE!";
descriptions[25] = "You defeated the shadow. type \"next\" to continue";

//Inventory
let inventory =[];
let width = 5;
let atc = 0;
//

myInput.addEventListener('keydown', getInput, false);



function getInput(evt) {
  let text=" ";
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "go") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case n:
            currentLocation -= width;
            break;
          case s:
            currentLocation += width;
            break;
          case e:
            currentLocation += 1;
            break;
          case w:
            currentLocation -= 1;
            break;
          case "back":
            currentLocation = 12;
            break;
        }
        
      }
        else {
        feedback.innerHTML = "You Can't Do That";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "take") {
      console.log('ga wat pakken');
      myInput.value = "";
      if(currentLocation==15){
        if(inputArray[1]=='key') {
          if(!inventory.includes('key',-3)){
           
       console.log("JE HEBT DE SLEUTEL GEPAKT");
          inventory.push('key');

        }
        else{
          feedback.innerHTML = "You already have the key";
          myInput.value = "";
          setTimeout(removeFeedback, 4000);
          }
        }
      }
      if(inputArray[1]=="mask"){
        if(currentLocation==4){
          if(!inventory.includes('mask',-3)){       
             ambush();
             }
             else{
               feedback.innerHTML = "You already have the mask. Just walk past it.";
               myInput.value = "";
               setTimeout(removeFeedback, 4000);
               }
         
        }
      }
      if(inventory.length>0){
        for(let i=0;i<inventory.length;i++){
          text+= inventory[i]+", ";
          myInventory.innerHTML ="Your inventory contains: "+text;
          console.log(inventory);
          console.log(text);
        }
        
      }else{
        myInventory.innerHTML = "Your inventrory is empty";
      }
        
      
    }
    if(inputArray[0] == "attack"){
      attack();
      myInput.value = "";
      console.log(atc);
    }

    if(atc == 2){
      currentLocation=25;
      giveLocation(); 
      audio.pause();
      audio.currentTime = 0;
      playVic();
    }

    if(inputArray[0] == "next"){
      if(currentLocation== 25){
      currentLocation = 9;
      giveLocation();
      audiov.pause();
      audiov.currentTime = 0;
      atc = 0;}
    }
    
    if (inputArray[0] == "use"){
      console.log('ga wat gebruiken');
      myInput.value = "";
      if(currentLocation==12){
        if(inputArray[1]=="metanav"){
          console.log('*gebruikt metanav');
         
          if(inputArray[2] =="king"){
            currentLocation=13;
            giveLocation();
            console.log('*enters metaverse');
          }
          else{
             feedback.innerHTML = "To use the meta nav you have to say the distorion";
             myInput.value = "";
             setTimeout(removeFeedback, 4000);
          }

      }
        }
      }
    if(inputArray[1]=="key") {
          if(inventory[0]=="key"){
          if(currentLocation==19){
              currentLocation=24;
              giveLocation();
              console.log('*Uses Key');
            }
        }else {
          feedback.innerHTML = "You don't have the key!";
          myInput.value = "";
          setTimeout(removeFeedback, 4000); 
        }
    }        

    if (inputArray[0] != "go" && inputArray[0] != "take" && inputArray[0] != "use" && inputArray[0] != "attack" && inputArray[0] != "next" ){
      feedback.innerHTML = "Possible commands are: go, take, use and help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}


function giveLocation() {
  text="";
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "Possible Directions are: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
 
  myPossibilities.innerHTML = myDirections;
  if(inventory.length>0){
    for(let i=0;i<inventory.length;i++){
      text+= inventory[i]+", ";
      myInventory.innerHTML ="Your inventory contains: "+text;
    }
    
  }else{
    myInventory.innerHTML = "Your inventrory is empty";
  }
    
   
  
  document.title="Ma Quest - "+locations[currentLocation];
}

function removeFeedback() {
  feedback.innerHTML = "";
}

function ambush(){

  audio.play();
  inventory.push('mask');
  imageLocation.src='media/battle.jpg'
  myDescription.innerHTML = "Mona: Joker, try to attack the shadow!";
  myPossibilities.innerHTML = "";

}

function attack(){
    atc++;
    myDescription.innerHTML = "You attack the shadow. it lost half of it's health. Mona: Looking Cool Joker!";

}  
 function playVic(){
     
      audiov.volume = 0.1;
      audiov.play();
    }

giveLocation();
