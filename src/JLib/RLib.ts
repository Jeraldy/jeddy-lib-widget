import { createReducer } from "jeddy/jredux";

const Slice = (name: string) => createReducer({
    name,
    initialState: { checked: true },
    reducers: {
        toggleCheckbox(state: any) {
            return {
                ...state,
                checked: !state.checked
            }
        },
    }
})

export default (name: string) => Slice(name);