import Div from "jeddy/dom/Div"
import CheckBoxInput from "jeddy/dom/CheckBoxInput"
import { dispatch } from "jeddy/jredux"

export default (params) => {
    const { state, args, actions } = params
    return Div({
        children: [
            CheckBoxInput({
                checked: state.checked,
                onClick: () => dispatch(actions.toggleCheckbox()),
            }),
            `${state.checked}:`,
            args.name
        ]
    })
}