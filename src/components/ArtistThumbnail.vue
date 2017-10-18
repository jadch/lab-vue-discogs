<template>
  <div class="thumbnail" v-if="artist">
    <img :src="artist.thumb" alt="Artist pic" v-if="artist.thumb">
    <router-link :to="'artists/' + artist.id.toString()">
      <h2>{{artist.title}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArtistThumbnail',
  props: {
    artist: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-size: 1.2em;
  }
</style>
