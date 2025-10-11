
import { css } from 'lit';

export const styles = css`

* {
  margin: 0px;
  padding: 0px;
}

main {
  display: grid;
  place-content: center;
  height: 100%;
}
main div {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
main div button {
  padding: 5px 8px;
  border-radius: 10px;
}
`;

export default styles;
