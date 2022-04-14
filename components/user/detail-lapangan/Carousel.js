export default function Carousel() {
    return (
        <>
            <div className="carousel-item active">
                <img src="http://placekitten.com/100/200" width='100' height='300' className="d-block w-100" />
            </div>
            <div className="carousel-item" >
                <img src="http://placekitten.com/100/200" width='100' height='300' className="d-block w-100" />
            </div>
            <div className="carousel-item">
                <img src="http://placekitten.com/100/200" width='100' height='300' className="d-block w-100" />
            </div>
        </>
    )
}