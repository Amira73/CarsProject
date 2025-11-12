import { User, Snowflake, Settings, DoorOpen } from "lucide-react";
import styles from './CarDetails.module.css'

export default function CarFeatures() {
  const features = [
    { icon: <User className="h-4 w-4 text-gray-400" />, label: "2 Passengers" },
    { icon: <Snowflake className="h-4 w-4 text-gray-400" />, label: "Air conditioning" },
    { icon: <Settings className="h-4 w-4 text-gray-400" />, label: "CVT" },
    { icon: <DoorOpen className="h-4 w-4 text-gray-400" />, label: "Doors" },
  ];

  return (
    <ul className={styles.ulcarfeatures}>
      {features.map((f, i) => (
        <li key={i} className={`${styles.carfeaturesli}`}>
          {f.icon}
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}