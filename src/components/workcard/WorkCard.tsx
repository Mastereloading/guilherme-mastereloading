import { Container } from "./styles"

const WorkCard = ({ ...props }) => {
  const data = props.data

  return (
    <Container>
      <div className="card">
        <img className='image' src={data.image} />
        <h2 className="title">{data.title}</h2>
        <div className="details">
          <p>{data.description}</p>
        </div>
          {
            data.title != 'EM BREVE'
            ? <a href={data.linkto} target="_blank"><button className="button-dark">GitHub</button></a>
            : <></>
          }
      </div>
    </Container>
  )
}

export default WorkCard
