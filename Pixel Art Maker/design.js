let height = $("#inputHeight").val();
let width = $("#inputWidth").val();
let color = $("#colorPicker").val();
const grid = $("#pixelCanvas");


$("#createGrid").click(function(event) {
  event.preventDefault();
  makeGrid(height, width);
});

function makeGrid(y, x) {
  $("tr").remove();
  
  for (let n = 1; n <= y; n++) {
    $("#pixelCanvas").append("<tr id = rows" + n + "></tr>");
    for (let m = 1; m <= x; m++) {
      $("#rows" + n).append("<td></td>");
  }
}

$("td").click(function addColor() {

    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}

$(document).mousedown(function() {
  mouseDown = true;
});

$(document).mouseup(function() {
  mouseDown = false;
});

grid.on("mouseover", "td", function() {
  if (mouseDown) {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  }
});

$("#clearGrid").click (function clearCanvas(event) {
    event.preventDefault();
    $("#pixelCanvas").empty();
});


$("#inputHeight").on("change", function() {
    let height, heightDisplay;
    height = $("#inputHeight").val()
    heightDisplay = $("#gridHeightDisplay");
    heightDisplay.text(height);
});

$("#inputWidth").on("change", function() {
    let width, widthDisplay;
    width = $("#inputWidth").val()
    widthDisplay = $("#gridWidthDisplay");
    widthDisplay.text(width);
});