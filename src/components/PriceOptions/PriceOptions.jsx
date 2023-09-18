import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
      const priceOptions = [
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
        <div className="m-12">
             <h2 className="text-3xl font-bold mb-5">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;