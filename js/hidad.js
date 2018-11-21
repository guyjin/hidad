$(function(){
    assignResults();
});

var dads = [
    {
        name: "Tom",
        born:"12/12/1940",
        died:"05/28/2007",
        age:"",
        elapsed:"",
        isMale: true
    },
    {
        name:"Jean",
        born:"04/24/1945",
        died:"10/12/2000",
        age:"",
        elapsed:"",
        isMale: true
    },
    {
        name:"Ernie",
        born:"03/01/1924",
        died:"07/08/1996",
        age:"",
        elapsed:"",
        isMale: true
    }
];

var others = [
    {
        name: "Laurine",
        born:"10/5/1929",
        died:"12/21/2015",
        age:"",
        elapsed:"",
        isMale: false
    },
    {
        name: "Kenny",
        born:"04/27/1948",
        died:"11/6/2015",
        age:"",
        elapsed:"",
        isMale: true
    },
    {
        name: "DeeAnne",
        born:"03/07/1953",
        died:"10/09/2008",
        age:"",
        elapsed:"",
        isMale: false
    },
    {
        name: "Michael",
        born:"05/05/1971",
        died:"10/08/1995",
        age:"",
        elapsed:"",
        isMale: true
    }
];

function createDateObject(string) {
    return Date.parse(string);
}

function timeCalcs() {
    if($('body').hasClass('others')){
        others.forEach(function(other) {
            var born = moment(createDateObject(other.born));
            var died = moment(createDateObject(other.died));
            other.age = died.diff(born, 'years');
            other.elapsed = died.toNow(true);
            other.born = moment(createDateObject(other.born)).format('MMMM Do, YYYY');
            other.died = moment(createDateObject(other.died)).format('MMMM Do, YYYY');
            renderTemplate(other);
        });

    } else if($('body').hasClass('dads')){
        dads.forEach(function(dad) {
            var born = moment(createDateObject(dad.born));
            var died = moment(createDateObject(dad.died));
            dad.age = died.diff(born, 'years');
            dad.elapsed = died.toNow(true);
            dad.born = moment(createDateObject(dad.born)).format('MMMM Do, YYYY');
            dad.died = moment(createDateObject(dad.died)).format('MMMM Do, YYYY');
            renderTemplate(dad);
        });
    }


}

function assignResults() {
    timeCalcs();

    // $('#tomage').html(dads[0].age);
    // $('#tomelapsed').html(dads[0].elapsed);
    // $('#jeanage').html(dads[1].age);
    // $('#jeanelapsed').html(dads[1].elapsed);
    // $('#laurineage').html(others[0].age);
    // $('#laurineelapsed').html(others[0].elapsed);
}

function renderTemplate(person) {
    var template = '<div class="person"><div class="bio"><h3>{{name}}</h3><p>Born {{born}}, died {{died}}.</p><p>{{#isMale}}He{{/isMale}}{{^isMale}}She{{/isMale}} was <span class="age">{{age}}</span> years old.</p></div><div class="elapsed">It\'s been about <span class="elapsed">{{elapsed}}</span> since {{^isMale}}s{{/isMale}}he died.</div></div>'
    var target = $('.people');
    $(target).append(Mustache.render(template, person));
}
