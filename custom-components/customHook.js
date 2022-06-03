import { useState } from "react";

/**
 * Custom hooks are created by creating a function prefixed with "use".
 * we will take in a bool value
 */

export default function useToggle(initalValue = false) {
    const [state, setState] = useState(initalValue);

    return [
        state, 
        () => setState(!state)
    ]
}