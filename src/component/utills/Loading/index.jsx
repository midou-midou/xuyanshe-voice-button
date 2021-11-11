import { Skeleton } from "antd";

import 'antd/dist/antd.css';

function Loading() {
    return ( 
        <div className="panel-container dynamic-card">
            <Skeleton active />
        </div>
    );
}

export default Loading;