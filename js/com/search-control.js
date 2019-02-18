import {LitElement, html, css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import searchControlCSS from '../../css/com/search-control.css.js'

class SearchControl extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <div class="search-container">
        <input placeholder="Search" type="text" class="search">
        <i class="fa fa-search"></i>
      </div>
    `
  }
}
SearchControl.styles = searchControlCSS

customElements.define('search-control', SearchControl)