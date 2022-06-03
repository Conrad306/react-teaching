/**
 * Import useEffect from the react library. 
 */
import { useEffect, useState } from "react"


/**
 * Purpose of this hook: the useEffect hook is to tell react to apply side effects on components. 
 * Let's look at an example:
*/
const useEffectHookExample = () => {
    const name = "world";
    /** 
     * With our current formatting, this effect will run every-time it is re-rendered
    */
    useEffect(() => {
        document.title = `hello, ${name}`
    });
    
}

/**
 * Another example of the UseEffect hook, this time, with rendering with a different condition.
 */
const SayHi = ({ person }) => {
    
    useEffect(() => {
        document.title = `Hi, ${person}!`
    }, [person]);
    /**
     * How is this any different than the other example?
     * Notice the array after the callback function. This is a dependency, and useEffect can optionally take one in. 
     * What do they do? - They provide a specific condition to the rendering process: Re-render if the dependency updates. 
     * You can also provide an empty array as a dependency to tell it to render once, or nothing like the "useEffectHookExample" function, which will re-render every time. 
     */

    return <div>Hello, {person}!</div>
}