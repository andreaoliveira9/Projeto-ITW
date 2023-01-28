function Favorites() {
    self = this

    // Drivers
    self.driversData = ko.observableArray([])
    self.loadDrivers = () => {
        let data = JSON.parse(localStorage.getItem("driverFavorites"))
        let temp = []
        if (data != null) {

            data.forEach(e => {
                $.ajax({
                    type: "GET",
                    url: "http://192.168.160.58/formula1/api/drivers/driver",
                    async: false,
                    data: {
                        id: e
                    },
                    dataType: "json",
                    contentType: 'application/json',
                    success: function(response) {
                        temp.push(response)
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
        } else {
            temp = []
        }

        return temp;
    };

    self.driversData(self.loadDrivers());

    // Teams
    self.teamsData = ko.observableArray([])
    self.loadTeams = () => {
        let data = JSON.parse(localStorage.getItem("teamFavorites"))
        let temp = []
        if (data != null) {

            data.forEach(e => {
                $.ajax({
                    type: "GET",
                    url: "http://192.168.160.58/formula1/api/constructors/constructor",
                    async: false,
                    data: {
                        id: e
                    },
                    dataType: "json",
                    contentType: 'application/json',
                    success: function(response) {
                        temp.push(response)
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
        } else {
            temp = []
        }

        return temp;
    };

    self.teamsData(self.loadTeams());

    // Races
    self.racesData = ko.observableArray([])
    self.loadRaces = () => {
        let data = JSON.parse(localStorage.getItem("raceFavorites"))
        let temp = []
        if (data != null) {

            data.forEach(e => {
                $.ajax({
                    type: "GET",
                    url: "http://192.168.160.58/formula1/api/races/race",
                    async: false,
                    data: {
                        id: e
                    },
                    dataType: "json",
                    contentType: 'application/json',
                    success: function(response) {
                        temp.push(response)
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
        } else {
            temp = []
        }

        return temp;
    };

    self.racesData(self.loadRaces());

    // Circuits
    self.circuitsData = ko.observableArray([])
    self.loadCircuits = () => {
        let data = JSON.parse(localStorage.getItem("circuitFavorites"))
        let temp = []
        if (data != null) {

            data.forEach(e => {
                $.ajax({
                    type: "GET",
                    url: "http://192.168.160.58/formula1/api/circuits/circuit",
                    async: false,
                    data: {
                        id: e
                    },
                    dataType: "json",
                    contentType: 'application/json',
                    success: function(response) {
                        temp.push(response)
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
        } else {
            temp = []
        }

        return temp;
    };

    self.circuitsData(self.loadCircuits());
}

const f = new Favorites
ko.applyBindings(f);