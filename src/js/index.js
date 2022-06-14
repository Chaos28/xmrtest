import '../scss/index.scss';
import $ from 'jquery';

$(function () {
  $(window).on('resize', function() {
    if ($(this).width() > 768) $('.header__navigation').removeAttr('style');
  });

  $('.header__btn-menu').on('click', function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header').css({ overflow: 'visible' });

      if ($('.mobile-menu').hasClass('mobile-menu--top')) $('.mobile-menu').slideDown(300);
      if ($('.mobile-menu').hasClass('mobile-menu--sidebar')) $('.mobile-menu').animate({ right: '0' });

      $('body').addClass('body-overflow-hidden');
      $('body').append('<div class="overlay"></div>');
    } else {
      $('.header').css({ overflow: 'hidden' });

      if ($('.mobile-menu').hasClass('mobile-menu--top')) $('.mobile-menu').slideUp(300);
      if ($('.mobile-menu').hasClass('mobile-menu--sidebar')) $('.mobile-menu').animate({ right: '-100%' });

      $('body').removeClass('body-overflow-hidden');
      $('.overlay').remove();
    }
  });

  $('.header__open-menu-btn').on('click', '.burger-btn', function () {
    $('.header__container').slideToggle(300);
  });

  $('body').on('change', '.controls input[name="eye"]', function () {
    const textInputs = $(this)
      .parents('[data-hide-block]')
      .find('[data-hide-text]');

    textInputs.each((_, input) => {
      if ($(this).is(':checked')) {
        const value = $(input).val();
        const valueLength = value.length;

        $(input).attr('data-orig-text', value);
        $(input).val(new Array(valueLength).fill('•').join(''));
      } else {
        $(input).val($(input).attr('data-orig-text'));
        $(input).attr('');
      }
    });
  });

  $('body').on('click', '.warning-section__open-block-btn', function() {
    $('.warning-section__info-wrapper--mobile').slideDown(300);
    $('body').addClass('body-overflow-hidden');
    $('body').append('<div class="overlay"></div>');
  });

  $('body').on('click', '.warning-section__close-more', function() {
    $('.warning-section__info-wrapper--mobile').slideUp(300);
    $('body').removeClass('body-overflow-hidden');
    $('.overlay').remove();
  });
});
