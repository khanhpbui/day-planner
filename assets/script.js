var today = moment();
var divContainerEl = $('.container');
var currentTime = moment().format('H');
var dayPlan = [
    {
        time: 09,
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

$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

dayPlan.forEach((item, index) => {
    var timeblockrow = $('<div>').addClass('row');
    var saveBtnEl = $('<button>').addClass('saveBtn col-md-1');
    var hourEl = dayPlan[index].time;
    var hourDiv = $('<div>').addClass('hour time-block col-md-2');
    var timeEl = moment(hourEl, 'H').format('h A');
    var noteTextAreaEl = $('<textarea>').addClass('description notes col-md-9').attr('id', [index]);
    hourDiv.text(timeEl);
    saveBtnEl.html('<i class="fas fa-save"></i>');
    divContainerEl.append(timeblockrow);
    timeblockrow.append(hourDiv, noteTextAreaEl, saveBtnEl);
    if (hourEl < currentTime) {
        noteTextAreaEl.addClass('past')
    } else if (hourEl === currentTime) {
        noteTextAreaEl.addClass('present')
    } else {
        noteTextAreaEl.addClass('future')
    };
});



$('.saveBtn').click(saveNotes);
function init() {

};

function saveNotes() {
    
        var noteVal = $('#0').val();
     //need to target by id.
    //     localStorage.setItem('notes', JSON.stringify(noteVal))
    console.log(noteVal)
};

init();