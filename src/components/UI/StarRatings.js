
import { AiFillStar } from "react-icons/ai"

const StarRating = ({ rating }) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<AiFillStar key={i} />);
        }
    }
    return <div className='flex text-lg text-yellow-400 md:text-2xl'>{stars}</div>;
}

export default StarRating;
