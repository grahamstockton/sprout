import ApexChart from "./apexchart";

const MonitorCard = (props) => {
    return (
        <div className="card card-compact bg-base-100 shadow border">
            <div className="card-body">
                <div className="flex flex-row items-end gap-1">
                    <div>
                        <h2 className="!m-0 inline-block text-left card-title">{props.title}</h2>
                    </div>
                    <div>
                        <p className="inline-block text-left mb-0.5">{props.blurb}</p>
                    </div>
                </div>
            </div>
            <ApexChart />
        </div >
    );
}

export default MonitorCard;