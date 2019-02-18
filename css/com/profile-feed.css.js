import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import buttonsCSS from '/vendor/beaker-app-stdlib/css/buttons.css.js'

const cssStr = css`
${buttonsCSS}

a:hover {
  text-decoration: underline;
}

:host {
  display: block;
  border: 1px solid #ddd;
}

profile-feed-post {
  display: flex;
  width: 100%;
  background: #fff;
  padding: 14px;
  border-bottom: 1px solid #ddd;
}

profile-feed-post:last-of-type {
  border-bottom: 0;
}

.avatar-column {
  width: 64px;
}

.content-column {
  flex: 1;
}

.avatar {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.header {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-text--muted);
}

.title {
  font-weight: bold;
  color: var(--color-text);
}

.domain,
.permalink {
  color: inherit;
}

.body {
  white-space: pre;
  font-size: 14px;
  color: var(--color-text--dark);
}
`
export default cssStr