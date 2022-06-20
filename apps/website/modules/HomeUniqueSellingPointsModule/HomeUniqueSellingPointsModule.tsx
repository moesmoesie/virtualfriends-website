import { Container, InfoCard, BlurredRadialGradient } from "ui";
import { RichText } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
interface HomeUniqueSellingPointsModule {
  title?: string;
  uniqueSellingPoints: {
    title: string;
    body: string;
    icon: {
      iconName: any;
      prefix: string;
    };
  }[];
}

const HomeUniqueSellingPointsModule: React.FC<
  HomeUniqueSellingPointsModule
> = ({ title, uniqueSellingPoints = [] }) => {
  return (
    <div className="relative">
      <CenterGradient />

      <div className="relative overflow-hidden">
        <BottomGradient />

        <Container className="relative pb-12">
          {title !== undefined ? (
            <h2 className="display-1 gradient-text">{title}</h2>
          ) : (
            <></>
          )}

          <div className="grid grid-cols-1 gap-3 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
            {uniqueSellingPoints.map((el, index) => {
              return (
                <InfoCard
                  key={index}
                  body={el.body}
                  title={el.title}
                  icon={
                    <FontAwesomeIcon
                      className="text-[24px] text-Teal/500 large:text-[58px]"
                      icon={el.icon.iconName}
                    />
                  }
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <div className="bg-purple-gradient absolute left-1/2 top-full -z-30 h-44 w-[200%] -translate-y-1/4 -translate-x-1/2 overflow-hidden rounded-full opacity-70 blur-[80px] " />
  );
};

const CenterGradient = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -z-40 h-[30rem] w-[30rem] -translate-y-1/2 -translate-x-1/2 text-Teal/500 ">
      <BlurredRadialGradient />
    </div>
  );
};

export default HomeUniqueSellingPointsModule;
