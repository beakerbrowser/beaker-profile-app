import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {repeat} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-html/directives/repeat.js'
import {feed} from '../tmp-unwalled-garden.js'
import profileFeedCSS from '../../css/com/profile-feed.css.js'
import '/vendor/beaker-app-stdlib/js/com/feed/post.js'

const LOAD_LIMIT = 50

class ProfileFeed extends LitElement {
  static get properties () {
    return {
      userUrl: {type: String, attribute: 'user-url'},
      posts: {type: Array}
    }
  }

  constructor () {
    super()
    this.userUrl = null
    this.posts = []
  }

  attributeChangedCallback (name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval)
    if (name === 'user-url' && newval) {
      // trigger a load when we have a user url
      this.load()
    }
  }

  async load () {
    this.posts = await feed.query({filters: {authors: this.userUrl}, limit: LOAD_LIMIT, reverse: true})
  }

  render () {
    if (this.posts.length === 0) {
      return html`
        <div class="empty">This user hasn't posted anything yet.</div>
      `
    }
    return html`
      ${repeat(this.posts, post => html`<beaker-feed-post .post=${post}></beaker-feed-post>`)}
    `
  }
}
ProfileFeed.styles = profileFeedCSS
customElements.define('profile-feed', ProfileFeed)