
import {
    ChessTournament
} from './ChessTournament.mjs'

import {
    chessTourSortByDate
} from './sortTourByDate.mjs'

import {
    chessTourSortByPrize
} from './sortTourByPrize.mjs'

import {
    chessTourSortByDistance
} from './sortTourByDistance.mjs'



// This function fetches data from tournaments.json usinng Fetch() API
function fetchTournaments() {
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };

    fetch(' ./tournaments.json', options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid Response');
            }
            return response.json();
        })//end then(response)                                           
        .then((list) => {
            //let chessTournaments = [];
            let chessTournaments = list.map((val) => {
                return new ChessTournament(val.name, val.address, val.lat, val.lon, val.startDate, val.endDate, val.prize, val.fee, val.web)

            })
            // to get data from Local Storage 
            let existingTournaments = JSON.parse(localStorage.getItem("allTournaments"));

            // this code limits Local Storage to 3 elements. Every additionaly added element
            //will replace the first one that is added
            if (existingTournaments) {
                if (existingTournaments.length > 3) {
                    let limitList = [];
                    limitList.push(existingTournaments[existingTournaments.length - 1]);
                    limitList.push(existingTournaments[existingTournaments.length - 2]);
                    limitList.push(existingTournaments[existingTournaments.length - 3]);
                    existingTournaments = limitList;
                }

                for (let tour of existingTournaments) {
                    if (tour.name && tour.address && tour.lat && tour.lon && tour.startDate && tour.endDate && tour.prize && tour.fee && tour.web) {
                        let newChessTournament = new ChessTournament(tour.name, tour.address, Number(tour.lat), Number(tour.lon), tour.startDate, tour.endDate, tour.prize, tour.fee, tour.web);
                        chessTournaments.push(newChessTournament);
                    }
                }
            }

            return chessTournaments;
        })
        .then((chessTournaments) => {
            chessTourSortByPrize(chessTournaments);
            chessTourSortByDate(chessTournaments);
            chessTourSortByDistance(chessTournaments);
        })
        .catch((e) => {
            console.error(e.message);

        });
}//end fetchData()

export {
    fetchTournaments
};