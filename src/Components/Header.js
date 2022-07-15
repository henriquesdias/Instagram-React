function IconsTop(){
    const icons = [
      'paper-plane-outline',
      'compass-outline',
      'heart-outline',
      'person-outline'
    ]
    return (
    <div class="icones">
        {icons.map( icon => <ion-icon name={icon}></ion-icon>)}
    </div>
    );
}
function Logo(){
    return (
    <div class="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="separador"></div>
        <img src="assets/img/logo.png" />
    </div>
    );
}
function Container(){
    return (
    <div class="container">
        <Logo />
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>

        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
        <IconsTop />
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    );
}
export default function Header(){
    return (
        <header>
            <div class="navbar">
                <Container />
            </div>
        </header>
    );
}