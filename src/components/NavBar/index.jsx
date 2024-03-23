

const Header = ({ onSearch, sortedState, onSort}) => {


  
  return (
      <div className="container-fluid" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a className="navbar-brand" href="/">Lmoa</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"  id="navbarSupportedContent" style={{justifyContent: 'space-between'}}>
            <form className="form-inline my-2 my-lg-0 mr-auto">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => onSearch(e.target.value)} />
            </form>
            <button className="btn btn-primary my-2 my-lg-0" onClick={() => onSort(sortedState == 'l' ? "r" : "l")}>{sortedState == 'l' ? "Higher price" : "Lower Price"}</button>
          </div>
        </nav>
      </div>

  );
};

export default Header;
