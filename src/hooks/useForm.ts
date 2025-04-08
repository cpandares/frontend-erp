import { useState } from "react";

interface FormState {
    [key: string]: unknown;
}

interface InputChangeEvent {
    target: {
        name: string;
        value: unknown;
    };
}

export const useForm = (initialValues: FormState) => {
     const [ formState, setFormState ] = useState<FormState>(initialValues);
    
            const onInputChange = ({ target }: InputChangeEvent) => {
                    const { name, value } = target;
                    setFormState({
                            ...formState,
                            [name]: value
                    });
            };

            const reset = () => {
                setFormState(initialValues);
            };

            return {
                ...formState,
                formState,
                onInputChange,
                reset
            };
}
