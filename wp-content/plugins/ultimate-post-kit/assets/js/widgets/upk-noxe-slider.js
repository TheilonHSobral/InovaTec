(function ($, elementor) {

    'use strict';

    var widgetNoxeSlider = function ($scope, $) {

        var $carousel = $scope.find('.upk-noxe-slider');

        if (!$carousel.length) {
            return;
        }

        var $carouselContainer = $carousel.find('.swiper-carousel'),
            $settings = $carousel.data('settings');

        const Swiper = elementorFrontend.utils.swiper;
        initSwiper();
        async function initSwiper() {
            var swiper = await new Swiper($carouselContainer, $settings);

            if ($settings.pauseOnHover) {
                $($carouselContainer).hover(function () {
                    (this).swiper.autoplay.stop();
                }, function () {
                    (this).swiper.autoplay.start();
                });
            }
        };

    };


    jQuery(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/upk-noxe-slider.default', widgetNoxeSlider);
    });

}(jQuery, window.elementorFrontend));