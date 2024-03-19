// function to toggle the side nav bar
const toggleSideNav = () => {
  $('#btn-toggle-hidden-navBar').click(function () {
    $('aside').toggle();
  });
};

// function to auto hide the side bar
const autoHideSideBar = () => {
  $(window).resize(function () {
    if ($(this).width() > 639) $('aside').hide();
  });
};

export { toggleSideNav, autoHideSideBar };
