import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'

const cssStr = css`
a {
  display: block;
  color: var(--color-text);
  border: 1px solid transparent;
  text-decoration: none;
  padding: 5px 10px;
  margin-bottom: 5px;
  font-weight: 500;
}

a.active,
a:hover {
  background: #fff;
  border: 1px solid #ccc;
}
`
export default cssStr