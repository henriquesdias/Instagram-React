function TopoPost(props){
    return (
    <div class="topo">
        <div class="usuario">
        <img src={props.image} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>        
    );
}
function Curtidas(props){
    return (
    <div class="curtidas">
        <img src={props.image} />
        <div class="texto">
            Curtido por <strong>{props.people}</strong> e <strong>outras 101.523 pessoas</strong>
        </div>
    </div>
    );
}
export default function Posts(){
    const posts = [
        {
        imageTop:"assets/img/meowed.svg" ,
        imagePost:"assets/img/gato-telefone.svg" ,
        user: "meowed",
        imageLiked: "assets/img/respondeai.svg",
        userLiked: 'respondeai'
        },
        {
        imageTop:"assets/img/barked.svg" ,
        imagePost:"assets/img/dog.svg" ,
        user: "barked",
        imageLiked: "assets/img/adorable_animals.svg",
        userLiked: 'adorable_animals'
        }
    ]
    return (
    <div class="posts">
        {posts.map( element => {
            return (
                <div class="post">
                    <TopoPost image={element.imageTop} user={element.user}/>
                    <div class="conteudo">
                        <img src={element.imagePost} />
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
                        <Curtidas image={element.imageLiked} people={element.userLiked}/>
                    </div>
                </div>    
            );
        })}
      </div>
    );
}
{/* <div class="post">
<div class="topo">
  <div class="usuario">
    <img src="assets/img/barked.svg" />
    barked
  </div>
  <div class="acoes">
    <ion-icon name="ellipsis-horizontal"></ion-icon>
  </div>
</div>

<div class="conteudo">
  <img src="assets/img/dog.svg" />
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
    <img src="assets/img/adorable_animals.svg" />
    <div class="texto">
      Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
    </div>
  </div>
</div>
</div> */}