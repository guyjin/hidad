jQuery(window).load(function(){
    assignResults();
    $('.bg').addClass('loaded');
});

var people = [
    {
        name: "Tom",
        born:"12/12/1940",
        died:"05/28/2007",
        age:"",
        elapsed:"",
        isMale: true,
        isDad: true
    },
    {
        name:"Jean",
        born:"04/24/1945",
        died:"10/12/2000",
        age:"",
        elapsed:"",
        isMale: true,
        isDad: true
    },
    {
        name:"Ernie",
        born:"03/01/1924",
        died:"07/08/1996",
        age:"",
        elapsed:"",
        isMale: true,
        isDad: true
    },
    {
        name: "Laurine",
        born:"10/5/1929",
        died:"12/21/2015",
        age:"",
        elapsed:"",
        isMale: false,
        isDad: false
    },
    {
        name: "Kenny",
        born:"04/27/1948",
        died:"11/6/2015",
        age:"",
        elapsed:"",
        isMale: true,
        isDad: false
    },
    {
        name: "DeeAnn",
        born:"03/07/1953",
        died:"10/09/2008",
        age:"",
        elapsed:"",
        isMale: false,
        isDad: false
    },
    {
        name: "Michael",
        born:"05/05/1971",
        died:"10/08/1995",
        age:"",
        elapsed:"",
        isMale: true,
        isDad: false
    },
    {
        name: "Kathi",
        born:"09/28/1946",
        died:"06/06/2023",
        age:"",
        elapsed:"",
        isMale: false,
        isDad: false
    }
];


function createDateObject(string) {
    return Date.parse(string);
}

function timeCalcs() {

    people.forEach(function(person) {
        var born = moment(createDateObject(person.born));
        var died = moment(createDateObject(person.died));
        person.age = died.diff(born, 'years');
        person.elapsed = died.toNow(true);
        person.born = moment(createDateObject(person.born)).format('MMMM Do, YYYY');
        person.died = moment(createDateObject(person.died)).format('MMMM Do, YYYY');
        renderTemplate(person);
    });

    


}

function assignResults() {
    timeCalcs();

}

function renderTemplate(person) {
    var template = `<div class="person demo-card-square mdl-card mdl-shadow">

    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
        <p>Born {{born}}.<br> Died {{died}}.</br>
        {{#isMale}}He{{/isMale}}{{^isMale}}She{{/isMale}} was <span class="age">{{age}}</span> years old.</p>
        <p>It\'s been about <span class="elapsed">{{elapsed}}</span> since {{^isMale}}s{{/isMale}}he died.</p>        
    </div>
    `
    var target = $('.people');
    $(target).append(Mustache.render(template, person));
}
