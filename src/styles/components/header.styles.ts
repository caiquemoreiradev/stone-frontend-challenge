import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: flex-start;

    gap: 40px;

    div.right__content {

        p {

            font-weight: 500;
            font-size: 18px;

            color: #45505E;
            margin-bottom: 2px;
        }

        span {

            color: #8C9CAD;
            font-size: 14px;

            font-weight: 300;
        }
    }

    @media (max-width: 600px) {

        
        flex-direction: column;
        align-items: center;

        gap: 10px;
    }

    @media (max-width: 450px) {

        
        p, span {

            display: none;
        }
    }
`;