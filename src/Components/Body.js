import LeftSide from "./LeftSide";
import SideBar from "./SideBar";
export default function Body(){
    return (
    <div class="corpo">
        
        <LeftSide/>
        <SideBar/>
        <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
    );
}