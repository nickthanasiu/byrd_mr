const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;

export const toTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

export const toElement = (element) => {
  if (isSmoothScrollSupported) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    element.scrollIntoView();
  }
};

export const toY = (y) => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, y);
  }
}

export default {
  toTop,
  toElement
}
