
/**
 * This shows how to apply css to your components.
 * Begin by importing your css file like you would anything else.
 */
import './example.css'

/**
 * Use the className prop to specify the class name of the component. You can access this in the css (see example.css)
 * Some things to remember when doing this: 
    - DO NOT FORGET TO IMPORT YOUR CSS FILE, IT WILL **NOT** WORK WITHOUT IT.
    - For name sake, try and match the file name and the css name. It also helps for organizational purposes to put your css in a styles/ folder inside src/
 */
const ApplyCssExample = () => {
    <div className="ContainerDiv">
        <h1 className='MyHeader'>this is a css example</h1>
    </div>
}
