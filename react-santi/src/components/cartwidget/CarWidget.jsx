import React from 'react'
import { Avatar, Badge, Space } from 'antd';

const CarWidget = () => {
    return (
        <Badge count={5}>
        <Avatar shape="square" size="large" />
        </Badge>
    )
}

export default CarWidget