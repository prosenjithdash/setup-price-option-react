
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex gap-3 items-center mr-2"> <BsFillCheckCircleFill className=''></BsFillCheckCircleFill>{feature}</p>
        </div>
    );
};

export default Feature;