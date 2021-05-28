

// this function  is used to set google map
function initMap(lat, lon) {
    const myLatLng = { lat: lat, lng: lon };
    const map = new google.maps.Map(document.getElementById("map1"), {
        zoom: 12,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Chess Club!",
    });
}

// this function loads Tournamets info on the page
function loadDom(chessTournaments, i) {
    let button = document.createElement('button');
    button.className = 'buttonTournaments';
    button.innerHTML = chessTournaments[i].getName();
    document.getElementById('map').appendChild(button);
    button.addEventListener('click', () => {
        let ul = document.createElement('ul');
        document.getElementById('map').innerHTML = '';
        let li1 = document.createElement('li');
        li1.append(`Name:...........${chessTournaments[i].getName()}`);
        ul.appendChild(li1);
        let li2 = document.createElement('li');
        li2.append(`Address:........${chessTournaments[i].getAddress()}`);
        ul.appendChild(li2);
        let li3 = document.createElement('li');
        li3.append(`Start Date:.....${chessTournaments[i].getStartDate()}`);
        ul.appendChild(li3);
        let li4 = document.createElement('li');
        li4.append(`End Date:........${chessTournaments[i].getEndDate()}`);
        ul.appendChild(li4);
        let li7 = document.createElement('li');
        li7.append(` Prize:..........$${chessTournaments[i].getPrize()} `);
        ul.appendChild(li7);
        let li8 = document.createElement('li');
        li8.append(` Fee:............$${chessTournaments[i].getFee()} `);
        ul.appendChild(li8);
        let li6 = document.createElement('li');
        li6.append(` Distance:........${chessTournaments[i].getDistance()} km`);
        ul.appendChild(li6);
        let li9 = document.createElement('li');
        li9.append(` Tournament starts in ${chessTournaments[i].getTimeDist()} days`);
        ul.appendChild(li9);
        let li5 = document.createElement('li');
        let a = document.createElement('a');
        a.href = (` ${chessTournaments[i].getWeb()}`);
        a.target = "_blank";
        a.textContent = `Visit ${chessTournaments[i].getName()}`
        li5.append(a);
        ul.appendChild(li5);
        document.getElementById('map').appendChild(ul);
        document.getElementById('map1').innerHTML = '';
        //to set and display Chess Tournament Location on Google map
        initMap(chessTournaments[i].getLat(), chessTournaments[i].getLon())

    })
}

export {
    loadDom
}