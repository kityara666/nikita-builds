const projects = [
    {
        title: "Fences",
        shortDesc: "Wood fence installation.",
        fullDesc: "Complete replacement of the old fence with high-quality cedar.",
        image: "img/Fences.png"
    },
    {
        title: "Plumbing",
        shortDesc: "Leak repair and faucet swap.",
        fullDesc: "Fixed a leaky pipe under the kitchen sink and installed a new faucet.",
        image: "img/Plumbing.png"
    },
    {
        title: "Bathroom & Kitchen Remodeling",
        shortDesc: "Modern updates for your kitchen and bathroom spaces.",
        fullDesc: "We handle all cosmetic and structural updates, including tile installation, cabinet mounting, new light fixtures, and plumbing hookups. From minor refreshing to complete transformations.",
        image: "img/Remodeling.png"
    }
];

let currentIndex = 0;

function showProject(index) {
    const imgElement = document.getElementById('carousel-img');
    const titleElement = document.getElementById('carousel-title');
    const descElement = document.getElementById('carousel-desc');
    const currentProject = projects[index];
    titleElement.textContent = currentProject.title;
    descElement.textContent = currentProject.shortDesc;
    imgElement.src = currentProject.image;
};

showProject(currentIndex);

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click',function(){
    currentIndex++;
    if (currentIndex === projects.length) {
        currentIndex=0
    };
    showProject(currentIndex);
});
prevButton.addEventListener('click',function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex=projects.length - 1
    };
    showProject(currentIndex);
});

const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const carouselImageClick = document.getElementById('carousel-img');


closeModalBtn.addEventListener('click', function(){
    modal.classList.remove('modal-open');
});

carouselImageClick.addEventListener('click', function(){
    updateModal(currentIndex);
});

const modalPrevBtn = document.getElementById('modal-prev-btn');
const modalNextBtn = document.getElementById('modal-next-btn');

modalNextBtn.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex === projects.length) {
        currentIndex = 0;
    }

    updateModal(currentIndex);

    showProject(currentIndex);
    });

    modalPrevBtn.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    }

    updateModal(currentIndex);

    showProject(currentIndex);
    });

function updateModal(index) {
    const currentProject = projects[index];

    modalImg.src = currentProject.image;
    modalTitle.textContent = currentProject.title;
    modalDesc.textContent = currentProject.fullDesc;
    modal.classList.add('modal-open');


}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('modal-open')){
        modal.classList.remove('modal-open');
    }
});

const username = document.getElementById("username");
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const messageBox = document.getElementById("form-message");

username.addEventListener('blur', function(){
    if (username.value === "") {
        nameError.textContent="ERROR:Name empty!";
        nameError.classList.remove("success");
            nameError.classList.add("error");
        } else {
        nameError.textContent="";
        nameError.classList.remove("error");
        }
});

email.addEventListener('blur', function(){    
    if (email.value.includes("@") === false) {
        emailError.textContent="ERROR:There is no @!";
        emailError.classList.remove("success");
        emailError.classList.add("error");
        } else {
        emailError.textContent="";
        emailError.classList.remove("error");
        }
});


const form = document.getElementById("contact-form");
message.addEventListener('blur', function(){
    if (message.value.length <10) {
        messageError.textContent="ERROR:Text too short!";
        messageError.classList.remove("success");
        messageError.classList.add("error");
        } else {
        messageError.textContent="";
        messageError.classList.remove("error");
        }
        
});



form.addEventListener('submit', function(event){
    event.preventDefault()
    let isValid = true;
    messageBox.textContent= "";

    if (username.value === "") {
        isValid = false;
        nameError.textContent = "ERROR:Name empty!";
        nameError.classList.add("error");
    }
    if (email.value.includes("@") === false) {
        isValid = false;
        emailError.textContent = "ERROR:There is no @!";
        emailError.classList.add("error");
    }
    if (message.value.length < 10) {
        isValid = false;
        messageError.textContent = "ERROR:Text too short!";
        messageError.classList.add("error");
    }
    if (isValid===true) {
        messageBox.classList.remove("error");
        messageBox.classList.add("success");
        messageBox.textContent='Thanks!'
        username.value = "";
        email.value = "";
        message.value = "";
    }
      
});

