import React, { useState } from "react"

import NavTab from "../Navtab"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div>
      <NavTab title="Layers">
        <NavTab title="Linear Layers">
          <li>
            <Link to="/docs/linear">Dense</Link>
          </li>
          <li>
            <Link to="/docs/bilinear">Bilinear</Link>
          </li>
        </NavTab>
      </NavTab>

      <ul>
        <li>
          <p>Layers</p>
          <ul>
            <li>
              <p>Linear Layer</p>
              <ul>
                <li>Dense</li>
                <li>Bilinear</li>
              </ul>
            </li>
            <li>
              <p>Convocational Layers</p>
              <ul>
                <li>Conv1D</li>
                <li>Conv2D</li>
                <li>Conv3D</li>
              </ul>
            </li>
            <li>
              <p>Pooling Layers</p>
              <ul>
                <li>MaxPool1D</li>
                <li>MaxPool2D</li>
                <li>MaxPool3D</li>

                <li>AvgPool1D</li>
                <li>AvgPool2D</li>
                <li>AvgPool3D</li>
              </ul>
            </li>
            <li>
              <p>Recurrent Layers</p>
              <ul>
                <li>LSTM</li>
                <li>RNN</li>
                <li>GRU</li>
              </ul>
            </li>
            <li>
              <p>Other</p>
              <ul>
                <li>Flatten</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
