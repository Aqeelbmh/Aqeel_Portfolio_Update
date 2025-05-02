'use client';

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          id="toggle" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider">
          <div className="moons-hole">
            <div className="moon-hole" />
            <div className="moon-hole" />
            <div className="moon-hole" />
          </div>
          <div className="black-clouds">
            <div className="black-cloud" />
            <div className="black-cloud" />
            <div className="black-cloud" />
          </div>
          <div className="clouds">
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
            <div className="cloud" />
          </div>
          <div className="stars">
            <svg className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  z-index: 50;
  padding: 4px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
    border: 1px solid rgb(58, 58, 58);
    border-radius: 16px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    border-radius: 16px;
    transition: 0.4s;
    overflow: hidden;
    z-index: 2;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 1s;
    border-radius: 50%;
    overflow: hidden;
  }

  .moons-hole {
    content: "";
    position: absolute;
    opacity: 1;
    transition: 1s;
  }

  .moon-hole {
    position: absolute;
    border-radius: 50%;
    transform: translateX(0px);
  }

  .moon-hole:nth-child(1) {
    background-color: rgb(85, 85, 85);
    height: 3px;
    width: 3px;
    top: 18px;
    left: 14px;
  }

  .moon-hole:nth-child(2) {
    background-color: rgb(85, 85, 85);
    height: 6px;
    width: 6px;
    top: 11px;
    left: 5px;
  }

  .moon-hole:nth-child(3) {
    background-color: rgb(85, 85, 85);
    height: 2px;
    width: 2px;
    top: 8px;
    left: 15px;
  }

  input:checked + .slider {
    background-color: #62cff0;
  }

  input:checked + .slider:before {
    transform: translateX(32px);
    background-color: orange;
  }

  input:checked + .slider .moons-hole {
    transform: translateX(32px);
    opacity: 0;
  }

  .stars {
    right: 4px;
    top: 0;
    bottom: 0;
    transition: 1s;
    transform: translateY(0px);
  }

  .star {
    position: absolute;
    fill: white;
    animation: star-twinkle 2s infinite;
    opacity: 1;
  }

  .star:nth-child(1) {
    top: 3px;
    right: 20px;
    width: 12px;
    animation-delay: 0.3s;
  }

  .star:nth-child(2) {
    top: 12px;
    right: 6px;
    width: 10px;
  }

  .star:nth-child(3) {
    top: 3px;
    right: 10px;
    width: 6px;
    animation-delay: 0.6s;
  }

  .star:nth-child(4) {
    top: 18px;
    right: 20px;
    width: 8px;
    animation-delay: 0.9s;
  }

  .star:nth-child(5) {
    top: 1px;
    right: 35px;
    width: 5px;
    animation-delay: 1.2s;
  }

  input:checked + .slider .stars {
    transform: translateY(-20px);
    opacity: 0;
  }

  @keyframes star-twinkle {
    0% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.2);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  .clouds {
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 14px;
    transition: 1s;
    transform: translateX(-35px);
  }

  .black-clouds {
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 14px;
    transition: 1s;
    transform: translateX(-35px);
    opacity: 0;
    z-index: 0;
  }

  .black-cloud {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: #555;
    opacity: 60%;
    border-radius: 50%;
    animation: cloud-move 6s infinite;
    animation-delay: 1s;
  }

  .black-cloud:nth-child(1) {
    top: 1px;
    right: 2px;
  }

  .black-cloud:nth-child(2) {
    top: 10px;
    left: 6px;
  }

  .black-cloud:nth-child(3) {
    top: 14px;
    left: 19px;
  }

  input:checked + .slider .black-clouds {
    transform: translateX(20px);
    opacity: 1;
  }

  .cloud {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 50%;
    z-index: 1;
    animation: cloud-move 6s infinite;
  }

  .cloud:nth-child(1) {
    top: 0;
    height: 15px;
    width: 15px;
    right: 10px;
  }

  .cloud:nth-child(2) {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    top: 10px;
    right: 4px;
  }

  .cloud:nth-child(3) {
    height: 16px;
    width: 16px;
    top: 20px;
    left: 3px;
  }

  .cloud:nth-child(4) {
    top: 18px;
    left: 14px;
  }

  .cloud:nth-child(5) {
    top: 21px;
    left: 21px;
  }

  .cloud:nth-child(6) {
    top: 19px;
    left: 32px;
  }

  .cloud:nth-child(7) {
    top: 22px;
    left: 40px;
  }

  input:checked + .slider .clouds {
    transform: translateX(20px);
    opacity: 1;
  }

  @keyframes cloud-move {
    0% {
      transform: translateX(-20px);
    }
    40% {
      transform: translateX(-24px);
    }
    80% {
      transform: translateX(-16px);
    }
    100% {
      transform: translateX(-20px);
    }
  }
`;

export default ThemeToggle; 