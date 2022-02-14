import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Reset = createGlobalStyle`
   ${reset};
   
   * {
        box-sizing: border-box;
        outline: none;
        border: none;
    }
`;

export default Reset;
