const submitButton = document.querySelector('.submit-btn');
const userChoice = document.querySelectorAll('.choices button');

let chosenRating = null;

for (let counter = 0; counter < userChoice.length; counter++) {
        userChoice[counter].addEventListener('click', function() {
            userChoice.forEach(btn => btn.classList.remove('selected'))
            this.classList.add('selected');
            chosenRating = this.textContent;
        })
    }

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (chosenRating) {
        document.querySelector('.rating-card').classList.add('hidden');
        document.querySelector('.thank-you-card').classList.remove('hidden');
        document.querySelector('.selected-output').textContent = `You selected ${chosenRating} out of 5`;
    }
})
