import "./lockpicking.css"
import pick from "./resources/pick.png"
import lock from "./resources/lock.png"
import { useState, useEffect } from 'react';

function LockpickingBoard({currentangle, lockturn}){
	return(
		<div className="lockpickingboard">
			<img src={lock} alt="bomba" className="lock" style={{transform:`rotate(${lockturn}deg)`}}></img>
			<img src={pick} alt="bomba" className="pick" style={{transform:`rotate(${currentangle}deg)`}}></img> {/*Template literal, curly brackets after </img> denote a JSX comment*/}
		</div>
	);
}

function randomangle(){
	return -(Math.random() * 180) - 20;
}

export function LockpickingGame(){
	const [correctangle, setcorrectangle] = useState(randomangle());
	const [displayangle, setdisplayangle] = useState(-20);
	const [lockturn, setlockturn] = useState(0);
	const [unlocked, setunlocked] = useState(false);
	
	let currentangle = -20;
	
	//console.log(currentangle + " -> " + correctangle);
	function handleKeyPress(event){
		//console.log(event.key);
		if(event.key == "a" && currentangle > -200){
			currentangle -= 1
			setdisplayangle(currentangle);
			//console.log("hit a");
		}
		
		if(event.key == "d" && currentangle < -20){
			currentangle += 1
			setdisplayangle(currentangle);
			//console.log("hit d");
		}
		
		if(event.key == "w" && (currentangle >= (correctangle - 10) && currentangle <= (correctangle + 10))){
			setlockturn(90);
			setunlocked(true);
			//console.log("hit w");
		}
	}
	
	useEffect(() => {document.addEventListener('keydown', handleKeyPress, true)}, []); //Detect keypresses
	
	if(!unlocked){
		return(
			<LockpickingBoard currentangle={displayangle} lockturn={lockturn} />
		);
	}
	
	else{
		return null;
	}
}

//https://www.stackoverflow.com/questions/6652476
