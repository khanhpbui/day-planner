
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
var divContainerEl = $('.container');

var dayPlan = [
    {
        time: 9,
        notes: ''
    },
    {
        time: 10,
        notes: ''
    },
    {
        time: 11,
        notes: ''
    },
    {
        time: 12,
        notes: ''
    },
    {
        time: 13,
        notes: ''
    },
    {
        time: 14,
        notes: ''
    },
    {
        time: 15,
        notes: ''
    },
    {
        time: 16,
        notes: ''
    },
    {
        time: 17,
        notes: ''
    }
];


dayPlan.forEach((item, index) => {
    var hourEl = JSON.stringify(dayPlan[index].time);
    console.log(hourEl)
    var hourDiv = $('<div>').addClass('hour time-block col-md-2');
    var timeEl = moment(hourEl, 'H').format('h A');
    console.log(timeEl)
    hourDiv.text(timeEl);
    divContainerEl.append(hourDiv);

    var noteTextAreaEl = dayPlan[index].notes;
    var noteTextArea = $('<textarea>').addClass('description col-md-9');
    divContainerEl.append(noteTextArea);

    var saveBtnEl = $('<button>').addClass('saveBtn col-md-1');
    saveBtnEl.html('<i class="fas fa-save"></i>')
    divContainerEl.append(saveBtnEl);
});

function init() {

};
function saveNotes() {

};
//compare time and give it colors
