import React, {useState} from "react";
import {animated, useSprings} from "react-spring"

function RightEye(props) {
  return (<g {...props}>
    <ellipse
      fill="#fff"
      strokeWidth="0"
      rx="12"
      ry="12"
      transform="translate(165.193 134.596)"
    ></ellipse>
  </g>);
}

function RightEyeball(props) {
  return (<g {...props}>
    <ellipse
        strokeWidth="0"
        rx="8"
        ry="8"
        transform="translate(169.238 134.975)"
      ></ellipse>
  </g>);
}

function RightEyebrow(props) {
  return (<g {...props}>
    <path
      strokeWidth="0"
      d="M-9.927 6.034C-9.927 4.304.7.108 7.387.108s7.824 2.401 7.01 4.222S6.327 3.726.02 4.349s-9.947 3.415-9.947 1.685z"
      transform="matrix(-1 0 0 1 170.399 116.942)"
    ></path>
  </g>);
}

function LeftEye(props) {
  return (<g {...props}>
    <ellipse
      fill="#fff"
      strokeWidth="0"
      rx="12"
      ry="12"
      transform="translate(140.193 134.596)"
    ></ellipse>
  </g>);
}

function LeftEyeball(props) {
  return (<g {...props}>
    <ellipse
      strokeWidth="0"
      rx="8"
      ry="8"
      transform="translate(136.143 134.884)"
    ></ellipse>
  </g>);
}

function LeftEyebrow(props) {
  return (<g {...props}>
    <path
      strokeWidth="0"
      d="M-9.927 6.034C-9.927 4.304.7.108 7.387.108s7.824 2.401 7.01 4.222S6.327 3.726.02 4.349s-9.947 3.415-9.947 1.685z"
      transform="translate(135.491 117.453)"
    ></path>
  </g>);
}

export const AnimationStates = {
  Idle: 0,
  Thinking: 1,
  Mad: 2,
  Happy: 3,
  Sad: 4,
};

export function SetAnimationState(state) {
  animState = state;
}

let animState;

function Verizy() {
  const [animState, SetAnimationState] = useState(AnimationStates.Idle);

  const svgEyes = [
    <RightEye key="righteye"/>,
    <LeftEye key="lefteye"/>,
  ];

  // Animation state handler for the whites in Verizy eyes
  const eyeSprings = useSprings(svgEyes.length, svgEyes.map((_, index) => {
    switch (animState) {
      case AnimationStates.Idle:
      return {
        transform: 'translate3d(0px, 0px, 0px)', 
        
        opacity: 1
      };
      case AnimationStates.Happy:
      return {
        transform: 'translate3d(0px, 0px, 0px)', 
        opacity: 1,
      };
    }
  }));
  
  // Apply animation to eyes
  const animatedEyes = eyeSprings.map((animatedStyle, index) => {
    return <animated.g key={index} style={{transformOrigin: 'center', transformBox: 'fill-box', ...animatedStyle}}>{svgEyes[index]}</animated.g>
  });

  const svgEyeballs = [
    <RightEyeball key="righteyeball"/>,
    <LeftEyeball key="lefteyeball"/>,
  ]

  // Animation state handler for the pupils in Verizy eyes
  const eyeballSprings = useSprings(svgEyeballs.length, svgEyeballs.map((obj, index) => {
    switch (animState) {
      case AnimationStates.Idle:
      return {
        transform: 'translate3d(0px, 0px, 0px)', 
        opacity: 1
      };
      case AnimationStates.Happy:
      return {
        transform: 'translate3d(0px, 10px, 0px)', 
        opacity: 1
      };
    }
  }));
  
  // Apply animation to eyeballs
  const animatedEyeballs = eyeballSprings.map((animatedStyle, index) => {
    return <animated.g key={index} style={{transformOrigin: 'center', transformBox: 'fill-box', ...animatedStyle}}>{svgEyeballs[index]}</animated.g>
  });

  const svgEyebrows = [
    <RightEyebrow key="righteyebrow"/>,
    <LeftEyebrow key="lefteyebrow"/>,
  ]

  // Animation state handler for the Verizy eyebrows
  const eyebrowSprings = useSprings(svgEyebrows.length, svgEyebrows.map((obj, index) => {
    switch (animState) {
      case AnimationStates.Idle:
      return {
        transform: 'rotate(0deg) translate3d(0px, 0px, 0px)', 
        opacity: 1
      };
      case AnimationStates.Happy:
      return {
        transform: `rotate(${Math.cos(3.14 * index) * 20}deg) translate3d(0px, -5px, 0px)`, 
        opacity: 1
      };
    }
  }));
  
  // Apply animation to eyeballs
  const animatedEyebrows = eyebrowSprings.map((animatedStyle, index) => {
    return <animated.g key={index} style={{transformOrigin: 'center', transformBox: 'fill-box', ...animatedStyle}}>{svgEyebrows[index]}</animated.g>
  });

  return (
    <div>
    <button type="button" onClick={() => {SetAnimationState(AnimationStates.Idle)}}>Idle</button>
    <button type="button" onClick={() => {SetAnimationState(AnimationStates.Happy)}}>Look at Gyat</button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 256 256"
      width="256"
      height="256"
    >
      <path
        fill="#d42b1d"
        strokeWidth="0"
        d="M81.907797 -63.130294L114.227138 -63.130294 28.034118 86.869706 -4.290089 86.869706 -52.776401 6.869706 -20.452193 6.869706 11.06242 57.323614 81.907797 -63.130294z"
        transform="matrix(.9281 0 0 1 110.632 116.13)"
      ></path>
      {animatedEyes}
      {animatedEyeballs}
      {animatedEyebrows}
    </svg>
    </div>
  );
}

// export default Verizy;
