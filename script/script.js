'use strict';

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();
let today = Number(date.getDay());

for(let item in week){
 	let div = document.createElement('div');
	div.textContent = week[item];
	document.body.append(div);
	if (week[item] === 'Sunday' || week[item] === 	'Saturday')
		{ 
		    div.style.fontStyle = 'italic';
		}
    if (today === Number(item)) {
        div.style.fontWeight = 'bold';
    }
    document.body.append(div);
}
