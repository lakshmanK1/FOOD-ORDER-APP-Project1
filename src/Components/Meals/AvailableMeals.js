import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Manchuria',
    description: 'culiflower and soya sauce',
    price: 150,
  },
  {
    id: 'm2',
    name: 'Biryani',
    description: 'made by India spices',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Fried rice',
    description: 'made by stir frying cooked rice',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Noodle',
    description: 'boiled noodles fried with spices',
    price: 280,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
