import { useState } from 'react';
import "./hacking.css"

function HackingButton({color, handleClick}){
	return(
		<button className="button" style={{backgroundColor:color}} onClick={handleClick}></button>
	);
}

function HackingBoard({leftsidebuttons = ["red", "blue", "green"], rightsidebuttons = ["red", "blue", "green"], handleLeftClick, handleRightClick}){
	return(
		<div className="hackingboard">
			<div className="leftbuttons">
				<HackingButton color={leftsidebuttons[0]} handleClick={() => handleLeftClick(0)} />
				<HackingButton color={leftsidebuttons[1]} handleClick={() => handleLeftClick(1)} />
				<HackingButton color={leftsidebuttons[2]} handleClick={() => handleLeftClick(2)} />
			</div>
			<div className="rightbuttons">
				<HackingButton color={rightsidebuttons[0]} handleClick={() => handleRightClick(0)} />
				<HackingButton color={rightsidebuttons[1]} handleClick={() => handleRightClick(1)} />
				<HackingButton color={rightsidebuttons[2]} handleClick={() => handleRightClick(2)} />
			</div>
		</div>
	);
}

function shuffler(arr){ //Shameless CTRL-C + CTRL-V
	arr.sort(function (a, b) {
    	return Math.random() - 0.5; //Math generates random num between 0 and 1, if num > 0.5 then it is positive and a comes before b, otherwise it's negative and b comes before a, if math returns 0.5 then a and b are considered equals
  	});
	
	return arr;
}

export function HackingGame(){
	const [leftsidebuttons, setleftsidebuttons] = useState(shuffler(["crimson", "cornflowerblue", "green"])); //Light up = red, blue, chartreuse
	const [rightsidebuttons, setrightsidebuttons] = useState(shuffler(["crimson", "cornflowerblue", "green"]));
	const [leftselected, setleftselected] = useState(false);
	const [selectedleft, setselectedleft] = useState(-1);
	const [solved, setsolved] = useState(false);
	const [buttonlock, setbuttonlock] = useState(Array(6).fill(false));
	
	//console.log("left " + leftsidebuttons);
	//console.log("right " + rightsidebuttons);
	//console.log("\n");
	//console.log(leftselected);
	
	function handlerLeftClick(selectedleft){
		if(!leftselected){
			setselectedleft(selectedleft);
			//console.log(selectedbutton + " -> " + "[" + selectedbuttons + "]");
		}
		
		else{
			setselectedleft(-1);
		}
		
		setleftselected(!leftselected);
	}
	
	function handlerRightClick(selectedright){
		//console.log(selectedleft + " " + selectedright);
		if(leftselected && leftsidebuttons[selectedleft] == rightsidebuttons[selectedright]){
			const newlocks = [...buttonlock.slice(0, selectedleft), true, ...buttonlock.slice(selectedleft + 1, selectedright + 3), true, ...buttonlock.slice(selectedright + 4)]; //State is updated asynchronous, instead of dealing with that we use regular vars
			setbuttonlock(newlocks);
			setleftselected(!leftselected);
			
			if(leftsidebuttons[selectedleft] == "crimson"){
				let newLeftColors = [...leftsidebuttons];
				newLeftColors[selectedleft] = "red";
				setleftsidebuttons(newLeftColors);
				
				let newRighttColors = [...rightsidebuttons];
				newRighttColors[selectedright] = "red";
				setrightsidebuttons(newRighttColors);
			}
			
			else if(leftsidebuttons[selectedleft] == "cornflowerblue"){
				let newLeftColors = [...leftsidebuttons];
				newLeftColors[selectedleft] = "blue";
				setleftsidebuttons(newLeftColors);
				
				let newRighttColors = [...rightsidebuttons];
				newRighttColors[selectedright] = "blue";
				setrightsidebuttons(newRighttColors);
			}
			
			else if(leftsidebuttons[selectedleft] == "green"){
				let newLeftColors = [...leftsidebuttons];
				newLeftColors[selectedleft] = "chartreuse";
				setleftsidebuttons(newLeftColors);
				
				let newRighttColors = [...rightsidebuttons];
				newRighttColors[selectedright] = "chartreuse";
				setrightsidebuttons(newRighttColors);
			}
			
			let victory = 0;
			newlocks.forEach((button) => button ? victory++ : console.log("not true")); //I fucking hate javascript
			
			if(victory >= 6){
				setsolved(true);
			}
			//console.log("it works");
			//Add lock to buttons and highlight buttons to show they are solved and add check to finish whole puzzle
		}
	}
	
	//console.log(buttonlock);
	
	if(!solved){
		return(
			<HackingBoard leftsidebuttons={leftsidebuttons} rightsidebuttons={rightsidebuttons} handleLeftClick={handlerLeftClick} handleRightClick={handlerRightClick} />
		);
	}
	
	else{
		return null;
	}
}