let currentDate = new Date();
let day = currentDate.getDay()
let id = Array.from(document.querySelector('#weekdays').children)
if( day === 0){
    id[6].classList.add('current')
}
else{
    id[day - 1].classList.add('current')
}
