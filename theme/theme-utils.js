import Color from 'color';
import memoize from 'lodash/memoize';

const colors = {};
export const getHex = (color, level) => colors[color][level];
export const getHexFromName = colorName => {
  const [color, level] = colorName.split('-');
  return getColor(color, level);
};

export const addOpacity = (colorName, opacity) =>
  Color(getHexFromName(colorName))
    .fade(1 - opacity)
    .rgb()
    .string();

export const addBlack = (colorName, opacity) =>
  Color(getHexFromName(colorName)).mix(Color('#000'), opacity).hex();

const colorState = {
  white: {
    normal: 'white',
    hover: 'gray-200'
  },
  'gray-light': {
    normal: 'gray-200',
    hover: 'gray-400'
  },
  'white-indigo': {
    normal: 'white',
    hover: 'indigo-100'
  }
};

export const hoverableMixin = memoize(bgColorName => {
  let bgColor = 'white';
  let hoverColor = 'gray-200';

  if (!colorState[bgColorName]) {
    console.warn(`Unknown color state for ${bgColorName}...`);
  } else {
    const { normal, hover } = colorState[bgColorName];
    bgColor = normal;
    hoverColor = hover;
  }

  return `bg-${bgColor} hover:bg-${hoverColor} cursor-pointer transition ease-in-out duration-300`;
});
