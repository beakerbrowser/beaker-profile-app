import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'

const cssStr = css`
:host {
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1.title {
  margin-bottom: 6px;
}

div.domain {
  margin-bottom: 16px;
  color: var(--color-text--muted);
  font-weight: 500;
}

div.description {
  color: var(--color-text--dark);
}
`
export default cssStr