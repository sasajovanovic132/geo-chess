
import {
    loadClubDom
} from './loadClubDOM.mjs'


function mainChessClubs(chessClubs) {


    let showList = document.getElementById('showClubList');
    showList.addEventListener('click', () => {
        document.getElementById('map').innerHTML = '';
        for (let club of chessClubs) {
            club.setDistance();
        }
        let sortedByDistance = chessClubs.sort((a, b) => (Number(a.getDistance()) > Number(b.getDistance())) ? 1 : -1);
        chessClubs = sortedByDistance;
        for (let i = 0; i < 10; i++) {
            loadClubDom(chessClubs, i)
        }
        let nextChess = document.createElement('button');
        nextChess.id = 'nextChess';
        nextChess.append(document.createElement('button'));
        nextChess.textContent = 'next'
        document.getElementById('map').appendChild(nextChess);
        nextChess.addEventListener('click', () => {
            document.getElementById('map').innerHTML = '';
            for (let i = 10; i < chessClubs.length; i++) {
                loadClubDom(chessClubs, i)
            }

        })
    })
    return chessClubs;

} export {
    mainChessClubs
};