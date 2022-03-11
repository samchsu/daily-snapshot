export const StartLogin = (userCredentials) => ({
    type: "START_LOGIN"
})

export const SuccessLogin = (user) => ({
    type: "SUCCESS_LOGIN",
    payload: user,
})

export const FailureLogin = () => ({
    type: "FAILURE_LOGIN"
})

export const Logout = () => ({
    type: "LOGOUT"
})

export const StartUpdate = (userCredentials) => ({
    type: "START_UPDATE"
})

export const SuccessUpdate = (user) => ({
    type: "SUCCESS_UPDATE",
    payload: user,
})

export const FailureUpdate = () => ({
    type: "FAILURE_UPDATE"
})

