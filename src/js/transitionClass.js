import { bodyElement, debounce } from './common';

export default function transitionClass() {
  const addTransitionClass = () => {
    bodyElement.classList.add('_useTransition');
  };
  const removeTransitionClass = () => {
    bodyElement.classList.remove('_useTransition');
  };

  window.addEventListener('resize', debounce(500, addTransitionClass, removeTransitionClass));
  addTransitionClass();
}
