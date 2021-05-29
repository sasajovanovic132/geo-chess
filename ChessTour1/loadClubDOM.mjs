
import { initMap } from './index1.mjs';
// this function  is used to set google map
/*function initMap(lat, lon) {
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
}*/

// this function loads Tournamets info on the page
function loadClubDom(chessClubs, i) {

    document.getElementById('map').style.backgroundImage = "url('') ";

    let button = document.createElement('button');
    button.className = 'buttonClubs';
    button.innerHTML = chessClubs[i].getName();

    document.getElementById('map').appendChild(button);
    button.addEventListener('click', () => {

        document.getElementById('map').innerHTML = '';
        let br = document.createElement('br');
        let ul = document.createElement('ul');
        let li1 = document.createElement('h4');
        li1.append(chessClubs[i].getName());

        ul.appendChild(li1);

        let li2 = document.createElement('li');
        li2.className = "middle";
        li2.append(`Address - ${chessClubs[i].getAddress()}`);
        ul.appendChild(li2);
        ul.append(br);
        let li3 = document.createElement('li');
        li3.className = "middle";
        li3.append(`Contact - ${chessClubs[i].getContact()}`);
        ul.appendChild(li3);
        ul.append(br);
        let li4 = document.createElement('li');
        li4.className = "middle";
        li4.append("Description: ");
        li4.append(br);
        li4.append(chessClubs[i].getDesc());
        ul.appendChild(li4);
        let li5 = document.createElement('li');
        li5.className = "middle";
        let li6 = document.createElement('li');
        li6.className = "middle";
        li6.append(` Distance -  ${chessClubs[i].getDistance()} mi`);
        ul.appendChild(li6);
        let a = document.createElement('a');
        a.href = (` ${chessClubs[i].getWeb()}`);
        a.target = "_blank";
        a.textContent = 'Visit';
        li5.append(a);
        ul.appendChild(li5);
        document.getElementById('map').appendChild(ul);
        document.getElementById('map1').innerHTML = '';
        //to set and display Chess Club Location on Google map
        initMap(chessClubs[i].getLat(), chessClubs[i].getLon());

    })
}

export {
    loadClubDom
}