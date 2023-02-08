const imageBox = document.getElementById("imageBox");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");
const inputButton = document.getElementById("inputButton");
const descriptionBox = document.getElementById("descriptionBox");
const optionsBox = document.getElementById("optionsBox");
const navBox = document.getElementById("navBox");

let currentPosition = 2;

const places = [
    {
        "name":"van abbe straat",
        "description":"u staat bij het speeltuin",
        "image":"img/1.jpg",
        "options":[
            {"direction":"west","destination":2}
        ]
    },
    {
        "name":"linksaf abbestraat",
        "description":"u gaat rechtdoor en kijkt naar links vanaf het speeltuin",
        "image":"img/2.jpg",
        "options":[
            {"direction":"links","destination":4},
            {"direction":"rechtdoor","destination":2},
        ]
    },
    {
        "name":"deur",
        "description":"u gaat rechtdoor en kijkt naar rechts vanaf het speeltuin",
        "image":"img/3.jpg",
        "options":[
            {"direction":"linksaf","destination":1},     
        ]
    },
    {
        "name":"docentenkamer",
        "description":"u bent in de docentenkamer",
        "image":"img/4.jpg",
        "options":[
            {"direction":"zuid","destination":4}           
        ]
    },
    {
        "name":"tussenstraat",
        "description":"tussentraat abbe straat",
        "image":"img/5.jpg",
        "options":[
            {"direction":"noord","destination":7},
            {"direction":"oost","destination":3},
            {"direction":"zuid","destination":8},
            {"direction":"west","destination":6},
            {"direction":"omlaag","destination":1}           
        ]
    },
    {
        "name":"westenstraat",
        "description":"u bent op het van abbe straat west",
        "image":"img/6.jpg",
        "options":[
            {"direction":"west","destination":8}           
        ]
    },
    {
        "name":"overtsteekplaats abbestraat/noordstraat",
        "description":"u op het oversteekplaats",
        "image":"img/7.jpg",
        "options":[
            {"direction":"oost","destination":4}           
        ]
    },
    {
        "name":"zuiden",
        "description":"u staat op het zuiden van het abbestraat",
        "image":"img/8.jpg",
        "options":[
            {"direction":"zuid","destination":4}           
        ]
    },
    {
        "name":"noorden straat ",
        "description":"einde van de park",
        "image":"img/9.jpg",
        "options":[
            {"direction":"noord","destination":4},
            {"direction":"west","destination":5}           
        ]
    }
];

function showLocation(){
    
    navBox.innerHTML = "";
    optionsBox.innerHTML = "";
    
    
    descriptionBox.innerHTML = places[currentPosition].description;

   
    myImg.src = places[currentPosition].image;

    
    let possibleDirections = places[currentPosition].options.map((option,i) => { 

       
        let directionsP = document.createElement("p");
        directionsP.innerHTML = "<b>" + option.direction + "</b>: naar de " + places[option.destination].name;
        optionsBox.appendChild(directionsP);

        

        let btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","inputButton");
        btn.setAttribute("value",option.direction);
        navBox.appendChild(btn);

        
        btn.addEventListener("click", ()=>{
            currentPosition = option.destination;

           
            showLocation();
        });
    });
}

showLocation();