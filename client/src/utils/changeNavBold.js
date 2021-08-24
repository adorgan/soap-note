export default function changeNavBold(selectedNav) {
    // find all bold nav items
    const boldNavs = document.getElementsByClassName("bold-nav");

    // remove bold class from all nav items
    for (let item of boldNavs) {
        item.classList.remove("bold-nav");
    }

    // bold text of selected left side nav item
    const navTitle = document.getElementById(selectedNav);
    navTitle.classList.add("bold-nav");
}
