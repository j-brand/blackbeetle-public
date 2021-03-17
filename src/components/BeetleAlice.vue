<template>
  <div id="circles" class="relative overflow-hidden">
    <img id="img_center" class="top-0 left-0 right-0 bottom-0 absolute h-72 md:h-116  m-auto" src="@/assets/img/Mandala_01.png" alt="Alice im Wunderland und Flamingo" />
    <img class="top-0 left-0 right-0 bottom-0 absolute h-24 md:h-36 m-auto" src="@/assets/img/alice_flamingo.svg" alt="Alice im Wunderland und Flamingo" />
    <svg id="circle_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <path id="ci1" d="M10,250a240,240 0 1,0 480,0a240,240 0 1,0 -480,0" />
      </defs>
      <circle cx="250" cy="250" r="240" fill="none" />
      <use xlink:href="#ci1" fill="none" />
      <text fill="#000">
        <textPath xlink:href="#ci1">
          Aber ich möchte nicht unter Verrückte kommen.
        </textPath>
      </text>
    </svg>

    <svg id="circle_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440">
      <defs>
        <path id="ci2" d="M10,220a210,210 0 1,0 420,0a210,210 0 1,0 -420,0" />
      </defs>
      <circle cx="220" cy="220" r="210" fill="none" />
      <use xlink:href="#ci2" fill="none" />
      <text fill="#000">
        <textPath xlink:href="#ci2">
          Oh, das kannst du wohl kaum verhindern. Wir sind hier nämlich alle verrückt. Ich bin verrückt. Du bist verrückt.
        </textPath>
      </text>
    </svg>

    <svg id="circle_3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370">
      <defs>
        <path id="ci3" d="M10,185a175,175 0 1,0 350,0a175,175 0 1,0 -350,0" />
      </defs>
      <circle cx="185" cy="185" r="175" fill="none" />
      <use xlink:href="#ci3" fill="none" />
      <text fill="#000">
        <textPath xlink:href="#ci3">
          Woher willst du wissen, dass ich verrückt bin?
        </textPath>
      </text>
    </svg>

    <svg id="circle_4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
      <defs>
        <path id="ci4" d="M10,145a135,135 0 1,0 270,0a135,135 0 1,0 -270,0" />
      </defs>
      <circle cx="145" cy="145" r="135" fill="none" />
      <use xlink:href="#ci4" fill="none" />
      <text fill="#000">
        <textPath xlink:href="#ci4">
          Wenn du es nicht wärest, stellte die Grinsekatze fest, dann wärest du nicht hier.
        </textPath>
      </text>
    </svg>

    <svg id="circle_5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <path id="ci5" d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" />
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" />
      <use xlink:href="#ci5" fill="none" />
      <text fill="#000">
        <textPath xlink:href="#ci5">
          &ndash; Lewis Carroll
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BeetleAlice",
};
</script>

<style>
#circles {
  padding-bottom: 48rem;
}

#circles text {
  font-family: "Helvetica Neue", Arial;
  font-weight: bold;
}

#circles svg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#img_center,
#circle_1,
#circle_2,
#circle_3,
#circle_4,
#circle_5 {
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: auto;
}

#img_center {
  animation-duration: 10s;
  animation-direction: reverse;
}

#circle_1 {
  height: 320px;
  animation-duration: 6s;
}

#circle_1 text {
  font-size: 2rem;
}

#circle_2 {
  height: 280px;
  animation-duration: 7s;
}
#circle_2 text {
  font-size: 1.2rem;
}

#circle_3 {
  height: 250px;
  animation-duration: 4s;
}
#circle_3 text {
  font-size: 2.8rem;
}

#circle_4 {
  height: 200px;
  animation-duration: 10s;
}
#circle_4 text {
  font-size: 1rem;
}

#circle_5 {
  height: 150px;
  animation-duration: 7s;
}
#circle_5 text {
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  #circles {
    padding-bottom: 52rem;
  }
  #circle_1 {
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
