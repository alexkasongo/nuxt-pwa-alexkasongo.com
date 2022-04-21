<template>
  <div class="apple">
    <div class="wrapper">
      <section class="hero">
        <div class="inner"></div>
      </section>

      <section class="sidebar">
        <div class="inner">
          <div class="clipper">
            <h2 class="text-color">
              Apple introduces gorgeous new green finishes for the iPhone 13
              lineup
            </h2>
          </div>
          <div class="anim-panel">
            <p class="text-color">
              New, sophisticated alpine green iPhone 13 Pro and green iPhone 13
              join the lineup, featuring the lightning-fast A15 Bionic, advanced
              camera systems, great battery life, impressive durability, and 5G
            </p>
            <a href="#" class="read-btn">Read More</a>
          </div>
        </div>
      </section>

      <section class="subscribe">
        <div class="inner">
          <div class="clipper">
            <h2 class="text-color">Join Waiting List</h2>
          </div>
          <div class="anim-panel">
            <p class="text-color">
              Get the latest updates about this website and stuff.
            </p>
            <br />
            <input placeholder="Email Address" type="text" name="email" />
            <button class="cta">Join waitlist</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scope>
.apple {
  margin: 100px 10px;
}

$primary-color: #d4eaca;
$submit-btn-bg-color: black;
$submit-btn-color: white;

.wrapper {
  display: grid;
  grid-template-columns: auto;

  section {
    padding: 3em;

    h1,
    h2,
    .read-btn {
      text-transform: uppercase;
      margin: 0;
    }

    h2 {
      font-size: 1.4rem;
    }

    .read-btn {
      text-decoration: none;
      color: black;
      font-weight: bold;
      background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/arrow.svg")
        no-repeat;
      background-size: 8px;
      background-position: 0 1px;
      padding-left: 1em;
    }

    .primary {
      padding: 1.5em 1.5em 1.5em calc(3em + 25px);
      background-position: 3em;
      border: 1px solid gray;
      margin-top: 3em;
      display: inline-block;
    }
  }

  section.hero {
    padding-top: 8em;
    background: url("https://sm.mashable.com/t/mashable_in/photo/default/iphone-13-alpine-green_7yqa.1248.jpg");
    background-size: cover;
    background-position: center;

    p {
      width: 70%;
      font-size: 1.2rem;
      margin-bottom: 0;
    }

    h1 {
      font-size: 2.4rem;
    }
  }

  section.sidebar,
  section.subscribe {
    font-size: 0.9rem;
    line-height: 1.6em;
    background: #fff;
  }

  section.sidebar {
    background: $primary-color;

    .read-btn {
      margin-top: 2em;
      display: block;
      background-position: 0 0.3em;
    }
  }

  .clipper {
    padding-bottom: 20px;
  }

  section.subscribe {
    input {
      width: 100%;
      padding: 1em;
      margin-bottom: 1em;
      border-radius: 8px;
    }

    button {
      width: 100%;
      background: $submit-btn-bg-color;
      color: $submit-btn-color;
      padding: 1em;
      border: none;
      border-radius: 8px;
    }
  }
}

.text-color {
  color: #000;
}

@media only screen and (min-width: 1020px) {
  .apple {
    margin: 100px;
  }

  header {
    background: none;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 70% auto;
    grid-template-rows: 60% auto;
    grid-template-areas:
      "hero featured"
      "hero subscribe";
    height: 100vh;
  }

  section.hero {
    grid-area: hero;
  }

  section {
    display: grid;
    grid-template-rows: auto;
    align-items: center;
  }
}
</style>
