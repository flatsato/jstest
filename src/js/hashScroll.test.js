/**
 * @jest-environment jsdom
 */

import hashScroll from './hashScroll';
import scrollTarget from './scrollTarget';

jest.mock('./scrollTarget');

beforeEach(() => {
  document.body.innerHTML = '';
});

afterEach(() => {
  scrollTarget.mockClear();
});

test('anchor check 1', () => {
  document.body.innerHTML = `
    <div id="link">
      <a href="#link">link</a>
    </div>
  `;
  hashScroll();
  document.querySelector('a').click();
  expect(scrollTarget).toHaveBeenCalledTimes(1);
});

test('anchor check 2', () => {
  document.body.innerHTML = `
    <div id="link">
      <a href="#link"><span>link</span></a>
    </div>
  `;
  hashScroll();
  document.querySelector('span').click();
  expect(scrollTarget).toHaveBeenCalledTimes(1);
});

test('anchor check 3', () => {
  document.body.innerHTML = `
    <div id="link">
      <a href="#link" target="_blank">link</a>
    </div>
  `;
  hashScroll();
  document.querySelector('a').click();
  expect(scrollTarget).toHaveBeenCalledTimes(0);
});

test('anchor check 4', () => {
  document.body.innerHTML = `
    <div id="link">
      <a href="#dummy">link</a>
      <a href="#">link</a>
      <a href="dummy/">link</a>
      <a href="dummy.html">link</a>
      <a href="javascript:void(0);">link</a>
    </div>
  `;
  hashScroll();
  document.querySelectorAll('a').forEach((element) => {
    element.click();
  });
  expect(scrollTarget).toHaveBeenCalledTimes(0);
});
