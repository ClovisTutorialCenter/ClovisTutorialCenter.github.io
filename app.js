const properties = {
    name: 'andrew',
    subject: 'math',
    date: '2021-03-04'
}
const form = document.querySelector('#upload');
form.addEventListener('submit', e => {
    e.preventDefault()
    const file = form.file.files[0]
    const fr = new FileReader()
    fr.readAsArrayBuffer(file)
    fr.onload = f =>{
        const url = "https://script.google.com/macros/s/AKfycbybNCoHuYiBLwtQiK1oIpnRnJ-QjfLkNvh97elijshPC1dDLo9WkO5ad1y4Cz0wU8RA/exec"
        console.log(file.name,file.type)
        fetch(`${url}`, {
            method: "POST",
            // mode: 'no-cors',
            body: JSON.stringify([...new Int8Array(f.target.result)]),
        })    
    }
})
function submitForm(thisForm) {
    thisForm.action = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScmvHy1TCDleTBkbkiWsG4YFqkOMKCApVBlI53YxbnPneIYKQ/formResponse" 
    // alert(form.action)
    properties.name = thisForm.querySelector('#name').value
    properties.subject = thisForm.querySelector('#subject').value
    properties.date = thisForm.querySelector('#myDate').value
    console.log(properties)
    return true
}
function todayDate() {
    var today = new Date(); // get the current date
    today.setDate(today.getDay() + 3)
    console.log(today)
    var dd = today.getDate(); //get the day from today.
    var mm = today.getMonth()+1; //get the month from today +1 because january is 0!
    var yyyy = today.getFullYear(); //get the year from today
    //if day is below 10, add a zero before (ex: 9 -> 09)
    if(dd<10) {
        dd='0'+dd
    }
    //like the day, do the same to month (3->03)
    if(mm<10) {
        mm='0'+mm
    }
    //finally join yyyy mm and dd with a "-" between then
    return yyyy+'-'+mm+'-'+dd; 
}
$(document).ready(function(){
    $('#myDate').attr('min', todayDate());
});