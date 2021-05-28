
// This class  is used to create instances that will store data fetched from tournaments.json
class ChessTournament {
    constructor(name, address, lat, lon, startDate, endDate, prize, fee, web,) {
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lon = lon;
        this.startDate = startDate;
        this.endDate = endDate;
        this.prize = prize;
        this.fee = fee;
        this.web = web;
        this.dist;
        this.timeDist;
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

    setStartDate(startDate) {
        this.startDate = startDate;
    }
    getStartDate() {
        let formatted_date = `${this.startDate.getFullYear()} -  ${(this.startDate.getMonth() + 1)}  -  ${this.startDate.getDate()} `;
        return formatted_date;
    }


    setEndDate(endDate) {
        this.endDate = endDate;
    }

    getEndDate() {
        let formatted_date = `${this.endDate.getFullYear()} -  ${(this.endDate.getMonth() + 1)}  -  ${this.endDate.getDate()} `;
        return formatted_date;
    }


    setPrize(prize) {
        this.prize = prize;
    }

    getPrize() {
        return this.prize;
    }

    setFee(fee) {
        this.fee = fee;
    }

    getFee() {
        return this.fee;
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
        return 2 * r * Math.asin(Math.sqrt(h));
    }

    setDistance() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;//users latitude
            let lon = position.coords.longitude;//users longitude
            this.dist = Number(this.distance(lat, lon, this.getLat(), this.getLon()).toFixed(2));
        });

    }

    getDistance() {
        return this.dist;
    }

    // this code calculates time difference between the begining of the tournament
    //and current date
    setTimeDist() {
        let today = new Date();
        let tourDate = new Date(this.startDate);
        const diffTime = Math.abs(tourDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.timeDist = diffDays;
    }
    getTimeDist() {
        return this.timeDist;
    }



}


export {
    ChessTournament
};