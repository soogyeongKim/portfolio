import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    @font-face {
        //font-family: 'NIXGONM-Vb';
       //src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff');
        font-weight: normal;
        font-style: normal;
   }
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family: 'NIXGONM-Vb', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.313rem;
        overflow-x: hidden;
        margin: 0;
    }
    h1{
        font-size: 2rem;
        font-weight: lighter;
    }
    p,ul,li{
        font-size: 1rem;
        line-height: 2;
    }
    table {
        font-size: 1rem;
        line-height: 2;
    }
    button{
        all: unset;
        cursor:pointer;
    }
    ::-webkit-scrollbar{
        display: none; 
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
`;

export default globalStyles;
