import { SearchOutlined } from "@ant-design/icons";

const KjcHomeSearch = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3"></div>

        <div className="col-span-12 md:col-span-6 p-0">
          <br /><br />
        <input
          type="search"
          className=" block w-full rounded-full border-2 py-5 px-4 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300"
          placeholder="Search your location"
          aria-label="Search"
        />

        <button
          className="flex p-4 items-center rounded-full bg-jybekBtn-600 text-sm font-medium text-white"
          type="button"
          id="search-button"
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', left: '84%', bottom: '73px'}}
          >
          <SearchOutlined style={{fontSize: 20}}/>
        </button>
        </div>

        <div className="col-span-12 md:col-span-3"></div>
      </div>
    </>
  );
};

export default KjcHomeSearch;
