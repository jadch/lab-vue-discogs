<template>
  <div class="hello">
    <h1>Home</h1>
    <search-bar v-on:artistsReceived="artists = $event"></search-bar>
    <div class="thumbnails" v-if="artists">
      <artist-thumbnail class="thumbnail" v-for="(artist, index) in artists" :key="index" v-if="artist" :artist="artist"></artist-thumbnail>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
import ArtistThumbnail from './ArtistThumbnail'
export default {
  name: 'HelloWorld',
  data () {
    return {
      artists: []
    }
  },
  components: {
    SearchBar,
    ArtistThumbnail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

 .thumbnails {
   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3vw;
 }

 .thumbnail {
   width: 12vw;
   height: 12vw;
   min-width: 120px;
   min-height: 120px;
   margin: 5vh 1vw;
 }
</style>
