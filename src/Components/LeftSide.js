import Stories from "./Stories";
import Posts from "./Posts";
export default function LeftSide(){
    return (
    <div className="esquerda">
        <Stories />
        <Posts/>
    </div>
    );
}