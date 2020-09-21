import { createReducer } from "jeddy/jredux";

const Slice = (params: { name: string, initialState: {} }) => createReducer({
    name: params.name,
    initialState: params.initialState,
    reducers: {}
})

export default (params: { name: string, initialState: {} }) => Slice(params);