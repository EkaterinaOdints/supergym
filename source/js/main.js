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

  const setHeight = (item, isActive) => {
    const text = item.querySelector('.accordion-text-js');

    if (isActive) {
      text.style.height = `${text.scrollHeight }px`;
    } else {
      text.style.height = null;
    }
  };

  const setAriaExpanded = (input, isActive) => {
    if (isActive) {
      input.setAttribute('aria-expanded', 'true');
    } else {
      input.setAttribute('aria-expanded', 'false');
    }
  };

  accordionContainers.forEach((item) => {
    const accordionInput = item.querySelector('input');

    let isActive = item.classList.contains('accordion-item--active');

    setHeight(item, isActive);

    accordionInput.addEventListener('change', () => {
      isActive = !isActive;
      item.classList.toggle('accordion-item--active');
      setHeight(item, isActive);
      setAriaExpanded(accordionInput, isActive);
    });
  });
};

const validateForm = () => {
  const form = document.querySelector('.form-js');
  const button = form.querySelector('.form-button-js');
  const inputWrapperCollection = form.querySelectorAll('.form-item-js');

  inputWrapperCollection.forEach((inputWrapper) => {
    const input = inputWrapper.querySelector('input');

    input.addEventListener('input', () => {
      inputWrapper.classList.remove('invalid');
    });
  });

  const validateInput = (inputWrapper) => {
    const input = inputWrapper.querySelector('input');

    if (!input.checkValidity()) {
      inputWrapper.classList.add('invalid');
    }
  };

  button.addEventListener('click', () => {
    inputWrapperCollection.forEach((inputWrapper) => {
      validateInput(inputWrapper);
    });
  });
};

validateForm();
playVideo();
toggleTab();
toggleAccordion();

/*global Swiper*/
const teamSwiper = new Swiper('.team-swiper-js', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.team-button-next-js',
    prevEl: '.team-button-prev-js',
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

const reviewsSwiper = new Swiper('.reviews-swiper-js', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.reviews-button-next-js',
    prevEl: '.reviews-button-prev-js',
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  }
});

