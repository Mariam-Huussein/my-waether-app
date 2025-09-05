
const CardItemAirQuality = ({quantity, chemicalCompound, parity}) => {
  return (
        <>
            <li className="card-item">
                <p className="title-1">{quantity}</p>
                <p className="label-1">{chemicalCompound} <sub>{parity}</sub></p>
            </li>
        </>
  )
}

export default CardItemAirQuality