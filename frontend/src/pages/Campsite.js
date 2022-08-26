import CampsiteForm from "../components/Forms/Campsite"

const Campsite = () => {

    const getCampsiteID = (e) => {
        const id = (e.target.campsiteID)
    }

    getCampsiteID()

    return (
        <div>
            <header>
                <h1>Campsite {id}</h1>
                < CampsiteForm readOnly={true} />
            </header>
        </div>
    )
}

export default Campsite
