import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileActionsCSS from '../../css/com/profile-actions.css.js'

class ProfileActions extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <button class="btn">
        <span class="fa fa-rss"></span> Follow
      </button>
      <button class="btn">
        <span class="fa fa-plus"></span> Add to Library
      </button>
    `
  }

}
ProfileActions.styles = profileActionsCSS
customElements.define('profile-actions', ProfileActions)