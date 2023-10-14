export const timeBasedUUID = () => {
  const currentTime = new Date().getTime();
  const uuidTemplate = 'xxxxxxxx-xxxx-1xxx-xxxx-xxxxxxxxxxxx';

  return uuidTemplate.replace(/[xy]/g, function (c) {
    const r = (currentTime + Math.random() * 16) % 16 | 0;

    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};
