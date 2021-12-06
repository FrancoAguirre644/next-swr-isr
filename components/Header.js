const Header = () => {
    return (
        <header>
            <div className="nav wrap">
                <div className="logo">
                    <h1>SWR</h1>
                </div>

                <form>
                    <input type="text" required placeholder="Enter your search" />
                    <button>Search</button>
                </form>

                <div className="row">
                    <button className="prev">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <span>1</span>
                    <button className="next">
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>

                <div>
                    <label htmlFor="per-page">Per Page:</label>
                    <select id="per-page">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>

            </div>
        </header>
    )
}

export default Header;