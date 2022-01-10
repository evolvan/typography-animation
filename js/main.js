{
    setTimeout(() => document.body.classList.add('render'), 60);

   class Blob {
        constructor(el, options) {
            this.DOM = {};
            this.DOM.el = el;
            this.options = {};
            Object.assign(this.options, options);
        }

    };

    window.Blob = Blob;

    const DOM = {};

    DOM.content = document.querySelector('.content--reveal');
    DOM.contentInner = Array.from(DOM.content.querySelectorAll('.content__inner'), (el) => {
        charming(el);
        return el;
    });
    DOM.ctrlBack = DOM.content.querySelector('.content__close');
    DOM.links = Array.from(document.querySelectorAll('.menu > .menu__item'));
    DOM.innerlinks = Array.from(document.querySelectorAll('.menu > .inner-pages-menu-text'));

    DOM.links.forEach((link, pos) => {

        link.style.pointerEvents = 'none';
        charming(link);

        anime({
            targets: link.querySelectorAll('span'),
            duration: 800,
            delay: (t, i) => anime.random(0, 600) + 1500,
            easing: 'easeInOutQuad',
            opacity: [0, 1],
            complete: () => {
                link.style.pointerEvents = 'auto';

                link.classList.add('menu__item--showDeco');
            }
        });

    });

    DOM.innerlinks.forEach((ilink, pos) => {

        ilink.style.pointerEvents = 'none';
        charming(ilink);

        anime({
            targets: ilink.querySelectorAll('span'),
            duration: 800,
            delay: (t, i) => anime.random(0, 600) + 500,
            easing: 'easeInOutQuad',
            opacity: [0, 1],
            complete: () => {
                ilink.style.pointerEvents = 'auto';
            }
        });

    });

};

