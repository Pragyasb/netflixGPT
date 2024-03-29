import UserSlice from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const Store = configureStore({
reducer:{
    user: UserSlice
}
})