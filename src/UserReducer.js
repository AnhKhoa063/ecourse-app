export const reducer = (state = "Unknown", action) => {
    switch (action.type) {
        case 'vi':
            return 'Xin chào Việt Nam';
        case 'en':
            return 'Hello Vietnam';
        default:
            return state;
    }
}