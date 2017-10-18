<template>
  <div v-if="artist">
    <img :src="artist.thumb" alt="Artist pic" v-if="artist.thumb">
    <img src="" alt="Pic not available" v-if="!artist.thumb"
      <h2>{{artist.name}}</h2>
      <h3>{{artist.realname}}</h3>
      <br>
      <p>{{artist.profile}}</p>
    <div class="thumbnails" v-if="releases">
      <album-card class="thumbnail" v-for="(release, index) in releases" :key="index" v-if="release" :release="release"></album-card>
    </div>
  </div>
</template>

<script>
import {getSingleArtist, getArtistReleases} from '../api'
import AlbumCard from './AlbumCard'
export default {
  name: 'ArtistPage',
  data () {
    return {
      artist: null,
      releases: []
    }
  },
  created () {
    getSingleArtist(this.$route.params.id).then( (artist) => {
      this.artist = artist
    })
    getArtistReleases(this.$route.params.id).then( (releases) => {
      this.releases = releases
    })
  },
  components: {
    AlbumCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-size: 1.2em;
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
