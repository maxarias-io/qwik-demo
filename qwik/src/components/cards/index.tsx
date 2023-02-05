import { component$ } from "@builder.io/qwik";
import type { IStory } from "../card";
import Card from "../card";

export default component$((props: { stories: IStory[] }) => {
  return (
    <div class="bg-[#f6f6ef] p-3 flex flex-col gap-2">
      {props.stories.length &&
        props.stories.map((story: IStory) => <Card key={story.objectID} story={story} />)}
    </div>
  );
});
