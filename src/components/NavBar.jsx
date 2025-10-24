import {navlink} from "../constants"

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navlink.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                   ))}
                </ul>

                <div className="flex-center gap-3">
                    <botton>
                        <img src="/search.svg" alt="search" />
                    </botton>
                    <button>
                        <img src="/cart.svg" alt="cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
