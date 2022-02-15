export const imageUpload = (event, images, addImages) => {
    const imagesArray = [...images];

    // TODO: 4枚以上は画像のアップロードができないようにする
    if (imagesArray.length === 4) {
      return imagesArray;
    }

    const file = event.target.files[0];
    const reader = new FileReader();

    try {
      reader.readAsDataURL(file);
      reader.onload = function() {
        console.log('file upload result ', reader.result);
        addImages(reader.result)
      };
    } catch (error) {
      console.log('エラーの内容: ', error)
      return [];
    }
};
