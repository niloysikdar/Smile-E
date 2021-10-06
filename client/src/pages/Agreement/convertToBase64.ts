export const getBase64 = (file: Blob, cb: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function (event: Event) {
    cb((event.target as FileReader).result!.toString().replace('data:', '').replace(/^.+,/, ''));
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};
