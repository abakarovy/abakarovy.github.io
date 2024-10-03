const locale = {
    "en-US": {
        'main-col-lead': "This is my personal website. You can see all my projects here (including abandoned and W.I.P's)"
    },
    "ru-RU": {        
        'main-col-lead': 'Это мой личный вебсайт (портфолио). Здесь есть все мои проекты (Включая не завершенные или только начатые проекты)'
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll("[data-il8n-key]")
        .forEach(translateElement)
})

function translateElement(elem) {
    const key = elem.getAttribute("data-il8n-key")
    const translation = locale[navigator.language][key]
    if (!translation) return
    elem.innerText = translation
}