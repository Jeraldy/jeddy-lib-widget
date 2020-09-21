import { register } from "jeddy/jredux";
import RLib from "./RLib";
import WLib from "./WLib";

const InternalWidget = (args: any) => {
    const { name } = args || {}
    if (!name) {
        throw Error("You must provide a unique name for this widget..! Eg. name:'myUniqueName'")
    }
    let _RLib = RLib({
        name,
        initialState: { }
    })
    const { actions } = _RLib
    const state = register({ [name]: _RLib.reducer })
    return WLib({ state: state[name] || {}, actions, args })
}

const ExposedWidget = (params: { name: string }) => InternalWidget(params)

export default ExposedWidget;