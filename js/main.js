import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {AppHeader} from '/vendor/beaker-app-stdlib/js/com/app-header.js'
import profileMainCSS from '../css/profile-main.css.js'
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
      <app-header
        profile-pic-src="/img/tmp-profile.png"
        fontawesome-src="/vendor/beaker-app-stdlib/css/fontawesome.css"
      ></app-header>
      <header>
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
}
Profile.styles = profileMainCSS

AppHeader.register()
customElements.define('profile-main', Profile)
