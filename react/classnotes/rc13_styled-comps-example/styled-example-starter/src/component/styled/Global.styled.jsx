import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${({ theme }) => theme.colors.body};
        
    }

    p{
        opacity: 0.8;
        font-size: 1.5rem;
    }
`;
