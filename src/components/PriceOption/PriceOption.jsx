import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features } = option;
    return (
        <div className='bg-orange-500 rounded-md p-4 flex flex-col text-white shadow-xl'>
           <h2 className='text-center'>
            <span className='text-5xl md:font-extrabold '>{price}</span>
            <span className='text-xl '>
                /mon
            </span>
           </h2>
           <h4 className='text-2xl text-center my-8'>{name}</h4>

           <div className='pl-6 flex-grow'>
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
           </div>
           <button className='mt-12 bg-white text-black px-2 rounded-lg w-full font-bold hover:bg-blue-800 hover:text-white py-2 text-2xl'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;