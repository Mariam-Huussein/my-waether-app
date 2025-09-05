import HighlightsSection from "./HighlightsSection";
import HourlyForecast from "./HourlyForecast";

const RightContent = () => {
  return (
    <>
      <div className="content-right">
        <HighlightsSection />
        <HourlyForecast />
      </div>
    </>
  );
};

export default RightContent;