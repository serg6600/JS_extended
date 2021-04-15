'use strict';

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let date = new Date();
let today = date.getDay();

let fixdata = function(today){
    if (today === 0){
        today = 6;
        return(today);
        }
    today--;
    return(today);
};

for(let item in week){
    let div = document.createElement('div');
    if (week[item] === 'Sunday' || week[item] === 'Saturday'){
    div.className = 'weekend';
    } else {
        div.className = 'workday';
    }
    if (fixdata(today) === item) {
        div.classList.add('today');
    }
    div.textContent = week[item];
    document.body.append(div);
}
