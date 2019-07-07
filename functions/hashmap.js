class Hashmap {
  checkMagazine(magazine, note) {
    let magazineDictionary = this.populteHashmap(magazine);
    let itWorks = '';

    for (let i = 0; i < note.length; i++) {
      if (!(note[i] in magazineDictionary)) {
        itWorks = 'No';
        break;
      } else {
        if (magazineDictionary[note[i]] < 1) {
          itWorks = 'No'
          break;
        }
        magazineDictionary[note[i]] = magazineDictionary[note[i]] - 1;
      }
    }
    if (itWorks === '') { itWorks = 'Yes' }
    return itWorks;
  }

  populteHashmap(words){
    let hashMap = {};
    words.forEach(word => {
      hashMap[word] = hashMap[word] ? hashMap[word] + 1 : 1;
    });
    return hashMap;
  }
}

module.exports = new Hashmap();