export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,36}$/

const email = (value, message) => {
    return new RegExp(EMAIL_REGEX).test(value) || message
}

const password = (value, message) => {
    return new RegExp(PASSWORD_REGEX).test(value) || message
}

// eslint-disable-next-line
export default {
    email,
    password
}