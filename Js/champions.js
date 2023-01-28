var vm = function() {
    var self = this;
    self.baseUri = ko.observable('http://192.168.160.58/Formula1/api/Statistics/Champions');
    $.getJSON(self.baseUri(), function(data) {
        showLoading()
        console.log(data)
        for (var i = 0; i <= 71; i++) {
            var x = i + 1
            console.log(x)
            $('#nome' + x).append(data[i].Points)
            hideLoading()
        };

    });

    function showLoading() {
        $("#myModal").modal('show', {
            backdrop: 'static',
            keyboard: false
        });
    }

    function hideLoading() {
        $('#myModal').on('shown.bs.modal', function(e) {
            $("#myModal").modal('hide');
        })
    }
}

$(document).ready(function() {
    ko.applyBindings(new vm());

});