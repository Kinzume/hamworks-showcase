const h1Arr = Array.from(document.querySelectorAll("h1"));

document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const maxScrollPos =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollMultiplier1 = (scrollPos / maxScrollPos) * 9;
  const scrollMultiplier2 = (scrollPos / maxScrollPos) * 8;
  const scrollMultiplier3 = (scrollPos / maxScrollPos) * 2;
  h1Arr[0].style.transform = `translateX(${scrollMultiplier1}%)`;
  h1Arr[1].style.transform = `translateX(-${scrollMultiplier2}%)`;
  h1Arr[2].style.transform = `translateX(${scrollMultiplier3}%)`;
});
