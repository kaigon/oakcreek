    // json load
    var guidelines_json;
    function load_json(json_file) {
        $.ajax({
            'async': false,
            'global': false,
            'url': 'files/data/'+json_file,
            'dataType': "json",
            'success': function(data) {
                guidelines_json = data;
            }
        });
        return guidelines_json;
    }

    function initial_guidelines() {
        load_json('guidelines.json');
        var type = 'Fonts';
        var deets = '';
        $.each(guidelines_json, function(k, v) {
            if (v[0] === type) {
                deets = v[1];
            }
        });

        var content = '<h4><strong>' + type + '</strong></h4>' + deets + '';
        $('.guidelines_articles').html('<article data-guidelines="' + type + '" style="display:block;">' + content + '</article>');
        $('button[data-guidelines-toggle]').eq(0).addClass('active');

    }

    initial_guidelines();



    $('button[data-guidelines-toggle]').click(function() {

        //guidelines_json();
        //json;


        var type = $(this).html();
        var deets = '';
        $.each(guidelines_json, function(k, v) {
            if (v[0] === type) {
                deets = v[1];
            }
        });

        var content = '<h4><strong>' + type + '</strong></h4>' + deets + '';

        if ($('.guidelines_articles').is(':visible')) {
            var exists = $('.guidelines_articles article');
            if (exists.length) {
                if ($(exists).data('guidelines') !== type) {
                    $(exists).slideUp(400, function() {
                        $('.guidelines article').data('guidelines', type).html(content);
                    }).slideDown();
                }
            } else {
                $('.guidelines_articles').html('<article data-guidelines="' + type + '">' + content + '</article>');
                $('.guidelines_articles article').slideDown();
            }
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('button').removeClass('active');
            }
        } else {
            var well = $(this).next('article');
            if ($(well).length && $(well).is(':visible')) {
                $(well).slideUp();
            } else if ($(well).length) {
                $(well).slideDown();
            } else {
                $(this).after('<article>' + content + '</article>');
                $(this).next('article').slideDown();
            }
            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
            } else {
                $(this).addClass('expanded');
            }
        }




    });