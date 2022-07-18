function User(props){
    return (
    <div className="usuario">
      <img src={props.image} />
        <div className="texto">
            <strong>{props.nameOfUser}</strong>
            {props.user}
        </div>
    </div>
    );
}
function Suggestions(props){
    return (
    <div className="sugestao">
        <div className="usuario">
          <img src={props.image} />
          <div className="texto">
            <div className="nome">{props.name}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
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
    <div className="sidebar">
        <User image="assets/img/catanacomics.svg" nameOfUser="catanacomics" user="Catana"/>

        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {suggestions.map( (element) => {
            return (
                <Suggestions image={element.img} name={element.name} />
            );
          })}
        </div>

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}