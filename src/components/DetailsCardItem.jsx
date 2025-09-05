
const DetailsCardItem = ({title,icon,quantity,rate}) => {
  return (
    <>
        <div className="card card-sm highlight-card">

            <h3 className="title-3">{title}</h3>

            <div className="wrapper">
                <span className="m-icon">{icon}</span>
                <p className="title-1">{quantity}<sub>{rate}</sub></p>
            </div>

        </div>

    </>
  )
}

export default DetailsCardItem