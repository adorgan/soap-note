const capitalizeEveryWord = (phrase) => {
    return phrase
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

export default capitalizeEveryWord;