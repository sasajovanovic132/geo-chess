/*
* Project file: index.mjs
* Project folder: ChessTour1
* Description: @ description.txt
* Contains main function
* Works on localhost:8088 local web server
* For: CIS-228 - Fall Semester - Final Project
* Last edited: 12/08/2020 by S.Jovanovic
*/

import {
    addClub
} from './addClub.mjs'

import {
    addTournaments
} from './addTournaments.mjs'

import {
    fetchClubs1
} from './fetchClubs1.mjs';

import {
    fetchTournaments
} from './fetchTournaments.mjs';


/*let map1; // to hold map of users location
let centerMarker = L.marker([51.5, -0.09]);*/

function main() {
    document.addEventListener('DOMContentLoaded', () => {

        let userPos = document.getElementById('userPosition'); //  'Show My Position' button on the page
        userPos.addEventListener('click', showMap);

        fetchClubs1();//fetches json Chess Clubs Data
        fetchTournaments();//fetches json Chess Tournament Data
        let addClubButton = document.getElementById('addClub'); // 'Add Club' button on the page
        addClubButton.addEventListener('click', addClub);

        let addTournamentButton = document.getElementById('addTour'); // 'Add Club' button on the page
        addTournamentButton.addEventListener('click', addTournaments);
        navigator.geolocation.getCurrentPosition(showPosition, noGeo);

    });
}//end main


// this function is used to set and display users location on the map
function showMap() {
    let container = document.getElementById('map1');

    //this part refers to lefleat map 
    /*
    if (container != null) {
        container._leaflet_id = null;
    }
    // Lefleat code to set map on the page
     map1 = L.map('map1').setView([0, 0], 13);
     centerMarker = L.marker([51.5, -0.09]);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map1);
     centerMarker.addTo(map1);*/

    // to get users location and pan it to the map
    navigator.geolocation.getCurrentPosition(showPosition, noGeo);
}
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

function showPosition(position) {
    let lat = position.coords.latitude;// getting users position latitude
    let lon = position.coords.longitude;// getting users position longitude 
    initMap(lat, lon);

    //lefleat
    //map1.panTo([lat, lon]); // to reset the map based on users position
    //centerMarker.setLatLng([lat, lon])
}
function noGeo(e) {
    console.error(e);
}



main();