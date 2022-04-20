/**
 * Generate a linear gradient from an array of colors
 * @param imgUrl
 * @returns
 */

const backgroundImage = (imgUrl) => {
    if (!imgUrl) return null;
    return `url(${imgUrl})`;
};

export default backgroundImage;