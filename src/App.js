import './App.css';
import { DialoguePrompt, DiaryPrompt } from './prompts.js'; //Whenever u want to import default, ommit {}
import { HackingGame } from "./hacking.js";
import { LockpickingGame } from "./lockpicking.js";
import Dialogue1 from './dialogue and scenes/1.json';
import Dialogue2 from './dialogue and scenes/2.json';
import Dialogue3 from './dialogue and scenes/3.json';
import Dialogue4 from './dialogue and scenes/4.json';
import Dialogue5 from './dialogue and scenes/5.json';
import Dialogue6 from './dialogue and scenes/6.json';
import Dialogue7 from './dialogue and scenes/7.json';
import Dialogue8b from './dialogue and scenes/8b.json';
import Dialogue9 from './dialogue and scenes/9.json';
import Dialogue10 from './dialogue and scenes/10.json';
import Dialogue11 from './dialogue and scenes/11.json';
import Dialogue12a from './dialogue and scenes/12a.json';
import Dialogue12b from './dialogue and scenes/12b.json';
import Dialogue13 from './dialogue and scenes/13.json';
import Dialogue14 from './dialogue and scenes/14.json';
import Dialogue15 from './dialogue and scenes/15.json';

import { useState, useEffect } from 'react';

function App() {
	const [currentdisplayline, setcurrentdisplayline] = useState(0);
	const [currentdisplaydialogue, setcurrentdisplaydialogue] = useState(0);
	const [storyover, setstoryover] = useState(false);
	const dialogues = [Dialogue1, Dialogue2, Dialogue3, Dialogue4, Dialogue5, Dialogue6, Dialogue7, Dialogue8b, Dialogue9, Dialogue10, Dialogue11, Dialogue12a, Dialogue12b, Dialogue13, Dialogue14, Dialogue15];
	let currentdialogue = 0;
	let dialoguelength = dialogues[currentdialogue].Dialogue.length;
	let currentline = 0;
	//console.log(dialogues[currentdialogue].Dialogue.length);
	
	function handleClick(){
		currentline++;
		//console.log(currentdialogue);
		
		if(currentline >= dialogues[currentdialogue].Dialogue.length){
			currentdialogue++;
			
			if(currentdialogue >= dialogues.length){
				currentdialogue--;
				currentline--;
				
				setstoryover(true);
			}
			
			else{
				setcurrentdisplaydialogue(currentdialogue);
				currentline = 0;
			}
			
			//console.log("hit");
		}
		
		setcurrentdisplayline(currentline);
	}
	
	useEffect(() => {window.addEventListener("click", handleClick, true)}, []); //Listen for clicks
	
	let background = require(`./resources/${dialogues[currentdisplaydialogue].Dialogue[currentdisplayline].background}`); //Syntax hell
	
	if(!storyover){
		return (
			<div className="App" style={{backgroundImage: `url(${background})`}}> {/*Too tired to care...*/}
				<DialoguePrompt portimg={dialogues[currentdisplaydialogue].Dialogue[currentdisplayline].portrait} name={dialogues[currentdisplaydialogue].Dialogue[currentdisplayline].name} dialogue={dialogues[currentdisplaydialogue].Dialogue[currentdisplayline].dialogueline}/>
			</div>
		);
	}
	
	else{
		return (
			<div className="App" style={{backgroundColor: "#000000"}}> {/*Too tired to care...*/}
				<LockpickingGame />
				<HackingGame />
			</div>
		);
	}
}

export default App;


/* DEV NOTES:

	- POTENTIAL ISSUE WITH MULTIPLE OVERLAY DIVS, CONSIDER MIGRATING DIV TO MAIN APP.JS AND HAVE IT RENDER ALL PROMPTS WITHIN THE SAME OVERLAY DIV.

	Prompts:
	
		<DialoguePrompt />
	    <DiaryPrompt /> 
	    <InventoryPrompt />
	    <InteractionPrompt />

	Hacking Minigame:

		<HackingBoard />

	Lockpicking Minigame:

		<LockpickingBoard />
		
*/

/*

<div className="overlay">
	<LockpickingGame />
</div>
		
*/