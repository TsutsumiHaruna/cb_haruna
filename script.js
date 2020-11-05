
$(".header-link").hover(
    function () {
        $(this).css({
            'color': 'gray',
        })
    },
    function () {
        $(this).css({
            'color': 'black',
        })
    }
);

$("#profile-link").on('click', function(){
    const profileArea = $("#profile-area").offset().top;
    $(window).scrollTop(profileArea);
});

$("#how-link").on('click', function(){
    const howArea = $("#how-area").offset().top;
    $(window).scrollTop(howArea);
});

$("#favorite-link").on('click', function(){
    const favoriteArea = $("#favorite-area").offset().top;
    $(window).scrollTop(favoriteArea);
});

$("#link-link").on('click', function(){
    const link = $("#link-area").offset().top;
    $(window).scrollTop(link);
});

$(".fab").hover(
    function () {
        $(this).css({
            'color': 'gray',
        })
    },
    function () {
        $(this).css({
            'color': 'white',
        })
    }
);

