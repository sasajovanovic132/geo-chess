

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
function loadClubDom(chessClubs, i) {
    let button = document.createElement('button');
    button.className = 'buttonClubs';
    button.innerHTML = chessClubs[i].getName();
    document.getElementById('map').appendChild(button);
    button.addEventListener('click', () => {

        document.getElementById('map').innerHTML = '';
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        li1.append(`Name -  ${chessClubs[i].getName()}`);
        ul.appendChild(li1);
        let li2 = document.createElement('li');
        li2.append(`Address - ${chessClubs[i].getAddress()}`);
        ul.appendChild(li2);
        let li3 = document.createElement('li');
        li3.append(`Contact - ${chessClubs[i].getContact()}`);
        ul.appendChild(li3);
        let li4 = document.createElement('li');
        li4.append(`Description - ${chessClubs[i].getDesc()}`);
        ul.appendChild(li4);
        let li5 = document.createElement('li');
        let a = document.createElement('a');
        a.href = (` ${chessClubs[i].getWeb()}`);
        a.target = "_blank";
        a.textContent = `Visit ${chessClubs[i].getName()}`
        li5.append(a);
        ul.appendChild(li5);
        let li6 = document.createElement('li');
        li6.append(` Distance -  ${chessClubs[i].getDistance()} km`);
        ul.appendChild(li6);
        document.getElementById('map').appendChild(ul);
        document.getElementById('map1').innerHTML = '';
        //to set and display Chess Club Location on Google map
        initMap(chessClubs[i].getLat(), chessClubs[i].getLon());

    })
}

export {
    loadClubDom
}