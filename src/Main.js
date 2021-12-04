export default function Main() {
    const recommendedData = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes"
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar"
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals"
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats"
        }
    ];

    const storiesData = [
        {
            image: "assets/img/9gag.svg",
            user: "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            user: "meowed"
        },
        {
            image: "assets/img/barked.svg",
            user: "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            user: "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg",
            user: "memeriagourmet"
        }
    ]

    const postData = [
        {
            userPic: "assets/img/meowed.svg",
            username: "meowed",
            postImage: "assets/img/gato-telefone.svg",
            likedBy: "respondeai",
            likeNumber: "101.523"
        },
        {
            userPic: "assets/img/barked.svg",
            username: "barked",
            postImage: "assets/img/dog.svg",
            likedBy: "adorable_animals",
            likeNumber: "99.159"
        }
    ]


    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {storiesData.map((data) => (<Story image={data.image} user={data.user} />))}
                    <div class="setinha">
                        <Icon type="chevron-forward-circle" />
                    </div>
                </div>

                <div class="posts">
                    {postData.map((data) => (<Post userPic={data.userPic} username={data.username} postImage={data.postImage} likedBy={data.likedBy} likeNumber={data.likeNumber} />))}
                </div>
            </div>

            <div class="sidebar">

                <User profilePic="assets/img/catanacomics.svg" username="catanacomics" name="Catana" />

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    {recommendedData.map((data) => <Recommended image={data.image} name={data.name} />)}
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}


function Icon(props) {

    return <ion-icon name={props.type}></ion-icon>
}

function Story({ image, user }) {

    return (
        <div class="story">
            <div class="imagem">
                <img src={image} />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )

}

function Post({ userPic, username, postImage, likedBy, likeNumber }) {

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={userPic} />
                    {username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras {likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}

function User({ profilePic, username, name }) {

    return (
        <div class="usuario">
            <img src={profilePic} />
            <div class="texto">
                <strong>{username}</strong>
                {name}
            </div>
        </div>
    )
}

function Recommended({ image, name }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={image} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )

}