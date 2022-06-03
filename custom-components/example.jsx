/**
 * Import our custom components and hook.
 */
import { CustomComponent, ComponentWithProps } from "./customComponent"
import { useToggle } from "./customHook"

/** 
 * We call our custom component the same way as any other component.
*/
const x = () => {
    const [value, setValue] = useToggle(false); 
    return(
        <>
            <CustomComponent>
                <div>
                    <h1> some other stuff </h1>
                </div>
            </CustomComponent>
            <ComponentWithProps person={"Conrad306"}/>
            <div>
                <h1>{value.toString()}</h1>
                <button onClick={() => setValue()}>Edit Value</button>
            </div>
        </>
    )
    /**
     * Outputs: 
     * Hello, world
     * some other stuff
     * Hello, Conrad306!
     * false
     * [Edit Value Button =>  Clicking changes "false" to "true"]
     */
}