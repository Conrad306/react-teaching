/**
 * Import both createContext & useContext from the react library.
 */
import { createContext, useContext } from "react";


/**
 * useContext is used to generate a stored value base on a provider. 
 * Here's an example.
 */
const useContextHookExample = () => {
    const colorThemes = {
        light: {
            bg: '#ffffff', 
            color: '#00000'
        }, 
        dark: {
            bg: '#00000', 
            color: '#ffffff'
        }
    }

    /**
     * We've now created a context that accesses our colorThemes object.
     */
    const colorThemeContext = createContext(colorThemes.dark);

    /**
     * You would obviously not do this in the same spot, likely in another function or file - but for this example, I'm going to do it like this.
     */
    const theme = useContext(colorThemeContext)
    return (
        <div style={{background: theme.bg}}>
            {
                // other elements here [...]
            }
        </div>
    )
}