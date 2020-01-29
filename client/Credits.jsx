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
                        <td>Donate XSN</td>
                        <td>XfiBSgdNJSVWsfZzKFa1HrcU8WgFCCUXGn</td>
                    </tr>
                    <tr>
                        <td>Donate via LN</td>
                        <td><LNTips /></td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td><a href="https://github.com/cwntr/recksplorer" target="_blank">https://github.com/cwntr/recksplorer</a></td>
                        <td><a href="https://stakenet.info" target="_blank">https://stakenet.info</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}
