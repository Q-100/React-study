import { Link } from "react-router-dom"
import "./Header.modules.css"

function Header() {
    return (
        <div className="black-nav">
            <div>
                <Link to="/">
                    BLOG
                </Link>
            </div>
            <div className="button-nav">
                <button >목록 추가하기</button>
                <button>글쓰기</button>

            </div>
        </div>
    )
}

export default Header;