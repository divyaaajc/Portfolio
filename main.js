let projectDescription = document.querySelector('.description');

let projectImg = document.querySelector('img');

let projectTitle = document.querySelector('h3');

let projectInfo = document.querySelector('.box');

let showMore = () => {
  projectImg.style.filter = 'brightness(50%)';
  projectDescription.style.visibility = 'visible';
};

let showLess = () => {
  projectImg.style.filter = 'brightness(100%)';
  projectDescription.style.visibility = 'hidden';
};

projectInfo.addEventListener('mouseover', showMore);

projectInfo.addEventListener('mouseout', showLess);
