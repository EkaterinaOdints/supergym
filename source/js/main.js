// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const playerContainer = document.querySelector('.about-video-js');
const playButton = playerContainer.querySelector('.about-video__control-js');
const videoFrame = playerContainer.querySelector('.about-video__frame--js');

playButton.addEventListener('click', () => {
  const frameAttributes = videoFrame.getAttribute('allow').split('; ');
  frameAttributes.push('autoplay');
  videoFrame.setAttribute('allow', `${frameAttributes.join('; ')}`);
  playButton.style.display = 'none';
  videoFrame.style.display = 'block';
});
