import NavbarTop from "./navbar.js"

export default function Navbar() {
  return (
    <NavbarTop>
      <span>Soso</span>
      <ul>
        <li>
          <a>Saúde diária</a>
        </li>
        <li>
          <a>Perda de peso</a>
        </li>
        <li>
          <a>Pele</a>
        </li>
        <li>
          <a>Cabelo</a>
        </li>
        <li>
          <a>Blogs</a>
        </li>
      </ul>
      <ul>
        <li>
        <a><img width="32" height="32" src="https://img.icons8.com/small/32/000000/search--v1.png" alt="search--v1"/></a>
        </li>
        <li>
          <a><img width="32" height="32" src="https://img.icons8.com/small/32/user-male-circle.png" alt="user-male-circle"/></a>
        </li>
        <li>
          <a><img width="32" height="32" src="https://img.icons8.com/small/32/shopping-bag.png" alt="shopping-bag"/></a>
        </li>
      </ul>
      <button>Faça o teste</button>
    </NavbarTop>
  )
}
