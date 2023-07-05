import Dock from "../components/Dock";
import { Link } from "react-router-dom";
import Top from "../components/Top";

function IndexView(props) {

    return (
        <div className="index_view">
            <Top/>
            <img src="https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/widgets/images/surprise-and-delight_2x.png" alt="wigets1" width="335px" />
            <img src="https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/widgets/images/focused-widget_2x.png" alt="widgets2" width="160px" />
            <img src="https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/widgets/images/tips_2x.png" alt="widgets3" width="160px" />
            <Link to={"/calculator"}>
                <img src="./img/calculator.png" alt="calculator" width="75px" />
            </Link>
            <Link to={"/todo"}>
                <img src="./img/todo.png" alt="todo" width="75px" />
            </Link>
            <Link to={"/weather"}>
            <img src="./img/weather.png" alt="weather" width="75px" />
            </Link>
            <img src="./img/music.png" alt="music" width="75px" />
            <img src="./img/appstore.png" alt="appstore" width="75px" />
            <img src="./img/mail.png" alt="mail" width="75px" />
            <img src="./img/whatsapp.png" alt="whatsapp" width="75px" />
            <img src="./img/instagram.png" alt="instagram" width="75px" />
            <Dock />
        </div>
    );
}

export default IndexView;