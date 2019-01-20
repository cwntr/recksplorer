import React from 'react';
import AppStyles from './App.css';
import LNTips from './LNTips.jsx';

var styles = {
    container:{
        padding: '5px',
        fontSize: '11px'
    },
}

export default class Credits extends React.Component {
    render() {
        return (
        <div style={styles.container}>
            <table className={AppStyles.datatable}>
                <tbody>
                    <tr>
                        <td>GRS</td>
                        <td>FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN</td>
                    </tr>
                    <tr>
                        <td>LN</td>
                        <td><LNTips /></td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td><a href="https://github.com/groestlcoin/recksplorer" target="_blank">https://github.com/groestlcoin/recksplorer</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}
