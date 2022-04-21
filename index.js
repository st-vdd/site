
function page(mouth) {
    document.getElementById('mouth').value = mouth;
    //document.location.href = "./week.html"
    document.getElementById("cont").classList.add('none');
    let id = 'cont-dayFPC'
    if (window.innerWidth > window.innerHeight) { id = 'cont-dayFPC' } else { id = 'cont-dayFAND' }
    document.getElementById(id).classList.remove('none');
}

function getPage(week, day) {
    let m = document.getElementById('mouth').value;
    // alert("Mouth: "+m+", Week: "+week+", Day: "+day);
    let res = document.getElementById('res');
    let id = 'cont-dayFPC';
    if (window.innerWidth > window.innerHeight) { id = 'cont-dayFPC' } else { id = 'cont-dayFAND' }
    document.getElementById(id).classList.add('none');
    document.getElementById('back').classList.remove('none');
    res.classList.remove('none');
    res.src = `./res/${m}/${week}/${day}.jpg`;
}

function back() {
    let res = document.getElementById('res');
    let id = 'cont-dayFPC';
    if (window.innerWidth > window.innerHeight) { id = 'cont-dayFPC' } else { id = 'cont-dayFAND' }
    document.getElementById(id).classList.remove('none');
    res.classList.add('none');
    document.getElementById('back').classList.add('none');
}
