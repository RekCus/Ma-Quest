const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 12;

let e = "east";
let w = "west";
let n = "north";
let s = "south";

let locations = [];
//Row 1
locations[0] = "Café Leblanc";                  //real world
locations[1] = "Metro Sation";                  //real world
locations[2] = "Dead End";                      //real world
locations[3] = "Palace R.2";                            //meta verse
locations[4] = "Shadow!!";                            //meta verse
//Row 2
locations[5] = "Hallway 1";               //real world
locations[6] = "School Entrance";                     //real world
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

images = [];
//Row 1
images[0] = "room0.jpg";
images[1] = "room1.jpg";
images[2] = "room2.jpg";
images[3] = "room3.jpg";
images[4] = "room4.jpg";
//Row 2
images[5] = "room5.jpg";
images[6] = "room6.jpg";
images[7] = "room7.jpg";
images[8] = "room8.jpg";
images[9] = "room89.jpg";
//Row 3
images[10] = "room10.jpg";
images[11] = "room11.jpg";
images[12] = "room12.jpg";
images[13] = "room13.jpg";
images[14] = "room14.jpg";
//Row 4
images[15] = "room15.jpg";
images[16] = "room16.jpg";
images[17] = "room17.jpg";
images[18] = "room18.jpg";
images[19] = "room19.jpg";
//Row 5
images[20] = "room20.jpg";
images[21] = "room21.jpg";
images[22] = "room22.jpg";
images[23] = "room23.jpg";
images[24] = "room24.jpg";


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
directions[19] = [n, s];//
//Row 5
directions[20] = [n,e];
directions[21] = [w, n];
directions[22] = [n];
directions[23] = [n];//
directions[24] = [n];//



descriptions = [];
//Row 1
descriptions[0] = "Sojiro: What are you still doing here, go to school";
descriptions[1] = "You're standing at the metro station waiting for the metro, the train is headed \"south\" ";
descriptions[2] = "You're standing in an empty alleyway, theres nothing to see here, maybe come back later.";
descriptions[3] = "je ziet een gouden sleutel met de letters G.A.T.E erop, je kan hem op pakken.";
descriptions[4] = "u staat in een gang. Studenten en leraren lopen richting de klaslokalen";
//Row 2
descriptions[5] = "You're in the school hallway, you hear the school bell toll and people rush into their classrooms.";
descriptions[6] = "You're at the school entrance.";
descriptions[7] = "Ryuji: What the eff dude. I was walking trough the halls and komoshida just bumped in to me and sayd watch out where your walking kiddo. Who does he think he is the king of a castle. Morgana: KING!!! Joker that should be his distortion!";
descriptions[8] = "u staat in het examenlokaal. Hier zijn de vierdejaars studenten bezig met het voorbereiden van hun examen";
descriptions[9] = "u staat in het examenlokaal. Hier zijn de vierdejaars studenten bezig met het voorbereiden van hun examen";
//Row 3
descriptions[10] = "You're standing in the second floor hallway, theres some vending machines here.";
descriptions[11] = "You're standing in the music club hallway, music students are making music here.";
descriptions[12] = "Morgana: Hey Joker let's go to the palace! (Use The MetaNav app)";
descriptions[13] = "je ziet een gouden sleutel met de letters G.A.T.E erop, je kan hem op pakken.";
descriptions[14] = "u staat in een gang. Studenten en leraren lopen richting de klaslokalen";
//Row 4
descriptions[15] = "u staat in het medialab. Hier kan geexperimenteerd worden met bijvoorbeeld virtual reality brillen";
descriptions[16] = "u staat bij de toiletten";
descriptions[17] = "u staat in een klaslokaal. De tafels staan recht achter elkaar en voorin is een projector en een smartboard";
descriptions[18] = "u staat in het examenlokaal. Hier zijn de vierdejaars studenten bezig met het voorbereiden van hun examen";
descriptions[19] = "u staat in het examenlokaal. Hier zijn de vierdejaars studenten bezig met het voorbereiden van hun examen";
//Row 5
descriptions[20] = "u staat in een kantine. Hier zitten studenten te eten of computerspelletjes te doen";
descriptions[21] = "u staat op een trap naar de eerste etage. Om u heen lopen studenten omhoog en omlaag";
descriptions[22] = "u heeft gewonnen";
descriptions[23] = "je ziet een gouden sleutel met de letters G.A.T.E erop, je kan hem op pakken.";
descriptions[24] = "u staat in een gang. Studenten en leraren lopen richting de klaslokalen";

//Inventory
let inventory =[];
let width = 5;
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
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "take") {
      console.log('ga wat pakken');
      myInput.value = "";
      if(currentLocation==3){
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
      
      if(inventory.length>0){
        for(let i=0;i<inventory.length;i++){
          text+= inventory[i]+" ";
          myInventory.innerHTML ="Your inventory contains: "+text;
          console.log(inventory);
          console.log(text);
        }
        
      }else{
        myInventory.innerHTML = "Your inventrory is empty";
      }
        
      
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
          }

        }
      }
    
    }

    if (inputArray[0] != "go" && inputArray[0] != "take" && inputArray[0] != "use"){
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
      text+= inventory[i]+"";
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

giveLocation();
