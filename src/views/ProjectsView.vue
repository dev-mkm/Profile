<script setup>
import ProjectComponent from '../components/ProjectComponent.vue';
</script>

<template>
<h2>Projects</h2>
<div class="flex">
  <ProjectComponent class="comp" img="../Images/gvoid.jpg" header="GameVoid" text="Get Information About Any Game You Want" linktext="View Telegram Bot" link="https://t.me/GVoidBot"/>
  <ProjectComponent class="comp" img="../Images/Crypto.png" header="CryptoTrade" text="A Laravel Based Crypto trade site (Work In Progress)" linktext="View GitHub Project" link="https://github.com/dev-mkm/CryptoTradeShop-WIP-"/>
</div>
</template>

<style scoped>
h2 {
  color: var(--color-heading);
  font-size: 3rem;
  margin: 1rem 2rem;
  margin-top: 0;
}
.flex {
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 1rem;
}
.flex .comp {
    flex: none;
}
@media (max-width: 1000px) {
  h2 {
    font-size: 6vw;
  }
}
</style>