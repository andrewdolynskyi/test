function changeDiv(div) {
  // select the container and its children
  const parentDiv = document.querySelector(div);
  const divChildren = parentDiv.children;
  // create the empty div and style it
  const emptyDiv = document.createElement("div");
  emptyDiv.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, corporis odio. Dolores quos commodi quia fugit doloremque? Numquam blanditiis fugit, harum natus eveniet optio nostrum dolore odio cupiditate nisi. Dolorem!";
  emptyDiv.className = "product-item  swatch-ready";
  emptyDiv.style.display = "flex";
  emptyDiv.style.justifyContent = "center";
  emptyDiv.style.alignItems = "center";
  emptyDiv.style.textAlign = "center";
  emptyDiv.style.flexGrow = "2";
  // insert the empty div into the children list
  for (let i = 0; i < divChildren.length; i++) {
    if (i === 3) {
      divChildren[i].parentNode.insertBefore(
        emptyDiv,
        divChildren[i].nextSibling
      );
    }
  }
}
changeDiv(".products.list.items.product-items ");
