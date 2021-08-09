const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://youtube.com/");
  //   const grabHeadline = await page.evaluate(() => {
  //     const headline = document.querySelector(".css-1s44ra");
  //     return headline.innerHTML;
  //   });
  //   console.log(grabHeadline);
  const grabTitles = await page.evaluate(() => {
    const titleTags = document.querySelectorAll("#video-title");
    const titles = [];
    titleTags.forEach((element) => {
      titles.push(element.innerHTML);
    });
    return titles;
  });
  console.log(grabTitles);
  await browser.close();
})();
