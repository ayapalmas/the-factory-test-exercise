<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Container from "./Container.vue";
import NavbarGroup from "./NavbarGroup.vue";
import ArtGalleryLogoSVG from "./svg/ArtGalleryLogoSVG.vue";
</script>

<template>
  <header>
    <Navbar>
      <router-link to="/" class="h-8">
        <ArtGalleryLogoSVG />
      </router-link>
      <NavbarGroup>
        <slot name="navigation"></slot>
      </NavbarGroup>
    </Navbar>
  </header>
  <main>
    <slot name="content"></slot>
  </main>
</template>
