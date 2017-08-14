/*DROPDOWN DESCRIPTIONS*/
var container = document.getElementById("container")

document.addEventListener("click", function(e) {
        var currentObject = e.srcElement
        $("p").each(function(e) {
          var desc = $("#" + this.getAttribute("id") + "-D")
            if (currentObject == this) {
              $("#" + this.getAttribute("id") + "-D").slideDown()
                  if(this.classList.contains("selected") !== true){setTimeout(toggleClassD, 50, desc)}
                  if(this.classList.contains("description") !== true){setTimeout(toggleClass, 50, this)}
            } else {
                $("#" + this.getAttribute("id") + "-D").slideUp()
                $("#" + this.getAttribute("id") + "-D").hide()
                if(this.classList.contains("description")) {
                  setTimeout(toggleClassD, 50, desc)
                }
                if(this.classList.contains("selected")) {
                  setTimeout(toggleClass, 50, this)
              }
            }
        })
    })
    function toggleClass(object, cls) {
      $("#" + object.getAttribute("id")).toggleClass(cls, 400)
    }
    function toggleClassD(object, cls) {
      $("#" + object.attr("id")).toggleClass(cls, 400)
    }

/*****/
// var d = new Date()
// var localTime = d.getTime()
// var localOffset = d.getTimezoneOffset() * 60000
// var utc = localTime + localOffset
// var offset = -7 //TODO: switch from pst to pdt
// var pasadena = utc + (3600000*offset)
// var pst = new Date(pasadena)
// var dt = pst.toLocaleString()
//
// console.log(dt)
//
// var year = pst.getFullYear()
// var month = pst.getMonth() + 1 //getMonth() returns 0 for january
// var day = pst.getDate()
// var time = pst.getHours()
//
// //function imageExists(image_url){
//
//     //var http = new XMLHttpRequest();
//
//     //http.open('HEAD', image_url, false);
//     //http.send();
//
//     //return http.status != 404;
//
//     //if()
//     //console.log(http)
// //}
//
// //imageExists()
//
// function start(){
//   if(month < 10){
//     month = "0" + month
//   }
//
//   if(day < 10){
//     day = "0" + day
//   }
//
//   if(time < 10){
//     time = "0" + time
//   }
//
//   var sky = document.getElementById('sky').src = "http://www.tauceti.caltech.edu/ovro-lwa-sky/hourly-images-archive/" + year + "-" + month + "-" + day + "-" + time + ":00:00-unlabeled.png"
// }
//
// start()
//
// function unlabeled(my_image){
//    my_image.src = document.getElementById('sky').src = "http://www.tauceti.caltech.edu/ovro-lwa-sky/hourly-images-archive/" + year + "-" + month + "-" + day + "-" + time + ":00:00-unlabeled.png"
// }
//
// function labeled(my_image){
//    my_image.src = document.getElementById('sky').src = "http://www.tauceti.caltech.edu/ovro-lwa-sky/hourly-images-archive/" + year + "-" + month + "-" + day + "-" + time + ":00:00-labeled.png"
// }
//
function help(){
  document.getElementById('text').style.opacity = 1
}

function nohelp(){
  document.getElementById('text').style.opacity = 0
}

document.getElementById("help").addEventListener("mouseover", help);
document.getElementById("help").addEventListener("mouseout", nohelp);

// console.log(year)
//
var date = new Date();
    var link;
    function setLink() {
      link = 'http://www.tauceti.caltech.edu/ovro-lwa-sky/hourly-images-archive/'
      link += date.getFullYear();
      if((date.getMonth() + 1) > 9) {
      link += '-' + (date.getMonth() + 1);
      }
      else {
      link += '-0' + (date.getMonth() + 1);
      }
      if(date.getDate() > 9) {
      link += '-' + date.getDate();
      }
      else {
      link += '-0' + date.getDate();
      }
      link += '-' + date.getHours() + ':00:00'
    }
  function checkValidity() {
    $.get(link + "-labeled.png")
      .done(function() {
        $("#sky").attr('src', link + "-unlabeled.png")
        $('#sky').mouseover(function() {
          $(this).attr('src', link + '-labeled.png')
        }).mouseout(function() {
          $(this).attr('src', link + '-unlabeled.png')
        })
      }).fail(function() {
          date.setHours(date.getHours() - 1)
          setLink()
          checkValidity()
      })
  }
setLink()
checkValidity()
