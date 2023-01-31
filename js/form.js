jQuery(function() {
    $('.popup_open').on('click', function () {
        $('.popup_fade').addClass('showme');
        $('.menu_burger').removeClass('open');
        $('.navbar_foot').removeClass('open');
        $('.lim').removeClass('open');
    });
    $('.popup_x_btn').on('click', function() {
        $('.popup_fade').removeClass('showme');
    });
    $('.popup_fade').on('click', function(event) {
        if (!event.target.closest('.popup_content')) {
            $('.popup_fade').removeClass('showme');
        }
    });

});

jQuery(function() {
    let element = document.querySelector('#popup_input_tel');
    let label = document.querySelector('#popup_lb_tel');
    let maskOptions = {
        mask: '{+7} (000)-000-00-00'
    };
    let mask = IMask(element, maskOptions);

    $('.popup_form').on('submit', function(event) {
        event.preventDefault();
        if (element.value.length < 18) {
            label.classList.add('wrong');
            label.innerHTML = 'Заполните поле правильно!';
        }
        else {
            label.classList.remove('wrong');
            label.innerHTML = 'Тел';
            this.submit();
        }
    });
});