$(document).ready(function () {

    if($(window).width() < 480 ){
        $('#unicode_svg_for_desktop').hide();
        $('#unicode_svg_for_mobile').show();
    } else {
        $('#unicode_svg_for_desktop').show();
        $('#unicode_svg_for_mobile').hide();
    }

    $(window).resize(function () {
        windowsize = $(window).width();
        if (windowsize < 480) {
            $('#unicode_svg_for_desktop').hide();
            $('#unicode_svg_for_mobile').show();
        } else {
            $('#unicode_svg_for_desktop').show();
            $('#unicode_svg_for_mobile').hide();
        }
    });

    // -- Loads all the elements with some delay
    setTimeout(() => {
        $('.code_beautifier_svg').show(1000);
    }, 300);
    setTimeout(() => {
        $('.unicode_font_svg').show(1000);
    }, 600);
    setTimeout(() => {
        $('.http_tool_svg').show(1000);
    }, 900);
    setTimeout(() => {
        $('.immage_processing_svg').show(1000);
    }, 1200);

    // Call to functions to start the animations
    codeBeautfiersMouseOut();
    unicodeFontsMouseOut();
    httpToolsMouseOut();
    imageProcerssingMouseOut();

    // below are the click functions. These handles the opening and closing of the svg's with animation effects
    $('.code_beautfiers_href').click(function () {

        // -- remove the previous animations
        anime.remove(".code_beautifier_svg");

        anime({
            targets: '.code_beautifier_svg',
            scale: 5.2,
            easing: 'easeOutElastic',
            elasticity: 200,
            duration: 2000,
            delay: 200
        });

        anime({
            targets: '.go-prev-code-beautifier',
            opacity: 1,
            delay: 200,
            duration: 1000,
        });

        hideUnicodeFonts();
        hideHttpTools();
        hideImageProcessing();

        setTimeout(() => {
            $('.code_beautfiers_menu').show(100);
            if($(window).width() < 768 ){
                $('.code_beautfiers_menu .go-prev-code-beautifier').show(100);
            } else {
                $('.content .go-prev-code-beautifier.desktop').show(100);
            }
        }, 1000);

        hideMainMenu();

    });


    $('.go-prev-code-beautifier').click(function () {

        $('.code_beautfiers_menu').hide();
        $('.go-prev-code-beautifier').hide();

        anime({
            targets: '.go-prev-code-beautifier',
            opacity: 0,
            delay: 200,
            duration: 1000,
        });

        showMainMenu();

        anime({
            targets: '.code_beautifier_svg',
            scale: 1,
            translateY: 0,
            translateX: 0,
            easing: 'linear',
            opacity: 0,
            duration: 1100,
            complete: () => {
                anime({
                    targets: '.code_beautifier_svg',
                    scale: 1,
                    opacity: 1,
                    // duration: 500,
                    easing: 'linear',
                    complete: () => {
                        codeBeautfiersMouseOut();
                    }
                });
            }
            // scale: {
            //     value: 1,
            //     easing: 'easeOutElastic',
            //     elasticity: 5,
            //     duration: 1800,
            // }
        });

        showHttpTools();
        showUnicodeFonts();
        showImageProcessing();

    });



    $('.unicode_href').click(function () {

        // -- remove the previous animations
        anime.remove(".unicode_font_svg");

        anime({
            targets: '.unicode_font_svg',
            scale: 6.2,
            translateY: -270,
            translateX: -500,
            easing: 'easeOutElastic',
            elasticity: 5,
            duration: 2000,
            delay: 400
        });


        anime({
            targets: '.go-prev-unicode-fonts',
            opacity: 1,
            delay: 200,
            duration: 1000,
        });

        hideCodeBeautifier();
        hideHttpTools();
        hideImageProcessing();

        setTimeout(() => {
            $('.unicode_fonts_menu').show(100);
            if($(window).width() < 768 ){
                $('.unicode_fonts_menu .go-prev-unicode-fonts').show(100);
            } else {
                $('.content .go-prev-unicode-fonts.desktop').show(100);
            }
        }, 1000);

        hideMainMenu();

    });

    $('.go-prev-unicode-fonts').click(function () {

        $('.unicode_fonts_menu').hide();
        $('.go-prev-unicode-fonts').hide();

        anime({
            targets: '.go-prev-unicode-fonts',
            opacity: 0,
            delay: 200,
            duration: 1000,
        });

        showMainMenu();

        anime({
            targets: '.unicode_font_svg',
            scale: 1,
            translateY: 0,
            translateX: 0,
            easing: 'linear',
            duration: 1300,
            opacity: 0,
            complete: () => {
                anime({
                    targets: '.unicode_font_svg',
                    scale: 1,
                    opacity: 1,
                    // duration: 500,
                    easing: 'linear',
                    complete: () => {
                        unicodeFontsMouseOut();
                    }
                });
            }
            // scale: {
            //     value: 1,
            //     easing: 'easeOutElastic',
            //     elasticity: 5,
            //     duration: 1800,
            // }
        });

        showCodeBeautifier();
        showHttpTools();
        showImageProcessing();

    });


    $('.http_tool_href').click(function () {

        // -- remove the previous animations
        anime.remove(".http_tool_svg");

        anime({
            targets: '.http_tool_svg',
            scale: 4.5,
            translateY: -290,
            translateX: -1120,
            easing: 'easeOutElastic',
            elasticity: 5,
            duration: 2000,
            delay: 400
        });

        hideCodeBeautifier();
        hideUnicodeFonts();
        hideImageProcessing();

        setTimeout(() => {
            $('.http_tools_menu').show(100);
            if($(window).width() < 768 ){
                $('.http_tools_menu .go-prev-http-tools').show(100);
            } else {
                $('.content .go-prev-http-tools.desktop').show(100);
            }
        }, 1000);

        anime({
            targets: '.go-prev-http-tools',
            opacity: 1,
            delay: 200,
            duration: 1000,
        });

        hideMainMenu();

    });

    $('.go-prev-http-tools').click(function () {

        $('.http_tools_menu').hide();
        $('.go-prev-http-tools').hide();

        anime({
            targets: '.go-prev-http-tools',
            opacity: 0,
            delay: 200,
            duration: 1000,
        });

        showMainMenu();

        anime({
            targets: '.http_tool_svg',
            scale: {
                value: 3.5
            },
            translateY: {
                value: -230
            },
            translateX: {
                value: -1000
            },
            scale: {
                value: 3
            },
            translateY: {
                value: -180
            },
            translateX: {
                value: -900
            },
            scale: {
                value: 2
            },
            translateY: {
                value: -100
            },
            translateX: {
                value: -500
            },
            scale: {
                value: 1.2
            },
            translateY: {
                value: -50
            },
            translateX: {
                value: -300
            },
            opacity: {
                value: 0
            },
            easing: 'linear',
            // elasticity: 5,
            duration: 1300,
            // delay: 400
            complete: () => {
                anime({
                    targets: '.http_tool_svg',
                    scale: 1,
                    opacity: 1,
                    easing: 'linear',
                    complete: () => {
                        httpToolsMouseOut();
                    }
                });
            }
            // scale: {
            //     value: 1,
            //     easing: 'easeOutElastic',
            //     elasticity: 5,
            //     duration: 1800,
            // }
        });

        showCodeBeautifier();
        showUnicodeFonts();
        showImageProcessing();

    });

    $('.image_processing_href').click(function () {

        // -- remove the previous animations
        anime.remove(".immage_processing_svg");

        anime({
            targets: '.immage_processing_svg',
            scale: 8,
            translateY: -640,
            translateX: -150,
            easing: 'easeOutElastic',
            elasticity: 0,
            duration: 2000,
            delay: 400
        });

        hideCodeBeautifier();
        hideUnicodeFonts();
        hideHttpTools();

        setTimeout(() => {
            $('.image_processing_menu').show(100);
            if($(window).width() < 768 ){
                $('.image_processing_menu .go-prev-image-processing').show(100);
            } else {
                $('.content .go-prev-image-processing.desktop').show(100);
            }
        }, 1000);

        anime({
            targets: '.go-prev-image-processing',
            opacity: 1,
            delay: 200,
            duration: 1000,
        });

        hideMainMenu();

    });

    $('.go-prev-image-processing').click(function () {

        $('.image_processing_menu').hide();
        $('.go-prev-image-processing').hide();

        anime({
            targets: '.go-prev-image-processing',
            opacity: 0,
            delay: 200,
            duration: 1000,
        });

        showMainMenu();

        anime({
            targets: '.immage_processing_svg',
            scale: {
                value: 4
            },
            translateY: {
                value: -540
            },
            translateX: {
                value: -100
            },
            scale: {
                value: 2
            },
            translateY: {
                value: -400
            },
            translateX: {
                value: -50
            },
            scale: {
                value: 1.9
            },
            translateY: {
                value: -300,
            },
            opacity: {
                value: 0
            },
            easing: 'linear',
            duration: 1300,
            complete: () => {
                anime({
                    targets: '.immage_processing_svg',
                    scale: 1,
                    opacity: 1,
                    duration: 500,
                    easing: 'linear',
                    complete: () => {
                        imageProcerssingMouseOut();
                    }
                });
            }
            // scale: {
            //     value: 1,
            //     easing: 'easeOutElastic',
            //     elasticity: 5,
            //     duration: 1800,
            // }
        });

        showCodeBeautifier();
        showUnicodeFonts();
        showHttpTools();

    });

});


