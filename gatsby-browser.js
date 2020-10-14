export const onInitialClientRender = () => {
  document.body.className = "loading"
  const splash = document.querySelector(".splash")

  if (splash) {
    splash.addEventListener("transitionend", () => {
      splash.style.display = "none"
    })
  }

  setTimeout(function () {
    document.body.className = "loaded"
  }, 500)
}
