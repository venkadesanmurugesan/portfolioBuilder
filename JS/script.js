var navsMenu = document.getElementById("navsMenuMain");

if (document.body.id === "navsMenuMain") {
  navsMenu.children[0].children[0].style = "pointer-events: none;";
  navsMenu.children[0].children[1].style = "pointer-events: none;";
  navsMenu.children[0].children[2].style = "pointer-events: none;";
  navsMenu.children[0].children[3].style = "pointer-events: none;";
  navsMenu.children[0].children[4].style = "pointer-events: none;";
}
document
  .getElementById("navsDisplayPage")
  .children[0].children[0].children[1].addEventListener("click", () => {
    document.getElementById(
      "navsDisplayPage"
    ).children[0].children[0].children[1].href = "./seperateForms/about.html";
    console.log(navsMenu);
  });
