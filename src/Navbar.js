export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icon type="logo-instagram" />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <Icon type="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <Icon type="paper-plane-outline" />
                    <Icon type="compass-outline" />
                    <Icon type="heart-outline" />
                    <Icon type="person-outline" />
                </div>

                <div class="icones-mobile">
                    <Icon type="paper-plane-outline" />
                </div>
            </div>
        </div>
    )
}

function Icon(props) {

    return (
        <ion-icon name={props.type}></ion-icon>
    )

}