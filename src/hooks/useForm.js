import { useState } from "react";

const useForm = ( initalForm = {} ) => {

    const [formState, setFormState] = useState(initalForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        })

    }

    const onReset = () => {
        setFormState(initalForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
    }
}

export default useForm