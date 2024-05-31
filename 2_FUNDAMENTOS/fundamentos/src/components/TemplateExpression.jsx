
const TemplateExpression = () => {
const name ="Matheus";
const data = {
    age: 31,
    job: "Programador"
}
  return (
    <div>
        <h2>A soma é {2+2}</h2>
        <h3>Bem vindo {name}</h3>
        <p>Voce tem {data.age} anos, e voce é um  {data.job}</p>
    </div>
  )
}

export default TemplateExpression

