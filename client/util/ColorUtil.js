import TinyColor from 'tinycolor2';

export default {
  getDistinctColors(count) {
    const sat = 67;
    const lum = 40;

    let rgbColors = [];
    for (var i = 0; i < 360; i += 360 / (count || 1)) {
      rgbColors.push(TinyColor({ h: i, s: sat -5 + (Math.random() * 10), l: lum -5 + (Math.random() * 10) }).toHexString());
    }

    return rgbColors;
  }
};