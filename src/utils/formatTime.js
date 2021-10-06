export const formatTime = (arg) => {
  if (!arg || isNaN(arg) || arg < 0) {
    return null;
  }
  else {
    const hours = String(Math.floor(arg/3600)).padStart(2, '0');
    const minutes = String(Math.floor(arg % 3600 / 60)).padStart(2, '0');
    const seconds = String(Math.floor(arg % 3600 % 60)).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    return time;
  }
};
