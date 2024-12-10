async function endHitEventHandler(scrollElementId, dotnetObject) {
    let scrollElement = document.getElementById(scrollElementId);
    let toEnd = scrollElement.scrollHeight - (scrollElement.clientHeight + scrollElement.scrollTop);

    if(toEnd <= 0) {
        dotnetObject.invokeMethodAsync("addItems");
    }
}

async function attachEndHitEventHandler(scrollElementId, dotnetObject) {
    let scrollElement = document.getElementById(scrollElementId);

    scrollElement.addEventListener("scroll", () => endHitEventHandler(scrollElementId, dotnetObject));
}
