<template>
  <div class="control">
    <input v-on:keyup.enter="search()" class="input" type="text" placeholder="Search for an artist" v-model="searchString">
    <button v-on:click="search()" class="button is-info">Search</button>
  </div>
</template>

<script>
import {getArtists} from '../api'
export default {
  name: 'SearchBar',
  data () {
    return {
      searchString: '',
    }
  },
  methods: {
    search: function () {
      getArtists(this.searchString).then( artists => {
        this.$emit('artistsReceived', artists)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    width: 60vw;
    margin-left: 15vw;
  }
</style>
