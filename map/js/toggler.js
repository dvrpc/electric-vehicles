const togglerPEV = (pevToggle, wpToggle) => {
  $(".distribution").show();
  $(".pev").show();
  $("#type_select").hide();
  $(".workplace").hide();
  $(".charge").hide();

  document.getElementById("type_select").selectedIndex = 0;
  document.getElementById("layout_select").selectedIndex =
    document.getElementById("pevTop").index;

  wpToggle.classList.remove("toggle-btn-active");
  pevToggle.classList.add("toggle-btn-active");
};

// WorkPlace
const togglerWP = (pevToggle, wpToggle) => {
  $(".workplace").show();
  $(".charge").show();
  $("#type_select").show();
  $(".distribution").hide();
  $(".pev").hide();

  document.getElementById("type_select").selectedIndex = 2;
  document.getElementById("layout_select").selectedIndex =
    document.getElementById("chargeTop").index;

  pevToggle.classList.remove("toggle-btn-active");
  wpToggle.classList.add("toggle-btn-active");
};

export { togglerPEV, togglerWP };
