
// This class  is used to create instances that will store data fetched from clubs.json
class ChessClub1 {
    constructor(name, address, lat, lon, contact, desc, web,) {
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lon = lon;
        this.contact = contact;
        this.desc = desc;
        this.web = web;
        this.dist;
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
    setLat(lat) {
        this.lat = lat;
    }
    getLat() {
        return this.lat;
    }
    setLon(lon) {
        this.lon = lon;
    }
    getLon() {
        return this.lon;
    }

    setContact(contact) {
        this.contact = contact;
    }
    getContact() {
        return this.contact;
    }
    setDesc(desc) {
        this.desc = desc;
    }
    getDesc() {
        return this.desc;
    }

    setWeb(web) {
        this.web = web;
    }
    getWeb() {
        return this.web;
    }
    // This function uses Haversain Formula to calculate distance between 
    // user and Chess Club
    distance(lat1, lon1, lat2, lon2) {
        const r = 6378.137;
        lat1 *= Math.PI / 180;
        lat2 *= Math.PI / 180;
        lon1 *= Math.PI / 180;
        lon2 *= Math.PI / 180;
        let h = Math.pow(Math.sin((lat2 - lat1) / 2), 2) + (Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2));
        return 2 * r * Math.asin(Math.sqrt(h)) * 0.62137119;
    }

    setDistance() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude; //users latitude
            let lon = position.coords.longitude;//users longitude
            this.dist = this.distance(lat, lon, this.getLat(), this.getLon()).toFixed(2);
        });

    }

    getDistance() {
        return this.dist;
    }

}
export {
    ChessClub1
};