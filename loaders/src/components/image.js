import Patrick from '../img/patrick.png'

class Image {
  insertPatrick() {
    const img = document.createElement('img')

    img.src = Patrick;
    img.width = 200;

    document.querySelector('body').appendChild(img)
  }
}

export default Image