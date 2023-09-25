import { useEffect, useState } from "react";
import axios from "axios";
import { Car } from "../types/car.interface";

export function useCars() {

  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/cars.json")
      .then(res => setCars(res.data))
  },[])

  return cars
}