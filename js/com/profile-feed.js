import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {FeedPost} from '/vendor/beaker-app-stdlib/js/com/feed/post.js'
import profileFeedCSS from '../../css/com/profile-feed.css.js'

class ProfileFeed extends LitElement {
  render () {
    return html`
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
    `
  }
}
ProfileFeed.styles = profileFeedCSS
FeedPost.register()
customElements.define('profile-feed', ProfileFeed)