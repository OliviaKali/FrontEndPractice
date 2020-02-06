var fileInput = document.querySelector('input[type=file]');

function read(callback) {
    var file = fileInput.files.item(0);
    var reader = new FileReader();
}
 {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            getElementById("uploadImage").getAttribute('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}