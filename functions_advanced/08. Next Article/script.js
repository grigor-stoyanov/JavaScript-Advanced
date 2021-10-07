function getArticleGenerator(articles) {
    function getNext(){
    content = document.getElementById('content')
    content.textContent = articles.shift()
    }
    return getNext
}
