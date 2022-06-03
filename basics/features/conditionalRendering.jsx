

/**
 * Condition rendering is self-explanatory, render a component when a condition is or isn't met. 
 * But how does someone actually do this?
 * Using curly braces, you can specify js code within a <Component></Component>, which you can use to apply specific things. 
 * Let's look at an example:
 */
const FirstExample = () => {
    /**
     * I want to render a "not logged in" div if this user is, well.. not logged in. 
     * Let's create this example "loggedIn" variable, that will be set to a function that doesn't exist, but we'll pretend it returns a bool of if the user is logged in or not.
     * (Also creating an empty user variable because it would make sense)
     */
    let user;
    let loggedIn = checkIfLoggedIn(user);

    return (
        // <> is empty. It allows for multiple parent elements without a "main div". Recommended if you want to just want to add components and don't want to apply any styling.
        <>
            {
                loggedIn ? (
                    <div>
                        <h1> You are logged in!</h1>
                    </div>
                ) : (
                    <div>
                        <h1> You are <b>NOT</b> logged in!</h1>
                    </div>
                )
            }
        </>
    )
}
/**
 * In the above example, you saw me check this using a ternary (it's also possible to use an if statement, however, ternaries are much cleaner and don't take up as much.)
 * Conditional rendering can be used with multiple things, such as: 
    - Logged in / Not logged in (as you saw above).
    - Whether or not the user got the correct thing (Maybe used for some sort of webpage game)
 */

const AnotherRenderingOption = () => {
    let check = () => {
        if(user.isLoggedIn) {
            return (
                <div>
                    <h1> You are logged in!</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1> You are <b>NOT</b> logged in!</h1>
                </div>
            )
        }
    }
    return (
        <>
            {check()}
        </>
    )
}