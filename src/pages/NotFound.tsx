// NotFound.js

import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404 - Not Found"
      subTitle="Sorry, the page you are looking for might be in another castle."
      extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
    />
  );
};

export default NotFound;
