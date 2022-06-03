/**
 * Import useRef from the react library.
 */
import { useRef } from "react";

/**
 * What is the useRef hook for? This hooks stores a reference to a DOM element. 
 * Let's look an example.
 */
const useRefHookExample = () => {
    /**
     * This creates an empty reference, which gets added to the textarea later down.
     */
    const ref = useRef(null);

    return (
      <>
        <button onClick={() => {
            ref.current.value = "This content fills the textarea"; 
            ref.current.focus();
        }}>
        </button>
        <textarea ref={ref} />
      </>
    )
}