export default () => {
  let body = document.querySelector(`body`);
  // body.addEventListener(`load`, () => console.log(`loaded`));
  body.onload = () => {
    console.log(`loaded`);
  }
}