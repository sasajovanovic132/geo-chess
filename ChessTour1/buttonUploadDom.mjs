import {
    loadDom
} from './loadDOM.mjs'


// This function is displays 10 button elements
// each representing single Chess Tournament
function uploadDom(chessTournaments) {
    for (let i = 0; i < 10; i++) {
        loadDom(chessTournaments, i);
    }
    // 'next' button to displays list from 10-20
    let nextChess = document.createElement('button');
    nextChess.id = 'nextChess';
    nextChess.append(document.createElement('button'));
    nextChess.textContent = 'next'
    document.getElementById('map').appendChild(nextChess);
    nextChess.addEventListener('click', () => {
        document.getElementById('map').innerHTML = '';
        for (let i = 10; i < chessTournaments.length; i++) {
            loadDom(chessTournaments, i);
        }
    })// end nextChess.addEventListener
}

export {
    uploadDom
}