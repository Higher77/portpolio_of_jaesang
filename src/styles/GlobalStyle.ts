import SpartanB from 'assets/fonts/Spartan-Bold.ttf';
import SpartanM from 'assets/fonts/Spartan-Medium.ttf';
import SpartanL from 'assets/fonts/Spartan-Light.ttf';
import 도시락B from 'assets/fonts/210도시락B.ttf';
import 도시락M from 'assets/fonts/210도시락R.ttf';
import 도시락L from 'assets/fonts/210도시락L.ttf';
import NotoSansT from 'assets/fonts/NotoSansKR-Thin.otf';
import NotoSansR from 'assets/fonts/NotoSansKR-Regular.otf';
import NotoSansM from 'assets/fonts/NotoSansKR-Medium.otf';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: '도시락B';
        src: url(${도시락B}) format('truetype');
    }

    @font-face {
        font-family: '도시락M';
        src: url(${도시락M}) format('truetype');
    }

    @font-face {
        font-family: '도시락L';
        src: url(${도시락L}) format('truetype');
    }

    @font-face {
        font-family: 'SpartanB';
        src: url(${SpartanB}) format('truetype');
    }

    @font-face {
        font-family: 'SpartanM';
        src: url(${SpartanM}) format('truetype');
    }

    @font-face {
        font-family: 'SpartanL';
        src: url(${SpartanL}) format('truetype');
    }

    @font-face {
        font-family: 'NotoSansT';
        src: url(${NotoSansT}) format('truetype');
    }

    @font-face {
        font-family: 'NotoSansR';
        src: url(${NotoSansR}) format('truetype');
    }

    @font-face {
        font-family: 'NotoSansM';
        src: url(${NotoSansM}) format('truetype');
    }
    
`;

export default GlobalStyle;
