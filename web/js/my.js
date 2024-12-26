$(document).ready(function () {
    $('#testButton').on('click', function () {
        $('<div class="alert alert-info" role="alert">')
            .text('Кнопка успешно нажата!')
            .appendTo('.notification')
            .hide()
            .fadeIn(500);

        setTimeout(function () {
            $('.alert').fadeOut(500, function () {
                $(this).remove();
            });
        }, 3000);
    });
});
