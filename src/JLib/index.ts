import { connectLibrary } from "jeddy/jredux";
import RLib from "./RLib";
import WLib from "./WLib";

const InternalWidget = (state: any, args: any) => {
    const { name } = args || {}
    if (!name) {
        throw Error("You must provide a unique name for this widget..! Eg. name:'myUniqueName'")
    }
    const { actions } = RLib(name)
    InternalWidget.UniqueName = name
    return WLib({ state: state[name] || {}, actions, args })
}

InternalWidget.UniqueName = "UniqueName"
InternalWidget.Reducer = RLib

const mapStateToProps = (state: any) => ({ ...state })

const ExposedWidget = (params: { name: string }) => {
    return connectLibrary(mapStateToProps, params)(InternalWidget);
}

export default ExposedWidget;