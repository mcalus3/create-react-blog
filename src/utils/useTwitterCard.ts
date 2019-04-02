function useTwitterCard(title, spoiler) {
  console.log(title, spoiler);

  document
    .querySelector('meta[name="twitter:title"]')!
    .setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')!
    .setAttribute("content", spoiler);
}

export default useTwitterCard;
