

// This function creates html form elements and adds in on the page
// used to capture users input about tournaments
// to be added to the original list of tournaments
function addTournaments() {
    let map = document.getElementById('map');
    map.innerHTML = '';
    let div = document.createElement('div');
    div.id = "newClubForm";
    let form = document.createElement('form');
    form.id = 'tourForm';
    let name = document.createElement('input');
    name.type = "text ";
    name.name = " Name: ";
    name.id = 'name';
    name.placeholder = 'Tour Name:';
    name.classList.add("input1");

    let address = document.createElement('input');
    address.type = "text ";
    address.name = " Address: ";
    address.id = 'address';
    address.placeholder = 'Tour Address:';
    address.classList.add("input1");

    let lat = document.createElement('input');
    lat.type = "text ";
    lat.name = " Latitude: ";
    lat.id = 'lat';
    lat.placeholder = 'Tour Latitude:'
    lat.classList.add("input1");

    let lon = document.createElement('input');
    lon.textContent;
    lon.name = "Longitude";
    lon.id = 'lon';
    lon.placeholder = 'Tour Longitude:'
    lon.classList.add("input1");

    let startDate = document.createElement('input');
    startDate.type = "text ";
    startDate.name = " startDate: ";
    startDate.id = 'startDate';
    startDate.placeholder = 'Start Date(yyyy,mm,dd):'
    startDate.classList.add("input1");

    let endDate = document.createElement('input');
    endDate.type = "text ";
    endDate.name = " endDate: ";
    endDate.id = 'endDate';
    endDate.placeholder = 'End Date(yyyy,mm,dd):'
    endDate.classList.add("input1");

    let prize = document.createElement('input');
    prize.type = "text ";
    prize.name = " prizeName: ";
    prize.id = 'prize';
    prize.placeholder = 'First Prize:'
    prize.classList.add("input1");

    let fee = document.createElement('input');
    fee.type = "text ";
    fee.name = " fee: ";
    fee.id = 'fee';
    fee.placeholder = 'Entry Fee:'
    fee.classList.add("input1");

    let web = document.createElement('input');
    web.type = "text ";
    web.name = " Web: ";
    web.id = 'web';
    web.placeholder = 'Web:'
    web.classList.add("input1");

    let onSubmit = document.createElement('button');
    onSubmit.id = "Submit";
    onSubmit.textContent = 'Submit';
    let formEl = [name, address, lat, lon, startDate, endDate, prize, fee, web, onSubmit];
    for (let el of formEl) {
        form.appendChild(el);
    }
    div.appendChild(form);
    map.append(div);
    onSubmit.addEventListener('click', (evnt) => {

        let existingTournaments = JSON.parse(localStorage.getItem("allTournaments"));
        if (existingTournaments == null) existingTournaments = [];
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let lat = document.getElementById("lat").value;
        let lon = document.getElementById("lon").value;
        let startDate = document.getElementById("startDate").value;
        let endDate = document.getElementById("endDate").value;
        let prize = document.getElementById("prize").value;
        let fee = document.getElementById("fee").value;
        let web = document.getElementById("web").value;

        let tour = {
            "name": name,
            "address": address,
            "lat": lat,
            "lon": lon,
            "startDate": startDate,
            "endDate": endDate,
            "prize": prize,
            "fee": fee,
            "web": web

        };
        localStorage.setItem("tour", JSON.stringify(tour));
        // Save allEntries back to local storage
        existingTournaments.push(tour);
        localStorage.setItem("allTournaments", JSON.stringify(existingTournaments));

    })



};


export {
    addTournaments
}