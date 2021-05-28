
import { uploadDom } from "./buttonUploadDom.mjs";

// this function sorts tournament list by time difference between current date 
// and date of the tournament and displays in the box sorted list 
// from top down
function chessTourSortByDate(chessTournaments) {
    for (let tour of chessTournaments) {
        let sDate = new Date(tour.startDate);
        tour.setStartDate(sDate);
        let eDate = new Date(tour.endDate);
        tour.setEndDate(eDate);
        tour.setDistance();
        tour.setTimeDist();
    }
    // for the button 'Show Tournaments By Date'
    let showList = document.getElementById('showTournamentList');
    showList.addEventListener('click', () => {
        document.getElementById('map').innerHTML = '';
        let sortedByDate = chessTournaments.sort((a, b) => (a.getTimeDist() > b.getTimeDist()) ? 1 : -1);
        chessTournaments = sortedByDate;
        uploadDom(chessTournaments);
    })
}
export {
    chessTourSortByDate
};