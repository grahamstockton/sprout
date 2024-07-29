import MonitorCard from "./monitorcard";
import PlantCard from "./plantcard";

const SensorCard = (props) => {
    return (
        <div className="card bg-base-100 shadow border flex">
            <div className="card-body">
                <div className="flex flex-row">
                    <h2 className="card-title flex-1">Sensor: {props.sensor_name}</h2>
                    <div className="flex-none">
                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                                <div class="w-10 p-2 rounded-full">
                                    <img alt="sensor options" src={require("../three-dots.png")} />
                                </div>
                            </div>
                            <ul
                                tabindex="0"
                                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>delete sensor</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are you sure?</h3>
                                        <p className="py-4">Please confirm you are certain you want to delete</p>
                                        <button className="btn">cancel</button>
                                        <button className="btn bg-error">delete</button>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex w-1/5 flex-col">
                        <PlantCard />
                        <PlantCard />
                        <PlantCard />
                    </div>
                    <div className="flex grow flex-col">
                        <MonitorCard title="Temperature" blurb="temperature data" />
                        <MonitorCard title="Temperature" blurb="temperature data" />
                        <MonitorCard title="Temperature" blurb="temperature data" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SensorCard;