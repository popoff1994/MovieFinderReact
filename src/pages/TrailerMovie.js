import { useSelector } from 'react-redux';

function TrailerMovie(){
    const videoToPlay = useSelector((state) => {
        return state.playVideo.videoToPlay
    });
    const path="https://www.youtube.com/embed/"
    return (
        <div>
            <iframe title='YouTubePlayer' width="1020" height="630" src={path+ videoToPlay} allow="accelerometer" allowFullScreen></iframe>
        </div>
    )

}
export default TrailerMovie;