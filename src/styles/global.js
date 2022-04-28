import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --color-primary:#FF577F;
        --color-primary-focus:  #FF427F;
        --color-primary-negative: #59323F;
        --grey-50: #868E96;
        --grey-4: #121214;
        --grey-3:#212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --error: #FF0000;
    }

    #root{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    body{
        height: 100vh;
        width: 100%;
        background-color: var(--grey-4);
        color: var(--grey-0);
        font-family:  'Inter', sans-serif;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;
