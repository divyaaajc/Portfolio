let projectDescription = document.querySelector('.box-1 .description');
let projectImg = document.querySelector('.box-1 img');

let projectDescription2 = document.querySelector('.box-2 .description');
let projectImg2 = document.querySelector('.box-2 img');

let projectInfo = document.querySelectorAll('.box');

let showMoreColmar = () => {
  projectImg.style.filter = 'brightness(50%)';
  projectDescription.style.visibility = 'visible';
};
let showLessColmar = () => {
  projectImg.style.filter = 'brightness(100%)';
  projectDescription.style.visibility = 'hidden';
};
let showMoreHT = () => {
  projectImg2.style.filter = 'brightness(50%)';
  projectDescription2.style.visibility = 'visible';
};
let showLessHT = () => {
  projectImg2.style.filter = 'brightness(100%)';
  projectDescription2.style.visibility = 'hidden';
};

projectInfo[0].onmouseover = showMoreColmar;
projectInfo[0].onmouseout = showLessColmar;
projectInfo[1].onmouseover = showMoreHT;
projectInfo[1].onmouseout = showLessHT;
