const like = document.getElementById('likeButton');

const url = 'like.php';

like.addEventListener('click', function () {
    sendLike();
});

async function sendLike() {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}