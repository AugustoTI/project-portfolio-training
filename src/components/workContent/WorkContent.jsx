import React from 'react';
import * as Sytled from './styledWorkContent';

export const WorkContent = ({ title, year, text, type, src, mobile }) => {
  return (
    <Sytled.Article mobile={mobile}>
      <div>
        <img src={src} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <Sytled.Ul mobile={mobile}>
          <li>
            <Sytled.Span>{year}</Sytled.Span>
          </li>
          <li>{type}</li>
        </Sytled.Ul>
        <p>{text}</p>
      </div>
    </Sytled.Article>
  );
};
