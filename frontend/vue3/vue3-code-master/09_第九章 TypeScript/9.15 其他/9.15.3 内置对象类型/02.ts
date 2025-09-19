const div: HTMLElement = document.getElementById('test');
const divs: NodeList = document.querySelectorAll('div');
const handleClick = (event: MouseEvent) => {
  console.log(event.target);
}
document.addEventListener('click', handleClick);
const fragment: DocumentFragment = document.createDocumentFragment();