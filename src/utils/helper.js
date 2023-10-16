export const timeBasedUUID = () => {
  const currentTime = new Date().getTime();
  const uuidTemplate = 'xxxxxxxx-xxxx-1xxx-xxxx-xxxxxxxxxxxx';

  return uuidTemplate.replace(/[xy]/g, function (c) {
    const r = (currentTime + Math.random() * 16) % 16 | 0;

    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const hexToRgba = (hex, alpha) => {
  hex = hex.replace(/^#/, '');

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  alpha = Math.min(1, Math.max(0, alpha));

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
