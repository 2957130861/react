let initState = {
    file: "",
    text: ''
}

//默认会执行一次，返回值就是state, 就要取的数据
exports.reducer = (state = initState, action) => {
    if (action.type === 'setFile') {
        return {
            file: action.file,
            text: state.text
        }
    } else if (action.type === 'setText') {
        return {
            file: state.file,
            text: action.text,
        }
    }
    else {
        return state;
    }
}