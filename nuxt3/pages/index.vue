<template>
  <div class="mb-10">
    <h1 class="py-1 pl-3 my-2 bg-orange-500 text-gray-800">HackerNews + Qwik</h1>
    <Cards v-if="stories" :stories="stories" />
  </div>
</template>

<script lang="ts" setup>
import { IStory } from "~~/components/Card.vue";
import { HackerNewsResponseDto } from "~~/types";

const { data: stories } = await useAsyncData(async () => {
  const response = (await $fetch(
    "http://hn.algolia.com/api/v1/search?tags=front_page,story"
  )) as HackerNewsResponseDto;

  return response.hits as IStory[];
});
</script>
