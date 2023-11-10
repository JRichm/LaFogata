import Image from "next/image"

export default function Loctions() {

    const locationOne = {
        "locationTitle": "Draper",
        "locationImage": "/LaFogataDraper.jpg",
        "address": "13751 Wadsworth Park Dr Suite 101, Draper, UT 84020"
    }

    const locationTwo = {
        "locationTitle": "Sandy",
        "locationImage": "/LaFogataSandy.jpg",
        "address": "9070 State St, Sandy, UT 84070"
    }

    interface LocationInfo {
        locationTitle: string,
        locationImage: string,
        address: string,
    }

    const LocationCard = ({location}: {location: LocationInfo}) => {
        return (
            <div className="flex flex-row bg-white m-3 p-5 ">
                <div className="w-40 h-40 overflow-hidden rounded-md items-center justify-center flex">
                    <Image src={location.locationImage} alt={location.locationTitle} layout="fit" width={200} height={200} objectFit="cover" className="rounded-md" />
                </div>
                <div className="ml-4">
                    <h1>{location.locationTitle}</h1>
                    <p>{location.address}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 self-center">
            <LocationCard location={locationOne} />
            <LocationCard location={locationTwo} />
        </div>
    )
}
