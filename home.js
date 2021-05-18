let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
const pictures = document.getElementsByClassName("image-container-2");


let counter=0;
prevButton.addEventListener("click", ()=> {
    if(counter==0)
    {
        counter = pictures.length - 1;
    }
    else
    {
        counter--;
    }
    for(let i=0; i<pictures.length; i++)
    {
        pictures[i].classList.remove("active-image");
    }
    pictures[counter].classList.add("active-image");
})

nextButton.addEventListener("click", ()=> {
    if(counter==pictures.length-1)
    {
        counter = 0;
    }
    else
    {
        counter++;
    }
    for(let i=0; i<pictures.length; i++)
    {
        pictures[i].classList.remove("active-image");
    }
    pictures[counter].classList.add("active-image");
})

setInterval(()=> {
    if(counter==pictures.length-1)
    {
        counter = 0;
    }
    else
    {
        counter++;
    }
    for(let i=0; i<pictures.length; i++)
    {
        pictures[i].classList.remove("active-image");
    }
    pictures[counter].classList.add("active-image");
}, 5000);


const zoomedImage = document.getElementById("zoomed-image");
const zoomedImageDescription = document.getElementById("zoomed-image-description");
const zoomedImageContainer = document.getElementById("zoomed-image-container");

const zoomFunction = function(){
    zoomedImageContainer.style.visibility="visible";
    zoomedImageContainer.style.opacity="1";
    let imagine = this.firstElementChild;
    let clone = imagine.cloneNode();

    zoomedImage.innerHTML="";
    zoomedImage.appendChild(clone);


    let descriere = this.lastElementChild;
    clone = descriere.cloneNode(true);
    clone.style.display = "inline-block";
    console.log(descriere, clone);
    zoomedImageDescription.innerHTML = "";
    zoomedImageDescription.appendChild(clone);
    
} 

for(let i=0; i<pictures.length; i++)
{
    pictures[i].onclick = zoomFunction;
}

zoomedImageContainer.onclick = () => {
    zoomedImageContainer.style.visibility="hidden";
    zoomedImageContainer.style.opacity="0";
}



const burger = document.getElementById("burger");
const navigation = document.querySelector(".navigation");
const navItems = document.getElementsByClassName("nav-item");
let navigationIndex = 0;

const changeNav = () => {
    navigation.classList.toggle("navigation-mobile");
    burger.classList.toggle("becoming-x");

    for(i=0; i<navItems.length; i++)
    {
        if(navItems[i].style.animation)
        {
            navItems[i].style.animation="";
        }
        else
        {
            navItems[i].style.animation=`navSlide 0.4s ease-out forwards ${i/9+0.1}s`;
        }
    }
};



burger.onclick = changeNav;




