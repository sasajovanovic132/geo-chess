
import {
    ChessClub1
} from './ChessClub1.mjs'

import {
    mainChessClubs
} from './ChessClubs.mjs'


// This function fetches data from clubs.json
function fetchClubs1() {
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };

    fetch(' ./clubs.json', options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid Response');
            }
            return response.json();
        })//end then(response)                                           


        // in first then method array of json is converted to array of objects
        // using map() and json array of data from Local Storage is retrived and converted to array of objects
        // and added to original array
        .then((list) => {
            let chessClubs = list.map((val) => {
                return new ChessClub1(val.name, val.address, Number(val.lat), Number(val.lon), val.contact, val.desc, val.web)
            })

            let existingEntries = JSON.parse(localStorage.getItem("allClubs"));

            // this codes limits Local Storage to 3 elements
            if (existingEntries) {
                if (existingEntries.length > 3) {
                    let limitList = [];
                    limitList.push(existingEntries[existingEntries.length - 1]);
                    limitList.push(existingEntries[existingEntries.length - 2]);
                    limitList.push(existingEntries[existingEntries.length - 3]);
                    existingEntries = limitList;
                }

                for (let club of existingEntries) {
                    if (club.name && club.address && club.lat && club.lon && club.contact && club.desc && club.web) {
                        let newChessClub = new ChessClub1(club.name, club.address, Number(club.lat), Number(club.lon), club.contact, club.desc, club.web);
                        chessClubs.push(newChessClub);
                    }
                }
            }
            for (let club of chessClubs) {
                club.setDistance();
            }
            let sortedByDistance = chessClubs.sort((a, b) => (Number(a.getDistance()) > Number(b.getDistance())) ? 1 : -1);
            chessClubs = sortedByDistance;

            return chessClubs;
        })
        .then((chessClubs) => {
            mainChessClubs(chessClubs);
        })


        .catch((e) => {
            console.error(e.message);

        });
}//end fetchData()

export {
    fetchClubs1
};