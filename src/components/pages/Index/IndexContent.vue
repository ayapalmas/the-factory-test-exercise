<script setup lang="ts">
import SearchBar from '../../shared/SearchBar.vue';
import Hero from "../../shared/Hero.vue";
import Container from "../../shared/Container.vue";




</script>

<template>
  <Hero>
    <Container>
      <form class="md:mx-36">
        <SearchBar />
      </form>
    </Container>
  </Hero>
</template>