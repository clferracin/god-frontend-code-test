import { Flex, Button, Text, Spacer } from 'vcc-ui';
import { useCars } from '../hooks/useCars';
import { CarCard } from './CarCard';
import styles from '../../public/css/Home.module.css'

export const HelloWorld: React.FC = () => {

  const cars = useCars()

  return (
    <div className={styles.homeWrapper}>
      <Text variant='cook'>Todos os modelos Recharge</Text>
      <Spacer/>
      <div className={styles.cardsWrapper}>
        {cars.map(car => {
          return (
            <CarCard 
              key={car.id} 
              car={car}
            />
          )
        })}
      </div>
    </div>
  );
};
