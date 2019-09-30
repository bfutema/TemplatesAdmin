(function ($) {
    "use strict";

    $('#btnToggleLeft').on('click', function () {
        OpenHideLeftNavBar($(this));
    });

    function OpenHideLeftNavBar(btn) {
        if ($(btn).hasClass('showLeftSideBar')) {
            $(btn).removeClass('showLeftSideBar').addClass('hideLeftSideBar');
            $(btn).removeClass('showTopNavBar').addClass('hideTopNavBar');
            $(btn).removeClass('showMainPage').addClass('hideMainPage');
            $('#LeftSideBar').css('width', '0px');
            $('#TopNavBar').css('margin-left', '0px');
            $('#MainPage').css('margin-left', '0px');
        }
        else {
            $(btn).removeClass('hideLeftSideBar').addClass('showLeftSideBar');
            $(btn).removeClass('hideTopNavBar').addClass('showTopNavBar');
            $(btn).removeClass('showMainPage').addClass('hideMainPage');
            $('#LeftSideBar').css('width', '250px');
            $('#TopNavBar').css('margin-left', '250px');
            $('#MainPage').css('margin-left', '250px');
        }
    };
})(jQuery);