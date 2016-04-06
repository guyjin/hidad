$(function(){
    assignResults();
});

var dads = [
    {
        name: "Tom",
        born:"12/12/1940",
        died:"05/28/2007",
        age:"",
        elapsed:""
    },
    {
        name:"Jean",
        born:"04/24/1945",
        died:"10/12/2000",
        age:"",
        elapsed:""
    }
];

function createDateObject(string) {
    return Date.parse(string);
}

function timeCalcs() {
    dads.forEach(function(dad) {
        var born = moment(createDateObject(dad.born));
        var died = moment(createDateObject(dad.died));
        dad.age = died.diff(born, 'years');
        dad.elapsed = died.toNow(true);
    });    
}

function assignResults() {
    timeCalcs();
    $('#tomage').html(dads[0].age);
    $('#tomelapsed').html(dads[0].elapsed);
    $('#jeanage').html(dads[1].age);
    $('#jeanelapsed').html(dads[1].elapsed);
}
