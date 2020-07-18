const $ = document.querySelector.bind(document)

const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]')
}

function TabNavigation() {
    function hideAllTabContent() {
        contents = html.contents
        contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function showCurrentTab(id) {
        hideAllTabContent();

        const tabContent = $("#" + id)
        tabContent.style.display = "block"
    }

    function selectTab(event) {
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        target.className += " active"
    }

    function removeAllActiveClass() {
        const links = html.links
        links.forEach(tab => {
            tab.className = tab.className.replace(" active", "");
        })
    }

    function listenForChange() {
        const links = html.links
        links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    function init() {
        hideAllTabContent()
        listenForChange()
        
        html.openTab.click()
    }
    return {
        init
    }
}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
    tabNavigation.init();
})