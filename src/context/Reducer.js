const LoginReducer = (state, action) => {
    switch (action.type) {
        case "START_LOGIN":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "SUCCESS_LOGIN":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "FAILURE_LOGIN":
            return {
                user: null,
                isFetching: false,
                error: true
            }

            case "START_UPDATE":
                return {
                    ...state,
                    isFetching: false,
                    error: false
                }
            case "SUCCESS_UPDATE":
                return {
                    user: action.payload,
                    isFetching: false,
                    error: false
                }
            case "FAILURE_UPDATE":
                return {
                    user: state.user,
                    isFetching: false,
                    error: true
                }

        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false
            }

        default:
            return state
    }
};

export default LoginReducer;