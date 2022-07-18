import React from "react";
function TopoPost(props){
    return (
    <div className="topo">
        <div className="usuario">
        <img src={props.image} />
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>        
    );
}
function Curtidas(props){
    return (
    <div className="curtidas">
        <img src={props.image} />
        <div className="texto">
            Curtido por <strong>{props.people}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
        </div>
    </div>
    );
}
export default function(){
    const posts = [
        {
        imageTop:"assets/img/meowed.svg" ,
        imagePost:"assets/img/gato-telefone.svg" ,
        user: "meowed",
        imageLiked: "assets/img/respondeai.svg",
        userLiked: 'respondeai',
        icon: 'heart-outline',
        numberLikes: '101.523'
        },
        {
        imageTop:"assets/img/barked.svg" ,
        imagePost:"assets/img/dog.svg" ,
        user: "barked",
        imageLiked: "assets/img/adorable_animals.svg",
        userLiked: 'adorable_animals',
        icon: 'heart-outline',
        numberLikes: '99.159'
        },
    ]
    return (
    <div className="posts" >
        {posts.map( (post) => {
            const [Liked , setLiked] = React.useState(post.icon);
            const [Color, setColor] = React.useState('black');
            return (
                <div className="post" onClick={()=> {
                    if (Liked === post.icon) {
                        setLiked('heart');
                        setColor('red md hydrated');
                    } 
                }}>
                    <TopoPost image={post.imageTop} user={post.user}/>
                    <div className="conteudo">
                        <img src={post.imagePost} />
                    </div>
                    <div className="fundo">
                        <div className="acoes">
                            <div >
                                <ion-icon name={Liked} class={Color} onClick={() => {
                                    if (Liked === post.icon) {
                                      setLiked('heart');
                                      setColor('red md hydrated');
                                    } else {
                                        setLiked('heart-outline');
                                        setColor('black md hydrated');
                                    }
                                }}>
                                </ion-icon>
                                <ion-icon name="chatbubble-outline" ></ion-icon>
                                <ion-icon name="paper-plane-outline" ></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <Curtidas image={post.imageLiked} people={post.userLiked} numberLikes={post.numberLikes}/>
                    </div>
                </div>    
            );
        })}
      </div>
    );
}
