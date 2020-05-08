<template>
  <v-form ref="form" lazy-validation>
    <v-container class="item-search">
        <v-row>
          <v-text-field v-model="item" class="item-search-field" type="text" placeholder="Item.."
          solo> </v-text-field>
          <v-btn v-on:click="search" class="item-search-button" height="48px" color="red">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
    </v-container>
    <div v-if="loading">
        <v-icon>mdi-spin</v-icon>
    </div>
    <div v-else>{{results}}</div>
  </v-form>
</template>

<style lang="scss" scoped>
@import "../styles/home.scss";
</style>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  props: {
    results: null,
  },
  data() {
    return {
      item: '',
      loading: false,
    };
  },
  methods: {
    search() {
      // Do actual search request
      console.log(this.item);
      this.loading = true;
      this.requestUrl = 'https://rsbuddy.com/exchange/graphs/1440/';
      axios
        // eslint-disable-next-line prefer-template
        .get(this.requestUrl + this.item + '.json')
        .then((response) => {
          this.results = response;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
