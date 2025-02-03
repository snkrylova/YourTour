"use strict";

const linksContainers = document.querySelectorAll('[class*="__social-links"]');

linksContainers.forEach((linksContainer) => {
  const links = linksContainer.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});
