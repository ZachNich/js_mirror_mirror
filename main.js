const message = document.getElementById('message')

message.addEventListener('keyup', function (event) {
    document.getElementById('art__one').textContent = message.value;
    document.getElementById('art__two').textContent = message.value;
})