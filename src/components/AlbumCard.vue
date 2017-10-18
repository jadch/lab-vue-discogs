<template>
  <div v-if="release">
    <img :src="release.thumb" alt="album pic" v-if="release.thumb">
      <h2>{{release.title}}</h2>
      <h3>{{release.year}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    release: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-size: 1.2em;
  }

</style>
