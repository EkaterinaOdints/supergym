// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const playerContainer = document.querySelector('.about-video-js');
const playButton = playerContainer.querySelector('.about-video__control-js');
const videoFrame = playerContainer.querySelector('iframe');

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  videoFrame.style.display = 'block';
});
