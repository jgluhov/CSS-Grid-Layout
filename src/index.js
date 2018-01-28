import './styles.scss'


const gridContainer = document.querySelector('.container');

window.printColumns = function() {
    console.log('Grid template columns');
    console.log(
        getComputedStyle(gridContainer).gridTemplateColumns
    )
}