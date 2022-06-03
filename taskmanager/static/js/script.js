document.addEventListener('DOMContentLoaded', function () {
    // sidenive initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);


    // datepicker initialization
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {
            done: "Select"
        }
    });
    // select initialization
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});