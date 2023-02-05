import { component$, useStore } from "@builder.io/qwik";

export interface IStory {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: any;
  comment_text: any;
  num_comments: number;
  story_id: any;
  story_title: any;
  story_url: any;
  parent_id: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

interface HighlightResult {
  title: Title;
  url: Url;
  author: Author;
}

interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

interface Url {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export default component$((props: { story: IStory }) => {
  const { title, url, points, author, num_comments, objectID } = props.story;

  const store = useStore({ hidden: false });

  return (
    <div class="flex flex-col">
      <div class="flex gap-2 items-center">
        <h1
          class={[
            { "line-through text-gray-200": store.hidden },
            { "text-gray-900": !store.hidden },
            " whitespace-nowrap",
          ]}
        >
          {title}
        </h1>
        <a
          class={[
            { "line-through text-gray-200": store.hidden },
            { "text-gray-400": !store.hidden },
            " font-light text-xs truncate",
          ]}
          href={url}
          target="_blank"
        >
          ({url})
        </a>
      </div>
      <ul class="flex flex-row text-gray-400 font-light text-xs gap-3">
        <li class={[{ "line-through text-gray-200": store.hidden }, "flex gap-1"]}>
          <span>{points} points</span>
          <a class="hover:underline" href={`https://news.ycombinator.com/user?id=${author}`}>
            user
          </a>
          <span>{`<time ago>`}</span>
        </li>
        <li>
          <button
            class={[{ "text-gray-900": store.hidden }, "hover:underline"]}
            type="button"
            onClick$={() => {
              store.hidden = !store.hidden;
            }}
          >
            {!store.hidden ? "hide" : "show"}
          </button>
        </li>
        <li class={{ "line-through text-gray-200": store.hidden }}>
          <a class="hover:underline" href={`https://news.ycombinator.com/item?id=${objectID}`}>
            {num_comments} comments
          </a>
        </li>
      </ul>
    </div>
  );
});
