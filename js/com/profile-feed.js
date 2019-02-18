import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import profileFeedNav from '../../css/com/profile-feed.css.js'

class ProfileFeed extends LitElement {
  render () {
    return html`
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
      <profile-feed-post></profile-feed-post>
    `
  }
}
ProfileFeed.styles = profileFeedNav
customElements.define('profile-feed', ProfileFeed)

class ProfileFeedPost extends LitElement {
  createRenderRoot() {
    return this // dont use the shadow dom, let ProfileFeed style us
  }

  render () {
    return html`
      <div class="avatar-column">
        <img class="avatar" src="/img/tmp-profile.png">
      </div>
      <div class="content-column">
        <div class="header">
          <a class="title" href="#">Paul Frazee</a>
          <a class="domain" href="#">pfrazee.com</a>
          &middot;
          <a class="permalink" href="#">1h</a>
        </div>
        <div class="body">Was I out of my head
Was I out of my mind?
How could I have forgotten to .bind
I ‘await’ed for an invocation
“this.load is undefined”</div>
      </div>
    `
  }
}
ProfileFeedPost.styles = profileFeedNav
customElements.define('profile-feed-post', ProfileFeedPost)