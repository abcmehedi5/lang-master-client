import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile">
            <div className="mx-auto md:max-w-none px-4 max-w-7xl sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <section className="text-center">
                    <div
                    className="p-5 bg-image text-white"
                    >
                        ee
                    </div>
                        <div className="dark-overlay">
                            <div
                            className="card mx-md-5 shadow-5-strong mx-4 md:mx-8 lg:mx-12 rounded-md"
                            style={{
                                marginTop: '-100px',
                                background: 'hsla(0, 0%, 100%, 0.8)',
                                backdropFilter: 'blur(30px)',
                            }}
                            >
                            <div className="card-body py-5 px-md-5">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="fw-bold mb-5">Registration now</h2>
                                        <form>
                                        <div className="mb-4">
                                            <input type="text" id="form3Example1" placeholder="Name" name='name' className="form-control" />
                                        </div>

                                        <div className="mb-4">
                                            <input type="email" name='email' id="form3Example3" placeholder="Email address" className="form-control" />
                                        
                                        </div>

                                
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                            className="me-2 custom-checkbox"
                                            type="checkbox"
                                            id="form2Example33"
                                        
                                            />
                                            <label htmlFor="form2Example33" className="form-check-label">
                                            I agree to the terms and conditions
                                            </label>
                                        </div>
                                        <button type="submit" className="btn-block mb-4 bg-warning text-white py-2">
                                            Register Now
                                        </button>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;


