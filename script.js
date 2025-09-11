//your JS code here. If required.
const btn=document.getElementById("button")
btn.addEventListener("click",selectionColor)
function selectionColor(){
    const select = document.getElementById("colorSelect");
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        selectedOption.remove();
    }
}
