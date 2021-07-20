import Chart from "../../components/Chart/Chart"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import "./Home.css"
import { userData } from '../../components/Chart/dummyData'
import WidgetSm from "../../components/WidgetSm/WidgetSm"
import WidgetLg from "../../components/WidgetLg/WidgetLg"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
