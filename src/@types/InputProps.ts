import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string | null;
    monetary?: boolean;
}