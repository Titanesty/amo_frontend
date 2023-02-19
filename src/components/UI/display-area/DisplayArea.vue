<script lang="ts" setup>
import type { DisplayArea } from "@/components/UI/display-area/types";

interface DisplayAreaProps {
  list: DisplayArea[];
}

const props = defineProps<DisplayAreaProps>();
</script>

<template>
  <div class="display-area">
    <div v-if="list.length" class="display-area__list">
      <div class="display-area__item" v-for="item of list" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.type }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
