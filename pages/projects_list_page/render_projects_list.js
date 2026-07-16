function getDataPortfolioList() {
  //
}

/**
 * NOTE:
 * Cần thêm vòng lặp để chạy cái danh sách portfolio
 *
 * TODO:
 * @param {*} portfolioList
 */
function appendPortfolioContainer(portfolioList) {
  const divContainer = document.querySelector(".portfolio-container");

  /**
   * NOTE:
   * @param data sẽ tương ứng với một đối tượng data
   * trong portfolioSection[array_list] chứ không phải cả mảng
   *
   * @param {portfolioBox} data
   * @param {imgPortfolio} data
   * @param {portfolioLayer} data
   * @param {layer_h4} data
   * @param {layer_p} data
   * @param {layer_a} data
   */
  function renderProjectsList(data) {
    var portfolioBox = document.createElement("div");
    portfolioBox.setAttribute("class", "portfolio-box");

    var imgPortfolio = document.createElement("img");
    imgPortfolio.setAttribute("alt", `${data["projectName"]}`);
    imgPortfolio.setAttribute("src", `${data["urlImgPortfolio"]}`);

    // Begin: Layer
    var portfolioLayer = document.createElement("div");
    portfolioLayer.setAttribute("class", "portfolio-layer");

    var layer_h4 = document.createElement("h4");
    layer_h4.innerHTML = data["title"];

    var layer_p = document.createElement("p");
    layer_p.innerHTML = data["subTitle"];

    var layer_a = document.createElement("a");
    layer_a.setAttribute("target", "_blank");
    // layer_a.setAttribute("href", );
    // layer_a.innerHTML = `<i class="${data["icon"]}"></i>`;

    portfolioLayer.appendChild(layer_h4);
    portfolioLayer.appendChild(layer_p);
    portfolioLayer.appendChild(layer_a);
    // End: Layer

    portfolioBox.appendChild(imgPortfolio);
    portfolioBox.appendChild(portfolioLayer);

    divContainer.appendChild(portfolioBox);
  }

  // for (let i = 0; i < portfolioList.length; i++) {
  for (var portfolioItem of portfolioList) {
    renderProjectsList(portfolioItem);
  }
}
