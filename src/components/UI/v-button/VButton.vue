<script lang="ts" setup>
interface ButtonProps {
  active: boolean;
  preloader: boolean;
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <div class="btn" :class="{ 'btn--disable': !active, 'btn--loading': preloader }">
    <span v-if="!preloader" class="btn__text">Создать</span>
    <span v-else class="btn__spinner"></span>
  </div>
</template>

<style lang="scss" src="./styles.scss" />
