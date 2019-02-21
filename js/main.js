import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {profiles, library} from './tmp-beaker.js'
import {followgraph} from './tmp-unwalled-garden.js'
import profileMainCSS from '../css/profile-main.css.js'
import '/vendor/beaker-app-stdlib/js/com/app-header.js'
import './com/profile-cover-photo.js'
import './com/profile-info.js'
import './com/profile-content-nav.js'
import './com/profile-social-metrics.js'
import './com/profile-actions.js'
import './com/profile-feed.js'
import './com/profile-followgraph.js'

class Profile extends LitElement {
  static get properties () {
    return {
      currentUser: {type: Object},
      viewingUser: {type: Object},
      view: {type: String}
    }
  }

  constructor () {
    super()
    this.view = window.location.hash || '#posts'
    this.currentUser = null
    this.viewingUser = null

    window.addEventListener('hashchange', e => {
      this.view = window.location.hash || '#posts'
    })

    this.load()
  }

  get locationUserUrl () {
    var domain = window.location.pathname.slice(1)
    if (domain) {
      return `dat://${domain}`
    }
    return false
  }

  async load () {
    this.currentUser = await profiles.getCurrentUser()

    var url = this.locationUserUrl
    if (!url) {
      console.log('Redirecting to current user\'s profile')
      let domain = (new URL(this.currentUser.url)).hostname
      window.history.replaceState({}, null, `/${domain}`)
    } else {
      // read user data
      var viewingUser = await profiles.get(url)
      var libraryInfo = await library.get(url)
      viewingUser.isOwner = libraryInfo.owner
      viewingUser.isSaved = libraryInfo.saved
      viewingUser.isFollowed = await followgraph.isAFollowingB(this.currentUser.url, viewingUser.url)
      viewingUser.isFollowingYou = await followgraph.isAFollowingB(viewingUser.url, this.currentUser.url)
      this.viewingUser = viewingUser
      console.log('user', this.viewingUser)
    }
  }

  render() {
    if (!this.viewingUser) return this.renderLoading()
    var isViewingCurrentUser = this.viewingUser.url === this.currentUser.url
    var viewingUserDomain = (new URL(this.viewingUser.url)).hostname
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <beaker-app-header
        current-user-url="${this.currentUser.url}"
        fontawesome-src="/vendor/beaker-app-stdlib/css/fontawesome.css"
      ></beaker-app-header>
      <header>
        <section class="cover-photo">
          <div>
            <profile-cover-photo src="${this.viewingUser.url}/cover"></profile-cover-photo>
          </div>
        </section>
        <section class="toolbar">
          <div>
            <a class="avatar" href="dat://profile/${viewingUserDomain}">
              <img src="${this.viewingUser.url}/thumb">
            </a>
            <profile-social-metrics user-url="${this.viewingUser.url}"></profile-social-metrics>
            <div class="spacer"></div>
            <profile-actions
              .user=${this.viewingUser}
              ?is-current-user=${isViewingCurrentUser}
              @profile-changed=${this.load}
            ></profile-actions>
          </div>
        </section>
      </header>
      <main>
        <div>
          <nav>
            <profile-info .user=${this.viewingUser}></profile-info>
            <profile-content-nav view=${this.view}></profile-content-nav>
          </nav>
          <article>${this.renderView()}</article>
        </div>
      </main>
    `
  }

  renderView () {
    switch (this.view) {
      case '#followers':
        return html`<profile-followgraph followers user-url=${this.viewingUser.url}></profile-followgraph>`
      case '#follows':
        return html`<profile-followgraph follows user-url=${this.viewingUser.url}></profile-followgraph>`
      default:
        return html`<profile-feed user-url=${this.viewingUser.url}></profile-feed>`
    }
  }

  renderLoading () {
    return html`
      <div>todo</div>
    `
  }
}
Profile.styles = profileMainCSS

customElements.define('profile-main', Profile)
