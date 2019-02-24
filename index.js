// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
  for (var i=0; i<h; i++) {
    $("#pixel_canvas").append("<tr class=\"rand\"></tr>");
  }
  for (var j=0; j<w; j++) {
    $(".rand").append("<td class=\"square\"></td>");
  }
}

$("#buttonSubmit").on("click", function (){
    $(".square").remove();
    $(".rand").remove();
    var height = $("#inputHeight").val();
    var weight = $("#inputWeight").val();
    makeGrid(height, weight);
});

$("table").on("click", "tr", function () {
  $("tr").on("click", "td", function() {
    var culoare = $("#inputCuloare").val();
    $(this).css("background-color", culoare);
  })
});
