import './Home.scss'

const Home = () => {
    return(
        <section className="home">
            <video className="home__video" autoPlay muted loop id="myVideo">
                <source src="./videos/bgvideo.mp4" type="video/mp4" />
            </video>
        </section>
    )
}


export default Home;