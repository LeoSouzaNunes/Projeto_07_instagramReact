export default function () {

    return (
        <div class="fundo-mobile">
            <Icon type="home" />
            <Icon type="search-outline" />
            <Icon type="add-circle-outline" />
            <Icon type="heart-outline" />
            <Icon type="person-outline" />
        </div>
    )
}

function Icon(props) {

    return (
        <ion-icon name={props.type}></ion-icon>
    )

}