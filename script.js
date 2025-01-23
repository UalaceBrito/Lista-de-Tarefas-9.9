$(document).ready(function () {
    // Ao submeter o formulário
    $('#task-form').on('submit', function (event) {
        event.preventDefault();

        // Capturar o valor do input
        const task = $('#task-input').val();

        // Adicionar a tarefa à lista
        if (task.trim() !== '') {
            $('#task-list').append(`<li>${task}</li>`);
            $('#task-input').val(''); // Limpar o input
        }
    });

    // Adicionar o efeito ao clicar no item da lista
    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