// -- Code beautifier animattion functions
function codeBeautfiersMouseOver() {
    return anime({
        targets: '.code_beautifier_svg',
        scale: 1.2,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 1600,
    });
}
function codeBeautfiersMouseOut() {
    anime.remove(".code_beautifier_svg");
    anime({
        targets: '.code_beautifier_svg',
        translateX: 18,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 2000
    });
}


// -- Unicode fonts animation functions
function unicodeFontsMouseOver() {
    anime({
        targets: '.unicode_font_svg',
        scale: 1.1,
        translateY: -50,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 2000,
    });
}
function unicodeFontsMouseOut() {
    anime.remove(".unicode_font_svg");
    return anime({
        targets: '.unicode_font_svg',
        translateX: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 1600,
    });
}


// -- HTTP tools animation functions
function httpToolsMouseOver() {
    anime({
        targets: '.http_tool_svg',
        // translateX: -90,
        scale: 1.05,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 2000,
    });
}
function httpToolsMouseOut() {
    anime.remove(".http_tool_svg");
    anime({
        targets: '.http_tool_svg',
        translateX: 20,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 2200,
    });
}


// -- Image procressing tool animation functions
function imageProcerssingMouseOver() {
    anime({
        targets: '.immage_processing_svg',
        scale: 1.1,
        translateY: -100,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
    });
}
function imageProcerssingMouseOut() {
    anime({
        targets: '.immage_processing_svg',
        translateX: 12,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 1200,
    });
}

function hideMainMenu() {
    const DOM = {};
    DOM.links = Array.from(document.querySelectorAll('.menu > .menu__item'));

    anime({
        targets: DOM.links.map((link) => link.querySelectorAll('span')),
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 0,
        begin: () => DOM.links.forEach(link => {
            link.style.pointerEvents = 'none';
            link.classList.remove('menu__item--showDeco');
        })
    });

    $('.menu.main__menu').hide();
}

function showMainMenu() {
    $('.menu.main__menu').show();
    const DOM = {};
    DOM.links = Array.from(document.querySelectorAll('.menu > .menu__item'));

    anime({
        targets: DOM.links.map((link) => link.querySelectorAll('span')),
        delay: (t, i) => anime.random(0, 1850),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 1,
        begin: () => DOM.links.forEach(link => {
            link.classList.add('menu__item--showDeco');
        }),
        complete: () => DOM.links.forEach(link => {
            link.style.pointerEvents = 'all';
        })
    });
}


function hideCodeBeautifier() {
    anime({
        targets: '.code_beautifier_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 0
    });
}
function showCodeBeautifier() {
    anime({
        targets: '.code_beautifier_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 1
    });
}

function hideUnicodeFonts() {
    anime({
        targets: '.unicode_font_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 0
    });
}
function showUnicodeFonts() {
    anime({
        targets: '.unicode_font_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 1
    });
}

function hideHttpTools() {
    anime({
        targets: '.http_tool_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 0
    });
}
function showHttpTools() {
    anime({
        targets: '.http_tool_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 1
    });
}

function hideImageProcessing() {
    anime({
        targets: '.immage_processing_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 0
    });
}
function showImageProcessing() {
    anime({
        targets: '.immage_processing_svg',
        delay: (t, i) => anime.random(0, 300),
        duration: 200,
        easing: 'easeInOutQuad',
        opacity: 1
    });
}

