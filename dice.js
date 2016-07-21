
function diceRoll (){
	var rolling = true,die1, die2, result; 
		while(rolling){
			 die1 = Math.floor(Math.random() * 6 ) + 1 ; 
			 die2 = Math.floor(Math.random() * 6 ) + 1;
			 if(die1 ===1 && die2===1){
			 	result = "Snake Eyes"; 
			 }else{
			 	result = die1 + die2 ;
			 }
			
		var again = prompt( "( "+die1 + " + " + die2 +" )" + " You rolled a "+ result +". \n Type 'n' to end the game"); 
			if(again === "n"){
				rolling = false; 
			}
			
		}
		return result ; 
}

diceRoll(); 