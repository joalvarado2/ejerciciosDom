const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id);

  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() | this.windows();
    },
  };
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.edge() ||
        this.firefox() ||
        this.opera() ||
        this.safari()
      );
    },
  };
  // console.log(ua);
  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
`;

  //Contenido exclusivo
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido se ve solo en chrome</mark></p>`;
  }

  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este contenido se ve solo en edge</mark></p>`;
  }

  //redirecciones
 /*  if (isMobile.android()) {
    window.location.href = "https://reactjs.org/";
  } */
}
