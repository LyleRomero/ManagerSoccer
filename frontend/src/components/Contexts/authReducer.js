const AuthReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN": {
            console.log("Logging in user:", action.payload);
            return {
                currentUser: action.payload,
            };
        }
        case "LOGOUT": {
            console.log("Logging out user");
            return {
                currentUser: null,
            };
        }
        default:
            return state;
    }
};

export default AuthReducer;
