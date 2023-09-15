

const Card = (props) => {
    return (
    <>
        <img src={props.img} alt="" />
        <h3 className="nombrePerro">{props.nombre}</h3>
        <p className="desPerro">{props.des}</p>
    </>
    );
};
export default Card;
