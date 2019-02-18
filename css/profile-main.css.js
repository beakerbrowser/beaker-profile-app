import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'

const cssStr = css`
:host {
  --ui-width: 960px;
  --left-column-width: 200px;
  --feed-width: 560px;
  --column-spacing: 30px;
  --navbar-section-height: 50px;
  --toolbar-section-height: 60px;
}

.spacer {
  flex: 1;
}

header {
  background: #fff;
}

header section > div,
main > div {
  display: flex;
  width: var(--ui-width);
  margin: 0 auto;
}

header section > div {
  align-items: center;
}

header section.navbar,
header section.toolbar {
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  position: relative;
  z-index: 1;
}

header section.cover-photo > div {
  width: 100%;
}

header section.navbar {
  border-bottom: 1px solid #ccc;
}

header section.navbar > div {
  height: var(--navbar-section-height);
}

header section.navbar a {
  margin-left: 26px;
  font-size: 16px;
  font-weight: 300;
  color: #555;
  text-decoration: none;
  cursor: pointer;
}

header section.navbar a:hover {
  color: #777;
}

header section.navbar a.todo {
  cursor: default;
  color: #aaa;
}

header section.navbar a.todo:hover {
  position: relative;
}

header section.navbar a.todo:hover:after {
  content: 'TODO';
  position: absolute;
  left: -10px;
  top: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #222;
  text-shadow: 0 0 3px #fff;
}

header section.toolbar {
  border-top: 1px solid #ddd;
}

header section.toolbar > div {
  height: var(--toolbar-section-height);
}

header img.profile {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

header .cover-photo img {
  object-fit: cover;
  height: 500px;
  width: 100%;
}

header a.avatar {
  position: relative;
  width: var(--left-column-width);
  margin-right: var(--column-spacing);
}

header a.avatar img {
  position: absolute;
  z-index: 2;
  top: calc(0px - var(--left-column-width) + var(--toolbar-section-height) + 10px);
  width: calc(var(--left-column-width) - 10px);
  height: calc(var(--left-column-width) - 10px);
  border-radius: 50%;
  border: 5px solid #fff;
}

main nav {
  width: var(--left-column-width);
  margin-right: var(--column-spacing);
}

main article {
  width: var(--feed-width);
  margin-top: 30px;
  margin-bottom: 100px;
}

profile-info {
  margin: 50px 0 20px;
}
`
export default cssStr