import "../css/header.css";
export const Header_component = ()=>{
  
    return (
        <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="src/assets/front-end-developer.webp" alt="" width="80" height="80" class="d-inline-block align-text-top"></img>
            <span>
              Srinath_UI_Developer
            </span>
          </a>
        </div>
      </nav>
    )
}