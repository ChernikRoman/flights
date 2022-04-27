import './FlightsSetting.css';
import FlightsSort from '../FlightsSort/FlightsSort';
import FlightsFilter from '../FlightsFilter/FlightsFilter';
import FlightsPrice from '../FlightsPrice/FlightsPrice';
import FlightsCarrier from '../FlightsCarrier/FlightsCarrier';

export default function FlightsSetting() {
    return(
        <article className="flights-setting">
            <FlightsSort />
            <FlightsFilter />
            <FlightsPrice />
            <FlightsCarrier />
        </article>
    )
}