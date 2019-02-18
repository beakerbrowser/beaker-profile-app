import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from '/vendor/beaker-app-stdlib/css/common.css.js'
import searchInputCSS from '/vendor/beaker-app-stdlib/css/com/search-input.css.js'

const cssStr = css`
${commonCSS}
${searchInputCSS}

.search-container,
input.search {
  position: relative;
  width: 300px;
  height: 36px;
  font-size: 15px;
}

.fa-search {
  font-size: 15px;
  left: 14px;
  top: 10px;
}

input.search::-webkit-input-placeholder {
  font-size: 15px;
}
`
export default cssStr