const prevBtn= document.querySelector('.prev');
const nextBtn= document.querySelector('.next');
const galleryImgs= document.querySelectorAll('.gallery-img');
let currentlySelected= 0;

prevBtn.addEventListener('click', function(){
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected --;
  galleryImgs[currentlySelected].classList.add("active");
  nextBtn.disabled = false;
  if(currentlySelected  === 0) {
      prevBtn.disabled = true;
  }
});

nextBtn.addEventListener('click', function(){
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected ++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if(galleryImgs.length === currentlySelected +1) {
        nextBtn.disabled = true;
    }
});


const GITHUB_URL = "https://github.com/picojp32/picojp32.github.io.git";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
 })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });
