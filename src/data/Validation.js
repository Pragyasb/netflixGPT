export const checkEmailPassword = (email,password)=> {
    const checkedEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkedPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!checkedEmail) return "Email is not valid"
    if(!checkedPassword) return "Password is not valid"

    return null
}