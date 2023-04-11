class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    const skipWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === 0 || !skipWords.includes(word)) {
        titleizedWords.push(this.capitalize(word));
      } else {
        titleizedWords.push(word);
      }
    }

    return titleizedWords.join(' ');
  }
}