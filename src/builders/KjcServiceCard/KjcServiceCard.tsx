
import ServiceDetails from "./ServiceDetails.tsx";
import JybekServiceCarousel from "../JybekServiceCarousel/JybekServiceCarousel.tsx";

const KjcServiceCard = () => {
  return (
    <div>
      {/* <Card
        hoverable
        style={{ width: 300, height: 300 }}
        cover={<ImageCarouselComponent images={[]} />}
      >
        <TagComponent />
        <ServiceFavorite />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        ></div>
      </Card>
      <ServiceDetails /> */}

      <div className="relative">
        <a href="jybek-detailed-services">
          <div
            className="block rounded-2xl bg-white text-white shadow-secondary-1 dark:bg-surface-dark"
            style={{ height: 300 }}
          >
            {/* <img
              className="rounded-xl"
              src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
              alt=""
              style={{ height: 300 }}
            /> */}

            <JybekServiceCarousel />

            <div className="absolute top-0 p-2">
              <p className="text-base">
                <a href="#">
                  <span className="inline-block p-2 whitespace-nowrap rounded-full bg-primary-100 text-center align-baseline text-xs font-normal leading-none text-neutral-800 dark:bg-white dark:text-primary-500">
                    Favorite
                  </span>
                </a>
              </p>
            </div>
          </div>
          <ServiceDetails />
        </a>
      </div>
    </div>
  );
};

export default KjcServiceCard;
