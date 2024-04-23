/**
 *
 * @param {boolean} toggle
 * 스크롤 못하게 잠금.
 */
export const bodyHiddenToggle = (toggle: boolean) => {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (toggle) {
    body?.classList.add('hidden');
  } else {
    body?.classList.remove('hidden');
  }
};

/**
 *
 * @param {string} text
 * @returns 첫글자 소문자로 변경
 */
export const firstTextLowerCase = (text: string) => {
  const first = text?.slice(0, 1).toLowerCase();
  const last = text?.slice(1);

  return `${first}${last}`;
};

/**
 *
 * @param {string} text
 * @returns 첫글자 대문자로 변경
 */
export const firstTextUpperCase = (text: string) => {
  const first = text?.slice(0, 1).toUpperCase();
  const last = text?.slice(1);

  return `${first}${last}`;
};

/**
 *
 * @param {Number} createdAt
 * @param {String} format 변환되는 스트링 값
 * ex) format = . (yyyy.mm.dd)
 * ex) format = - (yyyy-mm-dd)
 *
 * @returns Format(yyyy.mm.dd)
 */
export const setCreatedAt = (createdAt: number, format: string) => {
  if (!(createdAt > 0)) return '';

  const dt = new Date(Number(createdAt));
  const addDt = `${
    dt.getFullYear() + format + `00${(dt.getMonth() + 1).toString()}`.slice(-2) + format + `00${dt.getDate().toString()}`.slice(-2)
  } ${`00${dt.getHours().toString()}`.slice(-2)}:${`00${dt.getMinutes().toString()}`.slice(-2)}`;

  return addDt;
};

// 시간 형식 변경
export const timeFormat = (seconds: number) => {
  if (isNaN(seconds)) {
    return '0:00';
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

/**
 *
 * @param text 자를 text
 * @param silce 자를 길이 값
 * @returns
 */
export const textSilce = (text: string, silce: number) => {
  if (!text) return;

  return text?.length > silce ? `${text.slice(0, silce)}...` : text;
};

/**
 *
 * @param num
 * @returns 숫자 콤마추가
 */
export const addComma = (num: number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const numData = `${Number(num)}`;

  return numData.toString().replace(regexp, ',');
};
