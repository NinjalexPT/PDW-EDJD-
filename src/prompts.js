//import { useState } from 'react';
import './prompts.css'

export function DialoguePrompt({portimg = "testportrait.jpg", name = "John Doe", dialogue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas tortor gravida magna vulputate, eu suscipit velit tincidunt. Cras cursus, ante a tempus malesuada, tortor leo congue ante, et aliquam lacus nisl vel ex. Quisque et eros vitae augue viverra congue. In tincidunt urna et dolor ultricies, et bibendum ligula interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum consequat nunc ut tellus euismod porta. Aliquam vitae interdum leo, eu venenatis eros. Ut hendrerit nibh vitae est laoreet commodo. Donec ullamcorper elit ligula, non lobortis libero malesuada vel. Integer tincidunt arcu at maximus sodales. Donec et ante suscipit, bibendum eros in, tempus sapien."})
{
	return(
		<div className="dialoguebox">
			<div className="portrait">
				<img src={require(`./resources/${portimg}`)} className="portrait-image" alt="portrait"/>
			</div>
			<div className="textside">
				<div className="title">
					<p className="titletext">{name}</p>
						{/*<button className="dialoguequit">X</button>*/}
				</div>
				<div className="dialogue">
					<p className="dialoguetext">{dialogue}</p>
				</div>
			</div>
		</div>
	);
}

export function DiaryPrompt({entriestext = Array(10).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas tortor gravida magna vulputate, eu suscipit velit tincidunt. Cras cursus, ante a tempus malesuada, tortor leo congue ante, et aliquam lacus nisl vel ex. Quisque et eros vitae augue viverra congue. In tincidunt urna et dolor ultricies, et bibendum ligula interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum consequat nunc ut tellus euismod porta. Aliquam vitae interdum leo, eu venenatis eros. Ut hendrerit nibh vitae est laoreet commodo. Donec ullamcorper elit ligula, non lobortis libero malesuada vel. Integer tincidunt arcu at maximus sodales. Donec et ante suscipit, bibendum eros in, tempus sapien.")}){
	const entries = entriestext.map((entry, num) => {
		return(
			<li key={num} className="entry">
				<p>{entry}</p>
			</li>
		);
	})

	return(
		<div className="diaryprompt">
			<ul>{entries}</ul>
		</div>
	);
}

{/*
export function InteractionPrompt({message = "Press E to do absolutely nothing."}){
	return(
		<div className="overlay">
			<div className="interactprompt">
				<p className="interacttext">{message}</p>
			</div>
		</div>
	);
}
*/}

{/*
export function InventoryPrompt({invitems = Array(10).fill("testportrait.jpg")}){
	const items = invitems.map((item, num) => {
		return(
			<li key={num} className="item">
				<img src={require(`./resources/${item}`)} className="itemimg" alt="item"/>
			</li>
		);
	})

	return(
		<div className="overlay">
			<div className="inventoryprompt">
				<ul className="inventoryitems">{items}</ul>
			</div>
		</div>
	);
}
*/}