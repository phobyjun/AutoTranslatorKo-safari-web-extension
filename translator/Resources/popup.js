function clickPopUp() {
    browser.tabs.query({currentWindow: true, active: true}, function (tabs) {
        var activeTab = tabs[0];
        browser.tabs.sendMessage(activeTab.id, {"message": "start"});
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("translate").addEventListener("click", clickPopUp);
});
