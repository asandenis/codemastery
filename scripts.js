function selectTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const selectedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    const selectedContent = document.querySelector(`.tab-content[data-content="${tabId}"]`);

    if (selectedTab && selectedContent) {
        selectedTab.classList.add('active');
        selectedContent.classList.add('active');
    }
};

function displayChapter(chapterId) {
    const chapterContent = document.getElementById(chapterId);

    chapterContent.classList.toggle('open');

    const chapterTitle = document.querySelector(`h2[onclick="displayChapter('${chapterId}')"]`);

    if (chapterContent.classList.contains('open')) {
        chapterTitle.innerHTML = chapterTitle.innerHTML.replace(/^►/, '▼');
    } else {
        chapterTitle.innerHTML = chapterTitle.innerHTML.replace(/^▼/, '►');
    }
};