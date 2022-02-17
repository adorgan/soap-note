export default function changeContentHeight(div) {
    // find all bold nav items
    const content = document.getElementsByClassName("bold-nav");

    // remove bold class from all nav items
    for (let item of boldNavs) {
        item.classList.remove("bold-nav");
    }

    // bold text of selected left side nav item
    const navTitle = document.getElementById(selectedNav);
    navTitle.classList.add("bold-nav");
}