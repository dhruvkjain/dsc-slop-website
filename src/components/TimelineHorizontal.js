import React from "react";
import DetailsOutlinedIcon from "@material-ui/icons/DetailsOutlined";
import "./timeline.css";

export default function TimelineHorizontal() {
    return (
        <div className="container">
            <div className="row xs:hidden">
                <div className="col-md-12">
                    <div id="something">
                        <ul className="timeline timeline-horizontal">
                            <li className="timeline-item">
                                <div className="timeline-badge primary">
                                    <i className="glyphicon glyphicon-check"></i>
                                </div>
                                <div className="timeline-panel bg-black border border-white rounded-lg">
                                    {/* <div className="timeline-heading"> */}
                                    <h3 className="timeline-title">
                                        <b>Mentor Registrations</b>
                                    </h3>
                                    {/* <p>
                                        <small className="text-muted">
                                            <i className="glyphicon glyphicon-time"></i> 11 hours
                                            ago via Twitter
                                        </small>
                                    </p> */}
                                    {/* </div> */}
                                    <div className="timeline-body">
                                        <p>25 Sept - 3 Oct</p>
                                    </div>
                                </div>
                                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge info">
                                    <i className="glyphicon glyphicon-check"></i>
                                </div>
                                <div className="timeline-panel bg-black border border-white rounded-lg">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                            <b>Student Registrations</b>
                                        </h3>
                                    </div>
                                    <div className="timeline-body">
                                        <p>3 Oct - 8 Oct</p>
                                    </div>
                                </div>
                                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge info">
                                    <i className="glyphicon glyphicon-check"></i>
                                </div>
                                <div className="timeline-panel bg-black border border-white rounded-lg">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                            <b>Eat. Sleep. Code. Repeat!</b>
                                        </h3>
                                    </div>
                                    <div className="timeline-body">
                                        <p>8 Oct - 8 Dec</p>
                                    </div>
                                </div>
                                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge info">
                                    <i className="glyphicon glyphicon-check"></i>
                                </div>
                                <div className="timeline-panel bg-black border border-white rounded-lg">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">
                                            <b>Results</b>
                                        </h3>
                                    </div>
                                    <div className="timeline-body">
                                        <p>10 Dec</p>
                                    </div>
                                </div>
                                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row hidden xs:block">
                <div className="col-md-12">
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-badge">
                                <i className="glyphicon glyphicon-off"></i>
                            </div>
                            <div className="timeline-panel bg-black border border-white rounded-lg">
                                <div className="timeline-heading mb-10">
                                    <h3 className="timeline-title">
                                        <b>Mentor Registrations</b>
                                    </h3>
                                </div>
                                <div className="timeline-body">
                                    <p>25 Sept - 3 Oct</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge">
                                <i className="glyphicon glyphicon-check"></i>
                            </div>
                            <div className="timeline-panel bg-black border border-white rounded-lg">
                                <div className="timeline-heading mb-10">
                                    <h3 className="timeline-title">
                                        <b>Student Registrations</b>
                                    </h3>
                                </div>
                                <div className="timeline-body">
                                    <p>3 Oct - 8 Oct</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge">
                                <i className="glyphicon glyphicon-off"></i>
                            </div>
                            <div className="timeline-panel bg-black border border-white rounded-lg">
                                <div className="timeline-heading mb-10">
                                    <h3 className="timeline-title">
                                        <b>Eat. Sleep. Code. Repeat!</b>
                                    </h3>
                                </div>
                                <div className="timeline-body">
                                    <p>8 Oct - 8 Dec</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge">
                                <i className="glyphicon glyphicon-check"></i>
                            </div>
                            <div className="timeline-panel bg-black border border-white rounded-lg">
                                <div className="timeline-heading mb-10">
                                    <h3 className="timeline-title">
                                        <b>Results</b>
                                    </h3>
                                </div>
                                <div className="timeline-body">
                                    <p>10 Dec</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <hr className="bg-white -mx-10" /> */}
            </div>
        </div>
    );
}