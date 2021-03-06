import Aux from "../../hoc/Auxiliary";
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;