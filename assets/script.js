// Date and time for page here
let today = dayjs();
$("#currentDay").text(today.format("dddd DD MMMM YYYY"));
let currentHour = parseInt(today.format("H"));

// Timeblock hours text array
let timeBlocks = [
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
];

let containerEl = $(".container");

// Creates a new Bootstrap-powered HTML element for each array element
timeBlocks.forEach(function (hour) {
  let timeblock = $("<div>");
  timeblock.addClass("row");
  containerEl.append(timeblock);
// Timeblock hour text
  let hourSlot = $("<div>");
  hourSlot.addClass("col-1 hour");
  hourSlot.attr("id", "hour-" + hour);
  timeblock.append(hourSlot);
// Timeblock text area
  let hourText = $('<textarea>');
  hourText.addClass("col-10 description");
  hourText.attr("name", "planner-text");
  hourText.attr("id", "text-" + hour);
  timeblock.append(hourText);
// Timeblock save button
  let saveButton = $('<i class="fas fa-save"></i>')
  let saveColumn = $('<button>');
  saveColumn.addClass("col-1 saveBtn");
  saveColumn.on("click", function () {
    let key = $(this).siblings(".hour").attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(key,text);
  });
  saveColumn.append(saveButton); 
  timeblock.append(saveColumn);
});

 for(let i = 0; i < timeBlocks.length; i++) {
  // adds times to timeblocks
  let block = $(".hour");
  block[i].innerText = `${timeBlocks[i]}:00`;
  // change the colours according to time of day
  let hour = currentHour;
   let blockHour = timeBlocks[i];
     if (hour == blockHour) {
      $($("textarea")[i]).addClass("present");
     } else if (hour > blockHour) {
      $($("textarea")[i]).addClass("past");
     } else {
     $($("textarea")[i]).addClass("future");
     };
      // retrieve input text from local storage
     let key = "hour-" + timeBlocks[i];
     let text = localStorage.getItem(key);
     $("#text-" + timeBlocks[i]).val(text);
   };


