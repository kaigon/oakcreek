function getValidNumber(value) {
    value = $.trim(value).replace(/\D/g, '');
    if (value.substring(0, 1) == '1') {
        value = value.substring(1);
    }
    if (value.length == 10) {
        return value;
    }
    return false;
}

$(document).on('focus', 'input[type="tel"]', function() {
	//$(this).attr('placeholder','X (XXX) XXX-XXXX');
    $(this).formatter({
        //'pattern': '{{9}} ({{999}}) {{999}}-{{9999}}',
        'pattern': '({{999}}) {{999}}-{{9999}}',
        'persistent': false
    });
});
