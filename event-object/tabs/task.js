const tabs = [...document.getElementsByClassName("tab")];
const tabsContent = [...document.getElementsByClassName("tab__content")];

let activeTabIndex = 0;
const disableActiveTab = () => {
    tabs[activeTabIndex].className = "tab";
    tabsContent[activeTabIndex].className = "tab__content";
}

tabs.forEach((tab, index) =>
    tab.addEventListener("click", () => {
        disableActiveTab()
        activeTabIndex = index;
        tab.className = "tab tab_active";
        tabsContent[index].className = "tab__content tab__content_active";
    })
)