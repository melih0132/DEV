document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("like-button");
    const likeCount = document.getElementById("like-count");

    axios.get('like.php')
        .then(function(response) {
            likeCount.textContent = response.data.likes;
        })
        .catch(function(error) {
            console.error('Erreur lors du chargement des likes:', error);
        });

    likeButton.addEventListener("click", function() {
        axios.get('like.php?action=like')
            .then(function(response) {
                likeCount.textContent = response.data.likes;
            })
            .catch(function(error) {
                console.error('Erreur lors de l\'incrément des likes:', error);
            });
    });
});