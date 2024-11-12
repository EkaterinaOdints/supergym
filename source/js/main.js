// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const playVideo = () => {
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
};

playVideo();

const tabContainer = document.querySelector('.prices-tab-js');
const cardNameCollection = tabContainer.querySelectorAll('.tab-nav__item-js');
const cardCollection = tabContainer.querySelectorAll('.prices-list-js');

const changeTab = (index) => {
  cardCollection.forEach((item) => {
    item.classList.remove('prices-list--active');
  });
  const currentTab = cardCollection[index];
  currentTab.classList.add('prices-list--active');
};

cardNameCollection.forEach((item, index) => {
  const input = item.querySelector('.tab-nav__input-js');
  input.addEventListener('change', () => changeTab(index));
});
