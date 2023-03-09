const categoryIconElement = document.querySelectorAll(".category-icon");
const categoryNameElement = document.querySelectorAll(".category-name");
const categoryScoreElement = document.querySelectorAll(".category-score > b");

console.log(categoryNameElement);


fetch('data.json')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        displayData(data)
    })
    .catch(err => {
        console.log(err);
    })

function displayData(data){

    for(index in data){
        console.log(data[index])
        categoryIconElement[index].src = data[index].icon;
        categoryNameElement[index].innerHTML = data[index].category;
        categoryScoreElement[index].innerHTML = data[index].score;
    }
}