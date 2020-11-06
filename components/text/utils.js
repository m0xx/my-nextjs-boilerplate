const createStyle = (sizePt, lineHeightPt, family, weight) =>
  `text-${sizePt}pt leading-${lineHeightPt}pt font-${family} font-${weight} tracking-wide`;

export const stylesByDisplay = {
  'header-1': createStyle(64, 78, 'sans', 'black'),
  'header-2': createStyle(50, 65, 'sans', 'black'),
  'header-3': createStyle(40, 52, 'sans', 'black'),
  'header-4': createStyle(32, 36, 'sans', 'bold'),
  'header-5': createStyle(28, 36, 'sans', 'bold'),
  'title-1': createStyle(24, 32, 'sans', 'regular'),
  'title-1b': createStyle(24, 32, 'sans', 'bold'),
  'title-2': createStyle(24, 32, 'serif', 'regular'),
  'title-2b': createStyle(24, 32, 'serif', 'bold'),
  'subtitle-1': createStyle(18, 26, 'sans', 'regular'),
  'subtitle-1m': createStyle(18, 26, 'sans', 'medium'),
  'subtitle-1b': createStyle(18, 26, 'sans', 'bold'),
  'subtitle-2': createStyle(18, 26, 'serif', 'regular'),
  'subtitle-2b': createStyle(18, 26, 'serif', 'bold'),
  'paragraph-1': createStyle(16, 24, 'sans', 'regular'),
  'paragraph-1m': createStyle(16, 24, 'sans', 'medium'),
  'paragraph-1b': createStyle(16, 24, 'sans', 'bold'),
  'paragraph-2': createStyle(16, 24, 'serif', 'regular'),
  'paragraph-2b': createStyle(16, 24, 'serif', 'bold'),
  'description-1': createStyle(14, 22, 'sans', 'regular'),
  'description-1m': createStyle(14, 22, 'sans', 'medium'),
  'description-1b': createStyle(14, 22, 'sans', 'bold'),
  'description-2': createStyle(14, 22, 'serif', 'regular'),
  'description-2b': createStyle(14, 22, 'serif', 'bold'),
  'small-1': createStyle(12, 18, 'sans', 'regular'),
  'small-1m': createStyle(12, 18, 'sans', 'medium'),
  'small-1b': createStyle(12, 18, 'sans', 'bold'),
  'small-2': createStyle(12, 18, 'serif', 'regular'),
  'small-2b': createStyle(12, 18, 'serif', 'bold'),
  'button-sm': createStyle(12, 12, 'sans', 'medium'),
  button: createStyle(14, 14, 'sans', 'medium'),
  'button-lg': createStyle(16, 16, 'sans', 'medium'),
  input: createStyle(14, 14, 'sans', 'regular') + ' tracking-wider',
  link: 'text-blue-main hover:text-blue-dark'
};

export const getTextStyles = display => stylesByDisplay[display];
