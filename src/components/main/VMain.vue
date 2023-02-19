<script setup lang="ts">
import DropDownList from "@/components/UI/drop-down-list/DropDownList.vue";
import VButton from "@/components/UI/v-button/VButton.vue";
import { ref } from "vue";
import DisplayArea from "@/components/UI/display-area/DisplayArea.vue";
import CreateEntities from "@/api/create-entities/CreateEntities";

const dropDownList = [
  { id: 0, title: "Сделка" },
  { id: 1, title: "Контакт" },
  { id: 2, title: "Компания" },
];

const activeList = ref<DropDownList | null>(null);

const preloader = ref(false);

const listEntities = ref<DisplayArea[]>([]);

const sendQuery = async () => {
  try {
    if (preloader.value || !activeList.value) return;
    if (activeList.value) preloader.value = true;

    switch (activeList.value.title) {
      case "Сделка":
        const responseDeal = await CreateEntities.createDeal();
        listEntities.value.push({ id: responseDeal.data.response.leads[0].id, type: "Сделка" });
        preloader.value = false;
        break;
      case "Контакт":
        const responseContact = await CreateEntities.createContact();
        listEntities.value.push({ id: responseContact.data.response.contacts[0].id, type: "Контакт" });
        preloader.value = false;
        break;
      case "Компания":
        const responseCompany = await CreateEntities.createCompany();
        listEntities.value.push({ id: responseCompany.data.response.companies[0].id, type: "Компания" });
        preloader.value = false;
        break;
    }
  } catch (e) {
    console.log(e);
    preloader.value = false;
  }
};
</script>

<template>
  <div class="main">
    <div class="main__wrapper">
      <DropDownList class="main__drop-down" v-model:active="activeList" :list="dropDownList" />
      <VButton class="main__btn" :preloader="preloader" :active="!!activeList" @click="sendQuery" />
    </div>
    <DisplayArea class="main__display-area" :list="listEntities" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 500px;
  &__wrapper {
    display: flex;
    height: 100%;
    gap: 15px;
    margin-bottom: 15px;
  }

  &__dispay-area {
    width: 100%;
  }
}
</style>
