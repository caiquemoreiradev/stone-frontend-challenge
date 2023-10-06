import styled from "styled-components";

export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;

    label {

        font-size: 18px;
        font-weight: 500;
    }

    input {

        width: 132px;
        padding: 16px;

        border-radius: 4px;
        border: 1px solid rgb(215, 224, 235);

        margin: 12px 0;

        filter: drop-shadow(rgba(13, 17, 27, 0.08) 0px 8px 4px);
    }
`;

export const ErrorMessage = styled.span`

    color: #F44853;
`;