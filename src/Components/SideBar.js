function User(props){
    return (
    <div class="usuario">
      <img src={props.image} />
        <div class="texto">
            <strong>{props.nameOfUser}</strong>
            {props.user}
        </div>
    </div>
    );
}
function Suggestions(props){
    return (
    <div class="sugestao">
        <div class="usuario">
          <img src={props.image} />
          <div class="texto">
            <div class="nome">{props.name}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    );
}
export default function SideBar(){
    const suggestions = [
        {
        img:"assets/img/bad.vibes.memes.svg",
        name: "bad.vibes.memes"
        },
        {
        img:"assets/img/chibirdart.svg",
        name: "chibirdart"
        },
        {
        img:"assets/img/razoesparaacreditar.svg",
        name: "razoesparaacreditar"
        },
        {
        img:"assets/img/adorable_animals.svg",
        name: "adorable_animals"
        },
        {
        img:"assets/img/smallcutecats.svg",
        name: "smallcutecats"
        },
    ];
    return (
    <div class="sidebar">
        <User image="assets/img/catanacomics.svg" nameOfUser="catanacomics" user="Catana"/>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {suggestions.map( (element) => {
            return (
                <Suggestions image={element.img} name={element.name} />
            );
          })}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}