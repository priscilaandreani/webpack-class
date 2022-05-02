import './button.scss'

class Button {
  create() {
    const button = document.createElement('button')

    button.textContent = "Clique em mim!"
    button.classList.add('btn')
    document.querySelector('body').appendChild(button)
  }
}

export default Button