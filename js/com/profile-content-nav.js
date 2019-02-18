import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileContentNav from '../../css/com/profile-content-nav.css.js'

class ProfileContentNav extends LitElement {
  render () {
    return html`
      <a href="#" class="active">Posts</a>
      <a href="#">Followers</a>
      <a href="#">Follows</a>
    `
  }

}
ProfileContentNav.styles = profileContentNav
customElements.define('profile-content-nav', ProfileContentNav)