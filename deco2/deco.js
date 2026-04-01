$(function() {
  $(".draggable").draggable({
    containment: false, // allows dragging outside the container
    scroll: false   // prevents weird page scrolling while dragging
  });

  $(".draggable").mousedown(function() {
    $(".draggable").css("z-index", 1);
    $(this).css("z-index", 10);
  });
});


items.forEach(el => {
  el.style.opacity = hidden ? "0" : "1";
});
