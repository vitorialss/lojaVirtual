

  
  function TituloExtra(props) {
  return ( 
  <>
  <img src={props.link} />
   <h4>{props.name}</h4>
    <p>{props.text}</p>
    </> 
  )
}

export default function Extra() {
    return (
    <div>
    <TituloExtra link="https//:img.icons8.com/small/32/shopping-bag.png" name="legenda" text="texto abaixo" />
    
   
    </div>
        
    )
}