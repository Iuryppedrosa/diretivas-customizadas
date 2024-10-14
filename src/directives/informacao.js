export default {
  created(el, binding) {
    console.log(el)
    console.log(binding.arg)
    console.log(binding.modifiers)
    console.log(binding.value)

    let funcao = function () {
      let informacaoSpan = document.createElement('span')
      informacaoSpan.style.position = 'absolute'
      informacaoSpan.style.background = '#ddd'
      informacaoSpan.style.padding = '2px'
      informacaoSpan.innerText = binding.value

      el.appendChild(informacaoSpan)
    }

    if (binding.modifiers['umClickMouse']) {
      el.addEventListener('click', funcao)
    }
  }
}
