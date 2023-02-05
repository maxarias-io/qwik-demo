<template>
  <div class="bg-[#f6f6ef] p-3 flex flex-col gap-2">
    <Card v-for="story in stories" :key="story.objectID" :story="story" />
  </div>
</template>

<script lang="ts" setup>
import { IStory } from "~~/components/Card.vue";

defineProps<{
  stories: IStory[];
}>();
</script>
