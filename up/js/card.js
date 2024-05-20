jQuery(document).ready(function () {
  $(".targetDiv").hide();
});

jQuery(function () {
  jQuery(".showSingle").click(function () {
    var targetId = $(this).attr("target");
    var targetDiv = $("#div" + targetId);
    var cardBox = $(
      ".card__boxes--box__content[data-target='" + targetId + "']"
    );

    // Hide other targetDivs and card boxes
    $(".targetDiv").not(targetDiv).hide(".cnt");
    $(".card__boxes--box__content").not(cardBox).removeClass("focus-box");

    // Toggle the targetDiv
    targetDiv.slideToggle();

    // Check screen width and hide/show .cnt accordingly
    if (window.innerWidth < 567) {
      $(".card__boxes").hide(".cnt");
    }

    // Add the "focus-box" class to the specific card__boxes--box__content element
    cardBox.addClass("focus-box");

    // Auto-scroll to the opened targetDiv
    $("html, body").animate(
      {
        scrollTop: targetDiv.offset().top - 300,
      },
      500
    ); // Adjust the duration as needed
  });
});

jQuery(function () {
  jQuery(".hideSingle").click(function () {
    var targetId = $(this).attr("target");
    var targetDiv = $("#div" + targetId);

    // Hide the targetDiv
    targetDiv.slideToggle();

    // Check screen width and hide/show .cnt accordingly
    if (window.innerWidth < 567) {
      $(".card__boxes").show(".cnt");
    }
  });
});
