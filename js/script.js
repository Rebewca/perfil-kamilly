const toggleTheme = document.getElementById ("toggleTheme"); /* sintaxe obriga a digitar desta forma ( obter elemento pelo id)*/
const rootHtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header");




//função para alterar o tema//
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === 'dark' ? rootHtml.setAttribute("data-theme",'light') : rootHtml.setAttribute("data-theme", 'dark')

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim da função mudar o tema// 



accordionHeaders.forEach(header => {
    header.addEventListener /* header.addEventListener("click", () => {...})
    Função: Adiciona um "ouvinte de eventos" (event listener) ao cabeçalho. Nesse caso, ele "ouve" o evento de clique.
    O que faz: Toda vez que o usuário clicar em um header, a função anônima (dentro dos {...}) será executada. */("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active"); /* verificar se está ativo */

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    }); /* adicionar ação ao clique */


    /* Normalmente, o acordeão( accordion) é usado para mostrar/ocultar blocos de informações sem sobrecarregar o usuário com muito conteúdo de uma vez. */

});


