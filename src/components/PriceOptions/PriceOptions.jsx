import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    [
        {
          "id": "1",
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Locker access",
            "Basic fitness classes",
            "Fitness equipment usage",
            "Nutritional guidance"
          ]
        },
        {
          "id": "2",
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym facilities",
            "Locker access",
            "All fitness classes",
            "Personal trainer consultation (1 session/month)",
            "Fitness equipment usage",
            "Nutritional guidance"
          ]
        },
        {
          "id": "3",
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "Access to gym facilities",
            "Locker access",
            "All fitness classes",
            "Unlimited personal trainer sessions",
            "Sauna and spa access",
            "Fitness equipment usage",
            "Nutritional guidance",
            "Towel service"
          ]
        }
      ]
      
    return (
        <div>
             <div className="text-5xl">Best Prices in the town</div>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;