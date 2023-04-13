import { useState } from "react";
import * as React from 'react';
import "./containerData.css";

export default function HomePage() {
  const [isLoaded] = useState(false);

    if (isLoaded) {
        return <div className='loadData'><span class="loader"></span></div>
    } else {
      return (
        <div className="dataProxy">
            <a href="/proxy"><div className="contData">Прокси</div></a>
            <a href="/accounts"><div className="contData">Аккаунты</div></a>
            <a href="/network"><div className="contData">Сети</div></a>
            <a href="/statistic"><div className="contData">Статистика</div></a>
        </div>
      );
    }
  }
