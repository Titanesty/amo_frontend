<script lang="ts" setup>
import {ref} from "vue";
import type {DropDownList} from "@/components/UI/drop-down-list/types";
import IconChevronDown from "@/components/icons/IconChevronDown.vue";
import { vOnClickOutside as vOnClickOutside } from '@vueuse/components'
import IconCheck from "@/components/icons/IconCheck.vue";

interface DropDownListProps {
  list: DropDownList[];
  active: DropDownList | null;
}

interface DropDownListEmits {
  (e: "update:active", newValue: DropDownList): void
}

const props = defineProps<DropDownListProps>()

const emits = defineEmits<DropDownListEmits>()

const isShowList = ref(false)

const showList = (): void => {
  isShowList.value = !isShowList.value
}

const getActiveItem = (item: DropDownList): void => {
  emits("update:active", item)
}

const closeDropDown = (): void => {
  isShowList.value = false;
}

const getActiveItemList = (itemId: number): boolean => {
  return itemId === props.active?.id
}
</script>

<template>
  <div class="drop-down" :class="{'drop-down--active': isShowList}" v-on-click-outside="closeDropDown">
    <div class="drop-down__preview" @click="showList">
      <div class="drop-down__preview-title">
        <span v-if="active">Выбрано: {{active.title}}</span>
        <span v-else> Не выбрано</span>
      </div>
        <IconChevronDown class="drop-down__preview-icon" />
    </div>
    <div v-show="isShowList" class="drop-down__list">
      <div class="drop-down__item-default">Не выбрано</div>
      <div class="drop-down__item" :class="{'drop-down__item--active': getActiveItemList(item.id)}" v-for="item of list" :key="item.id" @click="getActiveItem(item)">
        <IconCheck v-if="getActiveItemList(item.id)" class="drop-down__item-icon" />
        <span class="drop-down__item-title">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />