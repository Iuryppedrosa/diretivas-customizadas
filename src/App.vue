<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="-- I did it! -- " />
      <div>
        <p v-texto="'green'">Primeira diretiva customizada</p>
        <p v-texto="{ cor: 'blue', fontSize: '200%' }">Segunda diretiva customizada</p>
        <p v-texto="corEFont">Terceira diretiva customizada</p>
        <!-- <p v-posicao:absolute="40" v-texto="'green'">Quarta diretiva customizada</p> -->
        <span
          v-informacao:simples.umClickMouse="
            'Voce encontrara o codigo A na parte frontal do equipamento'
          "
          >Codigo A:</span
        ><input type="text" />
        <span>i</span>
      </div>
    </div>
  </header>

  <main></main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      corEFont: {
        id: 1,
        cor: 'black',
        fontSize: '300%'
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
