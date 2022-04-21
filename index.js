
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
    let res1 = document.getElementById('res1');
    let res2 = document.getElementById('res2');
    let id = 'cont-dayFPC';
    if (window.innerWidth > window.innerHeight) { id = 'cont-dayFPC' } else { id = 'cont-dayFAND' }
    document.getElementById(id).classList.add('none');
    document.getElementById('back').classList.remove('none');
    res.classList.remove('none');
    res1.classList.remove('none');
    res2.classList.remove('none');
    res.src = `./res/${m}/${week}/${day}.jpg`;
    res1.src = `./res/${m}/${week}/${day}.1.jpg`;
    res2.src = `./res/${m}/${week}/${day}.2.jpg`;
}

function back() {
    let res = document.getElementById('res');
    let res1 = document.getElementById('res1');
    let id = 'cont-dayFPC';
    if (window.innerWidth > window.innerHeight) { id = 'cont-dayFPC' } else { id = 'cont-dayFAND' }
    document.getElementById(id).classList.remove('none');
    res.classList.add('none');
    res1.classList.add('none');
    res2.classList.add('none');
    document.getElementById('back').classList.add('none');
}
