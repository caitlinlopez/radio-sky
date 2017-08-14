var selectedDate;
var selectedTime;
var link;
$(function() {
    $("#date").datepicker({minDate: new Date(2017, 7, 1), dateFormat: "yyyy-mm-dd"})
    $("#date").datepicker("option", "datePick", "yyyy-mm-dd");
    $("#time").timepicker({'step': 60}).on('changeTime', function() {
      selectedDate = $("#date").val()
      selectedDate = selectedDate.split("/")
      selectedTime = $("#time").val()
      setLink()
      checkValidity()
    });
  });
  function checkValidity() {
    $.get(link + "-labeled.png")
      .done(function() {
          displaySelected()
      }).fail(function() {
        console.log("Not a valid date")
      })
  }
function displaySelected() {
  $("#archive").attr('src', link + "-unlabeled.png")
  $('#archive').mouseover(function() {
    $(this).attr('src', link + '-labeled.png')
  }).mouseout(function() {
    $(this).attr('src', link + '-unlabeled.png')
  })
}
function setLink() {
  link = 'http://www.tauceti.caltech.edu/ovro-lwa-sky/hourly-images-archive/'
  link += selectedDate[2]
  link += "-" + selectedDate[0]
  link += "-" + selectedDate[1] + "-"
  if(selectedTime.indexOf('am') > -1) {
    link += selectedTime.replace(/\D/g,'').replace(0, '').replace(0, '')
  }
  else {
    link += (Number(selectedTime.replace(/\D/g,'').replace(0, '').replace(0, '')) + 12)
  }
  link += ":00:00"
}
