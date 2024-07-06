// Data for food items
const foodItems = [
    {
        name: 'Pizza',
        description: 'Delicious Italian pizza with cheese and toppings',
        image: 'pizza.jpg'
    },
    {
        name: 'Burger',
        description: 'Juicy beef burger with lettuce, tomato, and cheese',
        image: 'burger.jpg'
    },
    {
        name: 'Salad',
        description: 'Fresh garden salad with mixed greens and vegetables',
        image: 'salad.jpg'
    }
];

// Function to create and render food cards
function renderFoodCards() {
    const foodContainer = document.getElementById('foodContainer');

    foodItems.forEach(item => {
        // Create food card container
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');

        // Create card info (name and description)
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        const heading = document.createElement('h2');
        heading.textContent = item.name;

        const paragraph = document.createElement('p');
        paragraph.textContent = item.description;

        cardInfo.appendChild(heading);
        cardInfo.appendChild(paragraph);

        // Create card photo (image)
        const cardPhoto = document.createElement('div');
        cardPhoto.classList.add('card-photo');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        cardPhoto.appendChild(image);

        // Append card info and photo to food card container
        foodCard.appendChild(cardInfo);
        foodCard.appendChild(cardPhoto);

        // Append food card to food container
        foodContainer.appendChild(foodCard);
    });
}

// Call renderFoodCards function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderFoodCards);
$(document).ready(function( ){
    flag=1;

$("#nex").click(function( ){ 
    if(flag==0)
    {
        $("#slide1").css("z-index","999")
        $("#slide2").css("z-index","9")
        $("#slide3").css("z-index","9")
        $("#slide1").css("transform","translateX(0px)scale(1.5)")
        $("#slide2").css("transform","translateX(-100px)scale(1)")
        $("#slide3").css("transform","translateX(100px)")
        flag=1;
    }
    else if(flag==1)
    {
        $("#slide3").css("z-index","999")
        $("#slide2").css("z-index","9")
        $("#slide1").css("z-index","9")
        $("#slide3").css("transform","translateX(0px)scale(1.5)")
        $("#slide2").css("transform","translateX(-100px)scale(1)")
        $("#slide1").css("transform","translateX(100px)")
        flag=2;
    }
    else if(flag==2)
        {
            $("#slide2").css("z-index","999")
            $("#slide3").css("z-index","9")
            $("#slide1").css("z-index","9")
            $("#slide2").css("transform","translateX(0px)scale(1.5)")
            $("#slide3").css("transform","translateX(-100px)scale(1)")
            $("#slide1").css("transform","translateX(100px)")
            flag=0;
        }

    });
    $("#pre").click(function(){
     if(flag==0){
        $("#slide3").css("z-index","999")
        $("#slide2").css("z-index","9")
        $("#slide1").css("z-index","9")
        $("#slide3").css("transform","translateX(0px)scale(1.5)")
        $("#slide2").css("transform","translateX(-100px)scale(1)")
        $("#slide1").css("transform","translateX(100px)")
        flag=2;
     }
     else if(flag==1)
        {
            $("#slide2").css("z-index","999")
            $("#slide3").css("z-index","9")
            $("#slide1").css("z-index","9")
            $("#slide2").css("transform","translateX(0px)scale(1.5)")
            $("#slide3").css("transform","translateX(-100px)scale(1)")
            $("#slide1").css("transform","translateX(100px)")
            flag=0;
        }
        else if{
           
        $("#slide1").css("z-index","999")
        $("#slide2").css("z-index","9")
        $("#slide3").css("z-index","9")
        $("#slide1").css("transform","translateX(0px)scale(1.5)")
        $("#slide2").css("transform","translateX(-100px)scale(1)")
        $("#slide3").css("transform","translateX(100px)")
        flag=1; 
        }
    }
});