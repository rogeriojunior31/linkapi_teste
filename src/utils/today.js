module.exports = () => {
  const date = new Date();
  const dateFormatted = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return dateFormatted;
};
