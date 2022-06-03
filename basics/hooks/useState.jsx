/**
 * Import useState from the react library. 
 */
import { useState } from "react"

/**
 * Purpose of this hook: the useState hook is used to track the state of a variable, which can be updated using the function when initalising the variables.
 * Let's look at the syntax: 
*/
const useStateHookExample = () => {
    const [count, setCount] = useState(0);
    /**
     * An array?? What???
     * Yes, this uses an array. The first argument is that value of the stored state (currently, this is 0). 
     * The second argument is a function you can use to update the variable. 
     * Let's apply this.
     */
    return (
        <div>
            <h1>You've pressed the button {count} {count == 1 ? "time" : "times"}</h1>
            <button onClick={setCount(count++)}>Click me!</button>
        </div>
    )
    /**
     * This would display as "You've pressed the button 0 times!"
     * Clicking the button would change it to "You've pressed the button 1 time!", and so on.
     */


    /**
     * useState can store the state of many things: Strings, bools, numbers, etc.
     * Tou can even use custom types, which i will show in the typescript example file.
     */
}
