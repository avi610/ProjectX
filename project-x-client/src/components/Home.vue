<template>
  <div>
    <b-form id="item-search">
      <b-form-group>
        <b-form-input v-model="item" placeholder="Search..."></b-form-input>
      </b-form-group>
      <b-button @click="search" variant="primary">Submit</b-button>
    </b-form>
    <div>{{results}}</div>
  </div>
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
      this.baseUrl = 'http://services.runescape.com/m=itemdb_oldschool';
      this.itemUrl = '/api/catalogue/detail.json?item=';
      axios
        // eslint-disable-next-line prefer-template
        .get(this.baseUrl + this.itemUrl + this.item)
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
