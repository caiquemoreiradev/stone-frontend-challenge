import { InputProps } from "../@types/InputProps";
import { ErrorMessage, InputContainer } from "../styles/components/input.styles";
import { formatMonetaryValue } from "../utils/formatMonetaryValue";

export const Input = ({ label, errorMessage, monetary, ...rest }: InputProps) => {

    return (
        <InputContainer>

            <label>{label}</label>
            <input
                type="text"
                {...rest}
            />

            <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputContainer>
    )
}