import ClimbCard from "../components/ClimbCard";

export default function Home() {
    // var test = Array(10).fill(<ClimbCard/>);
    var test = [];
    for (var i = 0; i < 10; i++) {
        test.push(<ClimbCard id={i}/>);
    }

    return (
        <>
            {/* <h1>Home</h1> */}
            <div className="card-row">

                {test.map((card) => (
                    card
                ))}
            </div>
        </>
    )
}