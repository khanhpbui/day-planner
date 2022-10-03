var today = moment();
var divContainerEl = $('.container');
var currentTime = moment().format('H');
var storedNotes = [];

var dayPlan = [
    {
        time: 09        
    },
    {
        time: 10        
    },
    {
        time: 11        
    },
    {
        time: 12        
    },
    {
        time: 13        
    },
    {
        time: 14        
    },
    {
        time: 15        
    },
    {
        time: 16        
    },
    {
        time: 17        
    }
];

$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

dayPlan.forEach((item, index) => {
    var timeblockrow = $('<div>').addClass('row');
    var saveBtnEl = $('<button>').addClass('saveBtn col-md-1').attr('id', 'btn-'+[index]);
    var hourEl = dayPlan[index].time;
    var hourDiv = $('<div>').addClass('hour time-block col-md-2');
    var timeEl = moment(hourEl, 'H').format('h A');
    var noteTextAreaEl = $('<textarea>').addClass('description notes col-md-9').attr('id', 'ta-'+[index]);
    storedNotes.push('');
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
    var localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes !== null) {
        storedNotes = localNotes;
        storedNotes.forEach((item, index) => {           
            $('#ta-'+[index]).append(storedNotes[index]);
        });     
    };
};

function saveNotes() {
    var noteIndex = this.id[this.id.length -1];
    var noteVal = $('#ta-'+ noteIndex).val();
    storedNotes[noteIndex] = noteVal;
    localStorage.setItem('notes', JSON.stringify(storedNotes));
};

init();