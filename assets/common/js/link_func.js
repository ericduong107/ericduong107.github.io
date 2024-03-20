function forwardLink(url) {
  // Cach 0:
  var headTag = document.getElementsByTagName("HEAD")[0];
  var metaRefreshTag = document.createElement("META");
  metaRefreshTag.setAttribute("http-equiv", "refresh");
  metaRefreshTag.setAttribute("content", `0;url=${url}`);
  headTag.appendChild(metaRefreshTag);

  // -----------------------------------------------
  // Cach 1: Similar behavior as clicking on a link
  // window.location.href = url;
  // -----------------------------------------------
  // Cach 2: Similar behavior as an HTTP redirect
  // window.location.replace(url);
}
