import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileInfoCSS from '../../css/com/profile-info.css.js'

class ProfileInfo extends LitElement {
  render () {
    return html`
      <h1 class="title"><a href="#">Paul Frazee</a></h1>
      <div class="domain"><a href="#">pfrazee.com</a></div>
      <div class="description">
        Cofounder of @BeakerBrowser and @hashbaseio. Previously Secure Scuttlebutt.
      </div>
    `
  }

}
ProfileInfo.styles = profileInfoCSS
customElements.define('profile-info', ProfileInfo)