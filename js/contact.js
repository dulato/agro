jQuery(function() {
    let elem = document.querySelector('#tel_input');
    let maskOptions = {
        mask: '{+7} (000)-000-00-00'
    };
    let mask = IMask(elem, maskOptions);

    $('.contact_sc_form').on('submit', function(event) {
        event.preventDefault();
        if (elem.value.length < 18) {
            elem.classList.add('wrong');
        }
        else {
            elem.classList.remove('wrong');
            this.submit();
        }
    });
});