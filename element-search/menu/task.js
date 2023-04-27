const menuItems = [...document.getElementsByClassName("menu__item")]


const closeSubMenus = () => {
    menuItems.filter(menuItem => menuItem.querySelector('.menu_sub')).forEach(menuItem =>
        menuItem.querySelector('.menu_sub').className = "menu menu_sub"
    )
}

menuItems.forEach(menuItem => {
    menuItem.querySelector('.menu__link').onclick = () => {
        closeSubMenus();
        menuItem.querySelector('.menu_sub').className = "menu menu_sub menu_active";
        return false;
    }
})