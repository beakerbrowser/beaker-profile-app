import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import * as appMenu from '/vendor/beaker-app-stdlib/js/com/app-menu.js'
import profileMainCSS from '../css/profile-main.css.js'
import './com/search-control.js'
import './com/profile-info.js'
import './com/profile-content-nav.js'
import './com/profile-social-metrics.js'
import './com/profile-actions.js'
import './com/profile-feed.js'

class Profile extends LitElement {
  constructor () {
    super()
  }

  render() {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <header>
        <section class="navbar">
          <div>
            <search-control></search-control>
            <div class="spacer"></div>
            <a @click=${this.onClickAppMenu}><span class="fas fa-th"></span></a>
            <a class="todo"><span class="fas fa-bell"></span></a>
            <a href="dat://profile"><img class="profile" src="/img/tmp-profile.png"></a>
          </div>
        </section>
        <section class="cover-photo">
          <div>
            <img src="/img/tmp-cover-photo.jpg">
          </div>
        </section>
        <section class="toolbar">
          <div>
            <a class="avatar" href="dat://profile"><img src="/img/tmp-profile.png"></a>
            <profile-social-metrics></profile-social-metrics>
            <div class="spacer"></div>
            <profile-actions></profile-actions>
          </div>
        </section>
      </header>
      <main>
        <div>
          <nav>
            <profile-info></profile-info>
            <profile-content-nav></profile-content-nav>
          </nav>
          <article>
            <profile-feed></profile-feed>
          </article>
        </div>
      </main>
    `
  }

  // event handlers
  // =

  onClickAppMenu (e) {
    e.preventDefault()
    e.stopPropagation()

    var rect = e.currentTarget.getClientRects()[0]
    var x = rect.right + 10
    var y = rect.top + e.currentTarget.offsetHeight
    appMenu.create({x, y})
  }
}
Profile.styles = profileMainCSS

customElements.define('profile-main', Profile)
