const resultOutput = document.querySelector('#res');

const areas = Array.from(document.querySelectorAll('area'));

const res = [];

areas.forEach(area => area.addEventListener('click', () => {
    res.push(area.title);
    if(res.indexOf(area.title) !== res.lastIndexOf(area.title)) {
        res.splice(res.indexOf(area.title), 1);
        res.splice(res.lastIndexOf(area.title), 1);
    };

    resultOutput.innerHTML = res.join(', ');
}))


