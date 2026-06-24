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
    const currentProject = projects[currentIndex];
    modalImg.src = currentProject.image;
    modalTitle.textContent = currentProject.title;
    modal.classList.add('modal-open');
    modalDesc.textContent = currentProject.fullDesc;
});

const modalPrevBtn = document.getElementById('modal-prev-btn');
const modalNextBtn = document.getElementById('modal-next-btn');

modalNextBtn.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex === projects.length) {
        currentIndex = 0;
    }

    const currentProject = projects[currentIndex];
    modalImg.src = currentProject.image;
    modalTitle.textContent = currentProject.title;
    modalDesc.textContent = currentProject.fullDesc;

    showProject(currentIndex);
    });

    modalPrevBtn.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    }

    const currentProject = projects[currentIndex];
    modalImg.src = currentProject.image;
    modalTitle.textContent = currentProject.title;
    modalDesc.textContent = currentProject.fullDesc;

    showProject(currentIndex);
    });




