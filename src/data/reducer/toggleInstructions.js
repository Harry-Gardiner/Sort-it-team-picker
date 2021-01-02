export const toggleInstructions = (state) => {
    return {
        ...state,
        showInstructions: !state.showInstructions,
    };
};