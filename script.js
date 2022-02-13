const pageLogo = document.getElementById('pageLogo');
const pageLogoMobileVersion = document.getElementById('pageLogo-mobile');

const tabletDeviceWidth = window.matchMedia("(max-width: 1024px)");

const setPageLogo = (matchMediaObject) => {
    if (matchMediaObject.matches)
    {
        pageLogoMobileVersion.style.display = "initial";
        pageLogo.style.display = "none";

    }
    else
    {
        pageLogoMobileVersion.style.display = "none";
        pageLogo.style.display = "inline";
    }
};

window.addEventListener('resize', () => setPageLogo(tabletDeviceWidth));

setPageLogo(tabletDeviceWidth); // Run function initially so that logo can be set based on the width of the device


const likeSubmissionCheckBoxes = document.querySelectorAll('.name-submission input');

likeSubmissionCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        let counter = checkbox.previousElementSibling;
        counter.textContent = counter.textContent === "0" ? "1" : "0";
    })
});