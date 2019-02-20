import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileFeedCSS from '../../css/com/profile-feed.css.js'
import '/vendor/beaker-app-stdlib/js/com/feed/post.js'

class ProfileFeed extends LitElement {
  render () {
    return html`
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
      <beaker-feed-post></beaker-feed-post>
    `
  }
}
ProfileFeed.styles = profileFeedCSS
customElements.define('profile-feed', ProfileFeed)