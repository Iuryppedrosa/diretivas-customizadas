import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
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
})

Vue.directive('posicao', {
  created(el, binding) {
    const posicoes = ['relative', 'absolute', 'fixed', 'sticky']
    if (posicoes.includes(binding.arg)) {
      el.style.position = binding.arg
      el.style.fontSize = `${binding.value}px`
    }
  }
})

Vue.directive('informacao', {
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
})

Vue.mount('#app')
