function Hero() {
    return (
        <div id="home" className="hero d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="display-4 fw-bold">Stephen Muiru</h1>
            <h2 className="role text-secondary mb-3">Aspiring Full Stack Engineer</h2>
            <p className="tagline col-10 col-md-6">
                I'm a self-taught developer who enjoys turning ideas into working products —
                from styling the interface to designing the database behind it.
            </p>

            <div className="d-flex gap-3 mt-4">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-outline-light">Get in Touch</a>
            </div>
        </div>
    )
}

export default Hero;