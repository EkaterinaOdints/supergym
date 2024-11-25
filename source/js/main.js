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

const toggleTab = () => {
  const tabContainers = document.querySelectorAll('.tab-js');

  tabContainers.forEach((container) => {
    const cardNameCollection = container.querySelectorAll('.tab-item-js');
    const cardCollection = container.querySelectorAll('.tab-list-js');

    const changeTab = (index) => {
      cardCollection.forEach((item) => {
        item.classList.remove('tab-list--active');
      });
      const currentTab = cardCollection[index];
      currentTab.classList.add('tab-list--active');
    };

    cardNameCollection.forEach((item, index) => {
      const input = item.querySelector('.tab-input-js');
      input.addEventListener('change', () => changeTab(index));
    });
  });
};

const toggleAccordion = () => {
  const accordionContainers = document.querySelectorAll('.accordion-item-js');

  const setHeight = (item) => {
    const text = item.querySelector('.accordion-text-js');

    if (item.classList.contains('accordion-item--active')) {
      text.style.height = `${text.scrollHeight }px`;
    } else {
      text.style.height = null;
    }
  };

  accordionContainers.forEach((item) => {
    const accordionInput = item.querySelector('input');

    setHeight(item);

    accordionInput.addEventListener('change', () => {
      item.classList.toggle('accordion-item--active');
      setHeight(item);
    });
  });
};

playVideo();
toggleTab();
toggleAccordion();

/*global Swiper*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

