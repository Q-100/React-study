import "./Header.modules.css"
import dummy from "../db/data.json"
function Header() {
    return (
        <div className="black-nav">
            <div>BLOG</div>
            <div className="button-nav">
                <button >목록 추가하기</button>
                <button>글쓰기</button>
            </div>
        </div>
    )
}

export default Header;