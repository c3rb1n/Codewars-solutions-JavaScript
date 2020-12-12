const findScreenHeight = (width, ratio) => {
    const ratioConverted = ratio.split(":");
    const portion1 = width / ratioConverted[0];
    const height = portion1 * ratioConverted[1];
  
    return `${width}x${height}`;
};