class PortfolioModel {
  constructor(
    id,
    name,
    title,
    subTitle,
    describe,
    client,
    techsUse,
    // TODO: [urlImgPortfolio]
    urlImgPortfolio,
    urlProduct
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.subTitle = subTitle;
    this.describe = describe;
    this.client = client;
    this.techsUse = techsUse;
    this.urlImgPortfolio = urlImgPortfolio;
    this.urlProduct = urlProduct;
  }
}

export default PortfolioModel;
