function beerBottlesSong() {
    var bottles = 99;
    var lessBottles = 98;
    var bottleWord = "bottles";
    var lessBottlesWord ="bottles";
 

    while(bottles >= 0)  {
   
    if(bottles === 1)  {
        bottleWord = "bottle";
    } else if(bottles === 0) {
        bottles = "No more";
        bottleWord = "bottles";
    } 
 
    if(lessBottles === 1)  {
        lessBottlesWord = "bottle";
    } else if(lessBottles === 0) {
        lessBottles = "No more";
        lessBottlesWord = "bottles";
    } 
  if(bottles === "No more") {
      
     console.log(bottles + " " + bottleWord + " of beer on the wall. Go to the shop and buy some more!");

  } else {

     console.log(bottles + " " + bottleWord + " of beer on the wall. Take one down, pass it around. " + lessBottles + " " + lessBottlesWord + " of beer on the wall.")

  }
    
    bottles--;
    lessBottles--;
    }


}
