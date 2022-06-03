
/**
 * Things that will not be included because it can be done the same in TS
    - Conditional Rendering
    - useRef
    - useContext
    - useEffect
    - Custom hooks (the only difference is the ability to use generics and providing types, which isn't worth covering.)
*/
import { useState } from "react"
/**
 * Using a custom value and type in useState
*/

const customTypeWithUseState = () => {
    const themeOptions: "light" | "dark" = "light";
    const [theme, setTheme] = useState(themeOptions);
    
    return (
        <>
            <h2>Current Theme: {theme}</h2>
            <button onClick={() => setTheme((current) => current == "light" ? "dark" : "light")}>Set Theme</button>
        </>
    )
}

/**
 * Use interface for custom component props
 */

interface CustomComponentProps {
    name: string; 
    birthday: number;
}

/**
 * if you don't want to type props.var every time, you can do 
 * { valuename, valuename, etc }: YourPropInterface (eg: { name }: CustomComponentProps)
 */
const CustomComponent = (props: CustomComponentProps) => {
    let checkForBday = new Date(Date.now()).getDate();
    return checkForBday == props.birthday ? (
       <>
            <h1>Hello, {props.name}</h1>
            <p>ITS YOUR BIRTHDAY</p>
       </>
    ) : (
        <h1>Hello, {props.name}</h1>
    )
}

/**
 * Lets call our component
 */
function App() {
    <CustomComponent name="Conrad306" birthday={new Date("June 3rd").getDate()}/>
}