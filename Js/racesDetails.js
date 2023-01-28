// ViewModel KnockOut
var vm = function() {
    console.log('ViewModel initiated...');
    var self = this;
    self.baseUri = ko.observable('http://192.168.160.58/Formula1/api/Races/Race?id=');
    self.error = ko.observable('');
    self.passingMessage = ko.observable('');
    self.RaceId = ko.observable('');
    self.Circuit = ko.observable('');
    self.Name = ko.observable('');
    self.Year = ko.observable('');
    self.Date = ko.observable('');
    self.Time = ko.observable('');
    self.Url = ko.observableArray('');
    self.Round = ko.observable('');
    self.Results1 = ko.observable('');
    self.Results2 = ko.observable('');
    self.Results3 = ko.observable('');

    self.activate = function(id) {
        console.log('CALL: getRace...');
        var composedUri = self.baseUri() + id;
        ajaxHelper(composedUri, 'GET').done(function(data) {
            console.log(data);
            self.RaceId(data.RaceId);
            self.Circuit(data.Circuit);
            self.Name(data.Name);
            self.Year(data.Year);
            self.Date(data.Date);
            self.Time(data.Time);
            self.Url(data.Url);
            self.Round(data.Round);
            self.Results1(data.Results[0].DriverName);
            self.Results2(data.Results[1].DriverName);
            self.Results3(data.Results[2].DriverName);
            hideLoading();
        });
    };

    function ajaxHelper(uri, method, data) {
        self.error('');
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null,
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("AJAX Call[" + uri + "] Fail...");
                hideLoading();
                self.error(errorThrown);
            }
        });

    }

    function showLoading() {
        $('#myModal').modal('show', {
            backdrop: 'static',
            keyboard: false
        });
    }

    function hideLoading() {
        $('#myModal').on('shown.bs.modal', function(e) {
            $("#myModal").modal('hide');
        })
    }

    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    showLoading();
    var pg = getUrlParameter('id');
    console.log(pg);
    if (pg == undefined)
        self.activate(1);
    else {
        self.activate(pg);
    }
};

$(document).ready(function() {
    console.log("ready!");
    ko.applyBindings(new vm());
});