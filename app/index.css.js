import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  main {
    flex: 1;
    overflow: hidden;
  }

  main ::slotted(*) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
  }

  main ::slotted([state="active"]) {
    visibility: visible;
  }
`;

export default styles;