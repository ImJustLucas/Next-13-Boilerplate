import styled from "styled-components";

export const ToggleContainer = styled.label`
  cursor: pointer;

  input {
    display: none;
  }

  input + div {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    position: relative;
    box-shadow: inset 14px -14px 0 0 var(--color-toggle-dark, #000);
    transform: scale(1) rotate(-2deg);
    transition:
      box-shadow 0.5s ease 0s,
      transform 0.4s ease 0.1s;
  }

  input + div::before {
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.3s ease;
  }

  input + div::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow:
      0 -23px 0 var(--color-toggle-light, #eee),
      0 23px 0 var(--color-toggle-light, #eee),
      23px 0 0 var(--color-toggle-light, #eee),
      -23px 0 0 var(--color-toggle-light, #eee),
      15px 15px 0 var(--color-toggle-light, #eee),
      -15px 15px 0 var(--color-toggle-light, #eee),
      15px -15px 0 var(--color-toggle-light, #eee),
      -15px -15px 0 var(--color-toggle-light, #eee);
    transform: scale(0);
    transition: all 0.3s ease;
  }

  input:checked + div {
    box-shadow: inset 32px -32px 0 0 #fff;
    transform: scale(0.5) rotate(0deg);
    transition:
      transform 0.3s ease 0.1s,
      box-shadow 0.2s ease 0s;
  }

  input:checked + div::before {
    background: var(--color-toggle-light, #eee);
    transition: background 0.3s ease 0.1s;
  }

  input:checked + div::after {
    transform: scale(1.5);
    transition: transform 0.5s ease 0.15s;
  }
`;
