

/**
 * Providing links is quite simple. 
 * You can use url links, provided as https://thesite.com
 * Or you can link files, like /about.
 * Rules for linking: 
    - Wrap links in <Router> element.
    - index files do not get provided as /index, instead as just /. This applies to everything.
    - Unlike having .html at the end of files, you do not need to provide the .jsx/.ts/.tsx/.js extension when you link to your page. It also will not be in the url. 
 */
import { BrowserRouter, Route, Link, useRoutePath, Switch, useParams } from "react-router-dom"


const basicRoutingExample = () => {
    <BrowserRouter>
         <div>
            <Link to="/about">About Page</Link>
         </div>
    </BrowserRouter>
}

/**
 * What if i want dynamic pages, like /topics/1?
 * You can do this as well
 */
const dynamicRouting = () => {
    let page = useRoutePath();
    return (
        <Switch>
            <Route path="/topics/:topicValue">
                <TopicPage />
            </Route>
            <Route path={page.path}>
                <h2>Provide a path.</h2>
            </Route>
        </Switch>
    )
}

const TopicPage = () => {
    /**
     * useParams gathers the parameters from the path (in this case, topicValue)
     */
    let { topicValue } = useParams();
    return (
        <div>
            <h1>You selected topic number: {topicValue}</h1>
        </div>
    )
}