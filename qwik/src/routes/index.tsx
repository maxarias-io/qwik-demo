import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { DocumentHead } from "@builder.io/qwik-city";
import Cards from "~/components/cards";

export default component$(() => {
  const store = useStore({ data: [] });

  useTask$(async () => {
    if (isServer) {
      const response = await fetch("http://hn.algolia.com/api/v1/search?tags=front_page,story");
      const responseJson = await response.json();

      store.data = responseJson.hits || [];
    }
  });

  return (
    <div class="mb-10">
      <h1 class="py-1 pl-3 my-2  bg-orange-500 text-gray-800">HackerNews + Qwik</h1>
      <Cards stories={store.data} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hackernews in Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
