import styled from "styled-components";

export const FormContainer = styled.div`

    margin-top: 10rem;

    form {

        div.inputs__container {

            display: flex;
            gap: 40px;
        }

        div.purchase__type {

            margin: 24px 0;

            span {

                font-weight: 500;
                font-size: 18px;
            }

            div.purchase__options {

                display: flex;
                align-items: center;

                margin: 12px 0;

                label {

                    display: flex;
                    align-items: flex-start;

                    margin: 12px 12px 0 0;

                    input[type="radio"]:checked::before {
                        width: 22px;
                        height: 22px;
                        border-radius: 24px;
                        top: -8px;
                        left: -6px;
                        content: "";
                        position: relative;
                        display: inline-block;
                        visibility: visible;
                        z-index: 98;
                        background-color: #fff;
                        border: 2px solid rgb(0, 139, 87);
                    }

                    input[type="radio"]:checked::after {
                        content: "";
                        background-color: rgb(0, 139, 87);
                        border: 2px solid #fff;
                        border-radius: 14px;
                        display: block;
                        position: relative;
                        width: 14px;
                        height: 14px;
                        z-index: 999;
                        top: -33px;
                        left: -2px;
                        cursor: pointer;
                    }

                    span {

                        margin-left: 8px;
                    }
                }
            }
        }

        button {

            padding: 8px 16px;

            border: 0;
            border-radius: 8px;

            height: 48px;
            width: 200px;

            background-color: rgb(0, 139, 87);
            color: #fff;

            font-weight: 500;
            font-size: 18px;

            transition: all ease-in-out 0.2s;

            &:disabled {

                background-color: rgb(215, 224, 235);
                cursor: not-allowed;

                &:hover {

                    opacity: 1;
                    cursor: not-allowed;
                }
            }

            &:hover {

                opacity: 0.7;
                cursor: pointer;
            }
        }
    }

    div.result__container {

        button {

            padding: 8px 16px;

            border-radius: 8px;
            border: 1px solid rgb(215, 224, 235);

            height: 48px;
            width: 200px;

            color: #141414;
            background-color: #fff;

            font-weight: 500;
            font-size: 18px;

            filter: drop-shadow(rgba(13, 17, 27, 0.08) 0px 8px 4px);

            transition: all ease-in-out 0.2s;

            &:hover {

                opacity: 0.7;
                cursor: pointer;
            }
        }

        div.result {

            margin: 44px 0;

            p {

                font-weight: 500;
                font-size: 20px;

                color: #45505E;

                margin-bottom: 6px;
            }

            span {

                font-size: 64px;
                font-weight: 700;

                color: #00AB63;
            }
        }

        div.result__details {

            color: #6E7E90;

            strong {

                margin-right: 4px;
            }
        }
    }
`;