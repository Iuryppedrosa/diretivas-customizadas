export default {
  created(el, binding) {
    const posicoes = ['relative', 'absolute', 'fixed', 'sticky']
    if (posicoes.includes(binding.arg)) {
      el.style.position = binding.arg
      el.style.fontSize = `${binding.value}px`
    }
  }
}
