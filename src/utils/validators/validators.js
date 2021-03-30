export const required = (value) => {
    if (value){
        return undefined;
    } else {
        return "Empty field"
    }
}

export const maxLength = (max) => (value) => {
    if(value.length > max) {
        return `Must be ${max} characters or less`
    } else {
        return undefined;
    }
}