$(document).ready(function() {
    $(".dropbtn").click(function() {
        $(".dropdown-content").toggleClass("show");
    });

    $("#datepicker").datepicker({
        onSelect: function() {
            $(".dropdown-content").removeClass("show");
        }
    });

    $(window).click(function(event) {
        if (!event.target.matches('.dropbtn')) {
            if ($(".dropdown-content").hasClass("show")) {
                $(".dropdown-content").removeClass("show");
            }
        }
    });
});
