function selectionSort(arr) {
  // array uzunluğunu buluyoruz
  const arrLength = arr.length;

  // arrayin uzunluğu kadar döngüye başlıyoruz
  for (let i = 0; i < arrLength; i++) {
    // minimum indexi i olarak ayarlıyoruz
    let min = i;

    // arrayin sıralanmamış kısmından(yani i+1) kalan elemanlardan minimum elemanı buluyoruz
    for (let j = i + 1; j < arrLength; j++) {
      // eğer döngüdeki güncel eleman minimumdan küçükse minimum indexi güncelliyoruz
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // eğer güncel eleman min eleman değilse güncel eleman ile minimum elemanı yer degistiriyoruz
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  // sıralanmış arrayin ilk 4 elemanını döndürüyoruz
  return arr.slice(0, 4);
}

const array = [7, 3, 5, 8, 2, 9, 4, 15, 6];

console.log(selectionSort(array));
