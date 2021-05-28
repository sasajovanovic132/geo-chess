import { uploadDom } from "./buttonUploadDom.mjs";

// This function sorts tournaments by prize and displays in the box sorted list 
// from top down
function chessTourSortByPrize(chessTournaments) {
    let showList = document.getElementById('SortedByPrizeList');
    // For the button 'Show Distance By Prize'
    showList.addEventListener('click', () => {
        document.getElementById('map').innerHTML = '';
        let sortedByPrize = chessTournaments.sort((a, b) => (Number(a.getPrize()) < Number(b.getPrize())) ? 1 : -1);
        chessTournaments = sortedByPrize;
        uploadDom(chessTournaments);
    })
}
export {
    chessTourSortByPrize
};