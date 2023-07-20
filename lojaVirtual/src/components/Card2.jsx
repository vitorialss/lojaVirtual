import Image from "../assets/pills.jpg";
import ProductsCard from "./products";

function ItemCard(props) {
    return (
  <div className="card">
    <h5>{props.title}</h5>
    <p>{props.text}</p>
    <img src={Image} />
    <button>Adicione ao carrinho</button>
  </div>
    )
}

export default function Card2() {
  return (
    <ProductsCard>
      <p className="hash">#Feito para todes</p>
      <h3>Descubra o match perfeito pra sua pele</h3>
      <div className="cardArea">
        <ItemCard
          title="pilula de maracuja"
          text="pilula feita com muito amor"
        />
        <ItemCard
          title="pilula de farinha"
          text="pilula feita com muito amor"
        />
        <ItemCard
          title="pilula de chocolate"
          text="pilula feita com muito amor"
        />
      </div>
      </ProductsCard>
  );
}
