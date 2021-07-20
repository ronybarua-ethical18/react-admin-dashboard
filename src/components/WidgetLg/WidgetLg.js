import './WidgetLg.css'
import userImg from'../../images/topAvatar.jpg'
export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={`widgetLgButton + ${type}`}>{type}</button>
    }
    return (
        <div className="widgetlg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userImg} alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Rony Jackson</span>
                    </td>
                    <td className="widgetLgDate">
                        2nd June 2021
                    </td>
                    <td className="widgetLgAmount">
                        $234,678
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userImg} alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Rony Jackson</span>
                    </td>
                    <td className="widgetLgDate">
                        2nd June 2021
                    </td>
                    <td className="widgetLgAmount">
                        $234,678
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userImg} alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Rony Jackson</span>
                    </td>
                    <td className="widgetLgDate">
                        2nd June 2021
                    </td>
                    <td className="widgetLgAmount">
                        $234,678
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userImg} alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Rony Jackson</span>
                    </td>
                    <td className="widgetLgDate">
                        2nd June 2021
                    </td>
                    <td className="widgetLgAmount">
                        $234,678
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
