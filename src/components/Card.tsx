import { For } from 'solid-js';
interface ICard {
  title: string;
  description: string;
  languages: string;
  repo: string;
  preview?: string;
}

export const Card = (props: ICard) => (
  <div>
    <h2>{props.repo}</h2>
    <p>{props.description}</p>

    <div aria-label="Languages/frameworks used:">
      <For each={[props.languages]}>
        {(label: ICard['languages']) => <span>{label}</span>}
      </For>
    </div>

    <div aria-label="Project links">
      <a href={props.repo}>Repository</a>
      <a href={props.preview}>Preview</a>
    </div>
  </div>
);
