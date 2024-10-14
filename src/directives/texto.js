export default {
  created(el, binding) {
    let diretivas = el
    console.log(diretivas.innerText)
    console.log(binding)

    if (typeof binding.value === 'string') {
      diretivas.style.color = binding.value
    } else if (typeof binding.value === 'object') {
      diretivas.style.color = binding.value.cor
      diretivas.style.fontSize = binding.value.fontSize
      console.log(binding.value.fontSize)
    } else if (binding.value.id) {
      diretivas.style.color = binding.value.cor
      diretivas.style.fontSize = binding.value.fontSize
    }
  }
}
