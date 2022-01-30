import React, { useMemo } from "react";
import {
  WiThunderstorm,
  WiRainMix,
  WiDayRain,
  WiSnowflakeCold,
  WiRain,
  WiSnow,
  WiFog,
  WiDaySunny,
  WiDayCloudy,
  WiCloud, WiCloudy
} from "react-icons/wi";

const WeatherIcon = (props) => {
  const { code, iconProps } = props;

  const icon = useMemo(() => {
    switch (code) {
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        return (
          <WiThunderstorm {...iconProps}/>
        );

      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        return (
          <WiRainMix {...iconProps}/>
        );

      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
        return (
          <WiDayRain {...iconProps}/>
        );

      case 511:
        return (
          <WiSnowflakeCold {...iconProps}/>
        );

      case 520:
      case 521:
      case 522:
      case 531:
        return (
          <WiRain {...iconProps}/>
        );

      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        return (
          <WiSnow {...iconProps}/>
        );

      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        return (
          <WiFog {...iconProps}/>
        );

      case 800:
        return (
          <WiDaySunny {...iconProps}/>
        );

      case 801:
        return (
          <WiDayCloudy {...iconProps}/>
        );


      case 802:
        return (
          <WiCloud {...iconProps}/>
        );

      case 803:
      case 804:
        return (
          <WiCloudy {...iconProps}/>
        );

      default:
        return (
          <WiDaySunny {...iconProps}/>
        );
    }

  }, [code]);

  return (
    <>
      {icon}
    </>
  );
}

export default WeatherIcon;
