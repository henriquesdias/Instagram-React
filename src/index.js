import ReactDom from 'react-dom';

function App(){
    return (
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempore dolor explicabo sequi expedita quam quas, culpa aliquid magnam fugit possimus perferendis quaerat suscipit! Reprehenderit optio earum necessitatibus laborum quisquam!</p>
        </div>
    );
}
ReactDom.render(App() , document.querySelector('.root'));