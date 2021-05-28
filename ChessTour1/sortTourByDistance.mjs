import { uploadDom } from "./buttonUploadDom.mjs";

// This function sorts tournaments by distance and displays in the box sorted list 
//from top down
function chessTourSortByDistance(chessTournaments) {
    for (let tour of chessTournaments) {
        tour.setDistance();
    }
    // For the button 'Show Tournament By Distance'
    let showList = document.getElementById('SortedByDistanceList');
    showList.addEventListener('click', () => {
        document.getElementById('map').innerHTML = '';
        let sortedByDistance = chessTournaments.sort((a, b) => (Number(a.getDistance()) > Number(b.getDistance())) ? 1 : -1);
        chessTournaments = sortedByDistance;
        uploadDom(chessTournaments);
    })
}
export {
    chessTourSortByDistance
};