import { Jeddy, StatefulWidget } from "jeddy";
import { updateState } from "jeddy/jredux";
import App from "./App";

class JReduxApp extends StatefulWidget {
    constructor() {
        super()
        return this.connect()
    }
    componentDidMount() { updateState(this) }
    render() { return App() }
}

Jeddy.Init({ app: new JReduxApp() });
