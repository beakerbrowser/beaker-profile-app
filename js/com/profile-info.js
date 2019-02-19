import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileInfoCSS from '../../css/com/profile-info.css.js'

class ProfileInfo extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <h1 class="title"><a href="#">Paul Frazee</a></h1>
      <div class="domain"><a href="#">pfrazee.com</a></div>
      <div class="link"><a href="#" target="_blank"><span class="fas fa-external-link-alt"></span> Visit Website</a></div>
      <div class="description">
        Cofounder of @BeakerBrowser and @hashbaseio. Previously Secure Scuttlebutt.
      </div>
    `
  }

}
ProfileInfo.styles = profileInfoCSS
customElements.define('profile-info', ProfileInfo)