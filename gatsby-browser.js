export const onInitialClientRender = () => {
    document.body.className = "loading";
    setTimeout(function() {
        document.body.className = "loaded";
    }, 500)
};
