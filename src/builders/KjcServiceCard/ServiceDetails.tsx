import { HeartOutlined, StarFilled } from "@ant-design/icons";

const ServiceDetails = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col justify-start">
        <h5 className="mb-0 text-lg font-medium">Kids HairStyle</h5>
        <p className="mb-0 text-base dark:text-neutral-500"> Beauty Inn</p>
        <p className="text-sm">$146</p>
      </div>

      <span className="float-end" style={{display: 'flex', position: 'relative', bottom: 70}}><StarFilled className="mr-2"/>5.0</span>

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <span style={{ marginRight: "5px" }}>4.5</span> */}
        <HeartOutlined className="text-white text-lg cursor-pointer hover:text-jybekBtn-600"/>
      </div>
    </div>
  );
};

export default ServiceDetails;
