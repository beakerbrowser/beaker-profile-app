import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileSocialMetricsCSS from '../../css/com/profile-social-metrics.css.js'

class ProfileSocialMetrics extends LitElement {
  render () {
    return html`
      <a href="#">
        <span>42</span> known followers
      </a>
    `
  }

}
ProfileSocialMetrics.styles = profileSocialMetricsCSS
customElements.define('profile-social-metrics', ProfileSocialMetrics)