
/**
 * We initialise custom components by creating a function or class, then providing any props. 
 * The first example will not provide props.
 */

export function CustomComponent() {
    return (
        <div>
            <p>Hello, world</p>
        </div>
    ) 
}

/**
 * This will now contain props. 
 * In JS, you cannot provide a prop's type (eg string, bool), or check if it exists. I will show you how to do components like this in TS where you can do those things.
 * The only way to check types in JS is to create these types of comments using @param 
 */
export function ComponentWithProps({ person }) {
    return (
        <div>
            <p>Hello, {person}</p>
        </div>
    )
}