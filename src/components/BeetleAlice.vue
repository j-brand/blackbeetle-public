<template>
  <div id="alice" class="relative overflow-hidden">
    <img id="img_center" class="top-0 left-0 right-0 bottom-0 absolute h-72 md:h-116  m-auto" src="@/assets/img/Mandala_01.png" alt="Alice im Wunderland und Flamingo" />
    <img class="top-0 left-0 right-0 bottom-0 absolute h-24 md:h-36 m-auto" src="@/assets/img/alice_flamingo.svg" alt="Alice im Wunderland und Flamingo" />
    <svg id="circles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <path id="ci1" d="M50,300a250,250 0 1,0 500,0a250,250 0 1,0 -500,0" />
        <path id="ci2" d="M90,300a210,210 0 1,0 420,0a210,210 0 1,0 -420,0" />
        <path id="ci3" d="M125,300a175,175 0 1,0 350,0a175,175 0 1,0 -350,0" />
        <path id="ci4" d="M165,300a135,135 0 1,0 270,0a135,135 0 1,0 -270,0" />
        <path id="ci5" d="M210,300a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" />
      </defs>

      <use xlink:href="#ci1" fill="none" />
      <circle cx="300" cy="300" r="250" fill="#000" fill-opacity="0" />
      <g>
        <text id="txt-1" fill="#000">
          <textPath xlink:href="#ci1">
            Aber ich möchte nicht unter Verrückte kommen.
          </textPath>
        </text>
      </g>

      <use xlink:href="#ci2" fill="none" />
      <circle cx="300" cy="300" r="210" fill="#000" fill-opacity="0" />
      <g>
        <text id="txt-2" fill="#000">
          <textPath xlink:href="#ci2">
            Oh, das kannst du wohl kaum verhindern. Wir sind hier nämlich alle verrückt. Ich bin verrückt. Du bist verrückt.
          </textPath>
        </text>
      </g>

      <use xlink:href="#ci3" fill="none" />
      <circle cx="300" cy="300" r="175" fill="#000" fill-opacity="0" />
      <g>
        <text id="txt-3" fill="#000">
          <textPath xlink:href="#ci3">
            Woher willst du wissen, dass ich verrückt bin?
          </textPath>
        </text>
      </g>

      <use xlink:href="#ci4" fill="none" />
      <circle cx="300" cy="300" r="135" fill="#000" fill-opacity="0" />
      <g>
        <text id="txt-4" fill="#000">
          <textPath xlink:href="#ci4">
            Wenn du es nicht wärest, stellte die Grinsekatze fest, dann wärest du nicht hier.
          </textPath>
        </text>
      </g>

      <use xlink:href="#ci5" fill="none" />
      <circle cx="300" cy="300" r="90" fill="#000" fill-opacity="0" />
      <g>
        <text id="txt-5" fill="#000">
          <textPath xlink:href="#ci5">
            &ndash; Lewis Carroll
          </textPath>
        </text>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BeetleAlice",
};
</script>

<style lang="scss" scope>
#alice {
  padding-bottom: 48rem;
  #img_center {
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
    animation-duration: 10s;
    animation-direction: reverse;
    margin: auto;
  }
  #circles {
    overflow: visible;
    position: absolute;
    margin: auto;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    circle {
      &:hover + g {
        transform: scale(1.5);
        transform-origin: center;
      }
    }
    g {
      transition-duration: 500ms;
      transition-timing-function: ease-in-out;
      transform-origin: center;
      overflow: hidden;
      pointer-events: none;
      text {
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        margin: auto;
        transform-origin: center;
      }
    }
  }
}

#alice text {
  font-family: "Helvetica Neue", Arial;
  font-weight: bold;
}

#txt-1 {
  animation-duration: 7s;
  font-size: 2.5rem;
}

#txt-2 {
  animation-duration: 7s;
  font-size: 1.2rem;
}
#txt-3 {
  animation-duration: 4s;
  font-size: 2.8rem;
}
#txt-4 {
  animation-duration: 10s;
  font-size: 1rem;
}
#txt-5 {
  animation-duration: 7s;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  #alice {
    padding-bottom: 52rem;
  }
  #circles {
    height: 500px;
  }
  #circle_2 {
    height: 440px;
  }
  #circle_3 {
    height: 370px;
  }
  #circle_4 {
    height: 290px;
  }
  #circle_5 {
    height: 200px;
  }
}
@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
</style>
