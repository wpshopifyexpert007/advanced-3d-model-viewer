export default function tabController() {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll(".components-panel__body-title button");
    panelBodies.forEach((item) => {
      item.addEventListener("click", clickEveryItem);
    });

    function clickEveryItem() {
      this.removeEventListener("click", clickEveryItem);
      panelBodies.forEach((item) => {
        if (item.getAttribute("aria-expanded") === "true" && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener("click", clickEveryItem);
      }, 500);
    }
  }, 500);
}
