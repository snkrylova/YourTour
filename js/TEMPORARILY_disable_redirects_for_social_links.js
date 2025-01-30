"use strict";

const storiesLinksContainers = document.querySelectorAll(".stories__links");

storiesLinksContainers.forEach((storiesLinksContainer) => {
  const storiesLinks = storiesLinksContainer.querySelectorAll(
    ".link:not(.link_more)"
  );

  storiesLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});
