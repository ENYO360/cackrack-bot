import { SERVICESARRAY } from "./ServicesData"

export default function Services() {

    return (
        <div className="services-section" id="services">
            <h2>SERVICES / EXPERTISE</h2>
            <div className="services-wrapper">
                {
                    SERVICESARRAY.map((items) => 
                        <div className="service-box">
                            <h3 className="service-h2">{items.title}</h3>
                            <p className="service-pgh">{items.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}