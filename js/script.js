const toggleTheme = document.getElementById ("toggleTheme"); /* sintaxe obriga a digitar desta forma ( obter elemento pelo id)*/

const rootHtml = document.documentElement;

//função para alterar o tema//
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === 'dark' ? rootHtml.setAttribute("data-theme",'light') : rootHtml.setAttribute("data-theme", 'dark')

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim da função mudar o tema// 
