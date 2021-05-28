

// This function creates html form elements and adds in on the page
// used to capture users input about clubs
// to be added to the original list of chess clubs
function addClub() {
    let map = document.getElementById('map');
    map.innerHTML = '';
    let div = document.createElement('div');
    div.id = "newClubForm";
    let form = document.createElement('form');
    let name = document.createElement('input');
    name.type = "text ";
    name.name = " Name: ";
    name.id = 'name';
    name.placeholder = 'Name:';
    name.classList.add("input");

    let address = document.createElement('input');
    address.type = "text ";
    address.name = " Address: ";
    address.id = 'address';
    address.placeholder = 'Address:';
    address.classList.add("input");

    let lat = document.createElement('input');
    lat.type = "text ";
    lat.name = " Latitude: ";
    lat.id = 'lat';
    lat.placeholder = 'Latitude:'
    lat.classList.add("input");

    let lon = document.createElement('input');
    lon.textContent;
    lon.name = "Longitude";
    lon.id = 'lon';
    lon.placeholder = 'Longitude:'
    lon.classList.add("input");

    let contact = document.createElement('input');
    contact.type = "text ";
    contact.name = " Contact: ";
    contact.id = 'contact';
    contact.placeholder = 'Contact Info:'
    contact.classList.add("input");

    let desc = document.createElement('input');
    desc.type = "text ";
    desc.name = " Description: ";
    desc.id = 'desc';
    desc.placeholder = 'Brief Description:'
    desc.classList.add("input");

    let web = document.createElement('input');
    web.type = "text ";
    web.name = " Web: ";
    web.id = 'web';
    web.placeholder = ' Web:'
    web.classList.add("input");

    let onSubmit = document.createElement('button');
    onSubmit.id = "Submit";
    onSubmit.textContent = 'Submit';
    let formEl = [name, address, lat, lon, contact, desc, web, onSubmit];
    for (let el of formEl) {
        form.appendChild(el);
    }
    div.appendChild(form);
    map.append(div);
    onSubmit.addEventListener('click', (evnt) => {

        let existingEntries = JSON.parse(localStorage.getItem("allClubs"));
        if (existingEntries == null) existingEntries = [];
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let lat = document.getElementById("lat").value;
        let lon = document.getElementById("lon").value;
        let contact = document.getElementById("contact").value;
        let desc = document.getElementById("desc").value;
        let web = document.getElementById("web").value;

        let entry = {
            "name": name,
            "address": address,
            "lat": lat,
            "lon": lon,
            "contact": contact,
            "desc": desc,
            "web": web
        };
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allClubs", JSON.stringify(existingEntries));

    })

};

export {
    addClub
}