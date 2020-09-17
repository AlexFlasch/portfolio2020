import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

// limit the SVG relative to the size of the container, as well as center it
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10vmin 0;

  svg {
    width: 50vmin;
    mix-blend-mode: overlay;
  }
`;

const Logo = props => {
  const animTimeline = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeInOutCirc',
      duration: 500,
      loop: false,
    });

    animTimeline.current = timeline
      .add({
        easing: 'easeInCirc',
        targets: '#a-left-leg-mask-gradient stop',
        offset: 1,
      })
      .add(
        {
          targets: '#a-right-leg-mask-gradient stop',
          offset: 1,
        },
        '-=70',
      )
      .add(
        {
          targets: '#f-left-leg-mask-gradient stop',
          offset: 1,
        },
        '-=350',
      )
      .add(
        {
          easing: 'easeOutCirc',
          targets: '#f-top-mask-gradient stop',
          offset: 1,
        },
        '-=60',
      )
      .add(
        {
          easing: 'easeInOutCirc',
          targets: '#cross-mask-gradient stop',
          offset: 1,
          duration: 700,
        },
        '+=100',
      );

    setTimeout(() => {
      animTimeline.current.play();
    }, 500);
  }, []);

  return (
    <LogoWrapper>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
      >
        <mask id="cross-mask">
          <g
            id="F-Top-Mask"
            transform="matrix(-1.11126e-16,0.6,-1.07225,1.31548e-16,649.395,239.36)"
          >
            <rect
              x="0"
              y="139.329"
              width="35.466"
              height="460.671"
              style={{ fill: 'url(#cross-mask-gradient)' }}
            />
          </g>
        </mask>
        <mask id="f-top-mask">
          <g
            id="F-Top-Mask1"
            transform="matrix(-1.11022e-16,0.6,-1.02148,1.38778e-16,892.501,90)"
          >
            <rect
              x="0"
              y="139.329"
              width="35.466"
              height="460.671"
              style={{ fill: 'url(#f-top-mask-gradient)' }}
            />
          </g>
        </mask>
        <mask id="f-leg-mask">
          <g
            id="F-Left-Leg-Mask"
            transform="matrix(0.649516,0.170409,-0.290117,0.867494,432.965,-36.911)"
          >
            <rect
              x="0"
              y="139.329"
              width="35.466"
              height="460.671"
              style={{ fill: 'url(#f-left-leg-mask-gradient)' }}
            />
          </g>
        </mask>
        <mask id="a-right-leg-mask">
          <g
            id="A-Right-Leg-Mask"
            transform="matrix(-0.652905,0.15993,-0.272276,-0.872019,365.717,575.613)"
          >
            <rect
              x="0"
              y="139.329"
              width="35.466"
              height="460.671"
              style={{ fill: 'url(#a-right-leg-mask-gradient)' }}
            />
          </g>
        </mask>
        <mask id="a-left-leg-mask">
          <g
            id="A-Left-Leg-Mask"
            transform="matrix(0.643807,0.186634,-0.327289,0.885714,235.631,-39.2536)"
          >
            <rect
              x="0"
              y="139.329"
              width="35.466"
              height="460.671"
              style={{ fill: 'url(#a-left-leg-mask-gradient)' }}
            />
          </g>
        </mask>
        <g
          id="Logo-Design--minimal-"
          transform="matrix(1.47621,0,0,1.66667,-85.7232,-150)"
        >
          <g id="Letter-Crosses" mask="url(#cross-mask)">
            <g
              id="F-Cross"
              transform="matrix(1,0,0,0.66671,2.13163e-14,83.3226)"
            >
              <path
                d="M366.366,240L500,240L500,260L361.917,260L366.366,240Z"
                style={{ fill: 'url(#_Linear1)' }}
              />
            </g>
            <g
              id="A-Cross-Left"
              transform="matrix(1,0,0,0.66671,-1.92231e-09,83.3226)"
            >
              <path
                d="M130.611,240L125.611,260L90,260L90,240L130.611,240Z"
                style={{ fill: 'url(#_Linear2)' }}
              />
            </g>
            <g
              id="A-Cross-Right"
              transform="matrix(1,0,0,0.66671,-1.92231e-09,83.3226)"
            >
              <path
                d="M236.074,240L240.321,260L152.83,260L157.761,240L236.074,240Z"
                style={{ fill: 'url(#_Linear3)' }}
              />
            </g>
          </g>
          <g
            id="F-Top"
            transform="matrix(1,0,0,0.767303,2.13163e-14,20.9427)"
            mask="url(#f-top-mask)"
          >
            <path
              d="M417.034,90.173C417.725,90.058 418.481,90 419.298,90L600,90L600,110L412.411,110L416.991,92.113C417.156,91.469 417.171,90.801 417.034,90.173Z"
              style={{ fill: 'url(#_Linear4)' }}
            />
          </g>
          <g
            id="A-Right-Leg"
            transform="matrix(1.0212,0,0,1.0212,-5.29808,-8.54539)"
            mask="url(#a-right-leg-mask)"
          >
            <path
              d="M297.605,368.269L287.954,397.814L202.725,130.223L213.278,101.683L297.605,368.269Z"
              style={{ fill: 'white' }}
            />
          </g>
          <path
            id="F-left-leg"
            mask="url(#f-leg-mask)"
            d="M304.438,403.166C307.44,403.166 310.084,401.416 310.935,398.866C323.458,361.337 413.743,90.771 413.743,90.771C411.474,91.489 410,92.884 410,92.884C410,92.884 393.277,104.941 387.902,108.816C386.833,109.587 386.055,110.629 385.671,111.802C377.658,136.335 290.5,403.166 290.5,403.166L304.438,403.166Z"
            style={{ fill: 'white' }}
          />
          <g
            id="A-left-leg"
            transform="matrix(1.01836,0,0,1.01836,-2.45565,-8.25984)"
            mask="url(#a-left-leg-mask)"
          >
            <path
              d="M209.5,96.5L78.788,450L58.07,450C58.07,450 174.449,139.655 189.123,100.526C190.027,98.116 192.573,96.49 195.44,96.492C201.029,96.495 209.5,96.5 209.5,96.5Z"
              style={{ fill: 'url(#_Linear5)' }}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(162.736,0,0,20,337.264,250)"
          >
            <stop offset="0" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset="0.39"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop offset="0.9" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop offset="1" style={{ stopColor: 'white', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient
            id="_Linear2"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(172.819,0,0,20,90,250)"
          >
            <stop offset="0" style={{ stopColor: 'white', stopOpacity: 0 }} />
            <stop offset="0.1" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop offset="1" style={{ stopColor: 'white', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient
            id="_Linear3"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(172.819,0,0,20,90,250)"
          >
            <stop offset="0" style={{ stopColor: 'white', stopOpacity: 0 }} />
            <stop offset="0.1" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop offset="1" style={{ stopColor: 'white', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient
            id="_Linear4"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(191.5,0,0,11556.4,408.5,110)"
          >
            <stop offset="0" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset="0.95"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              offset="1"
              style={{ stopColor: 'rgb(71,71,135)', stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear5"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(2.16463e-14,-353.511,855.086,5.23589e-14,190.631,450)"
          >
            <stop offset="0" style={{ stopColor: 'white', stopOpacity: 0 }} />
            <stop
              offset="0.05"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop offset="1" style={{ stopColor: 'white', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient
            id="cross-mask-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.51538e-15,-461.564,200.579,6.29366e-14,0,599.755)"
          >
            <stop
              className="reveal"
              offset="0"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              className="hide"
              offset="0.1"
              style={{ stopColor: 'black', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="f-top-mask-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.51538e-15,-461.564,200.579,6.29366e-14,0,599.755)"
          >
            <stop
              className="reveal"
              offset="0"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              className="hide"
              offset="0.1"
              style={{ stopColor: 'black', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="a-right-leg-mask-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.51538e-15,-461.564,200.579,6.29366e-14,0,599.755)"
          >
            <stop
              className="reveal"
              offset="0"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              className="hide"
              offset="0.1"
              style={{ stopColor: 'black', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="f-left-leg-mask-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.51538e-15,-461.564,200.579,6.29366e-14,0,599.755)"
          >
            <stop
              className="reveal"
              offset="0"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              className="hide"
              offset="0.1"
              style={{ stopColor: 'black', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="a-left-leg-mask-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.51538e-15,-461.564,200.579,6.29366e-14,0,599.755)"
          >
            <stop
              className="reveal"
              offset="0"
              style={{ stopColor: 'white', stopOpacity: 1 }}
            />
            <stop
              className="hide"
              offset="0.1"
              style={{ stopColor: 'black', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </LogoWrapper>
  );
};

export default Logo;
