import Div from "jeddy/dom/Div"
import JLib from "./JLib/index"

export default () => {
    return Div({
        children: [
            JLib({ name: 'Red1' }),
            JLib({ name: 'Red2' })
        ]
    })
}
