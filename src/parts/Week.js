import { Hours } from "./Today";

function Week({ hoursData }) {

    return (
        <>
            <section className="card bg-dark w-100 p-3">
                <h1 className="text-white text-start ps-4 pt-1 h5">Hours</h1>
                <br />
                <Hours hoursData={hoursData} />
            </section>
        </>
    )
}

export default Week