function createAlert(className,value) {
    var oops = '<div class="alert '+className+'">';
    oops += '<div class="alert-col alert-pre">';
    oops += '<p>!</p>';
    oops += '</div>';
    oops += '<div class="alert-col alert-body">';
    oops += '<p>'+value+'</p>';
    oops += '</div>';
    oops += '</div>';
    return oops;
}

