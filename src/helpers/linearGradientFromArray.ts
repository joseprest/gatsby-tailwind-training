/**
 * Generate a linear gradient from an array of colors
 * @param colors
 * @param angle
 * @returns
 */

const linearGradientFromArray = (colors, angle = 90) => {
    if (!colors) return null;
    return `linear-gradient(${angle}deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
};

export default linearGradientFromArray;
