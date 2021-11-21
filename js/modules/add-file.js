const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('#images');
const photoPreviewContainer = document.querySelector('.ad-form__photo');

const onInputFileChange = (chooser, preview) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    preview.src = URL.createObjectURL(file);
  }
};

avatarChooser.addEventListener('change', () => onInputFileChange(avatarChooser, avatarPreview));
photoChooser.addEventListener('change', () => {
  const image = document.createElement('img');
  image.width = '40';
  image.height = '44';
  image.alt = 'Фотография жилья';
  photoPreviewContainer.style.display = 'flex';
  photoPreviewContainer.style.alignItems = 'center';
  photoPreviewContainer.style.padding = '0 15px';
  onInputFileChange(photoChooser, image);
  photoPreviewContainer.appendChild(image);
});
